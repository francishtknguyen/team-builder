import React from 'react';

export default function Form(props) {
  
    const {values, update, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
  

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
       
        <label>
          Name: 
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="First Name"
            maxLength="30"
          />
        </label><br />

        <label>
          Email: 
          <input
            name="email"
            value={values.email}
            type="email"
            onChange={onChange}
            placeholder="type an email"
          />
        </label><br />

        <label>
          Role: 
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="instructor">Host/Hostess</option>
            <option value="student">Chef</option>
            <option value="graduate">Waiter</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}