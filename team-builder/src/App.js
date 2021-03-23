import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './Form'
import Member from './Member'

const initialFormValues = {
  name:"",
  email:"",
  role:""
}
const membersList = [{name:"Example", email:"Example", role:"Example"}];

function App() {
  const [members, setMembers] = useState(membersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]:value,})
  };

  const submitForm = () => {
    const newMembers = {
      name : formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };

    if(!newMembers.name || !newMembers.email || !newMembers.role) return;

    // setMembers(members.concat(newMembers));
    setMembers([newMembers, ...members]);
    setFormValues(initialFormValues);

  }

  // useEffect(() => {
  //   setMembers(membersList)
  // }, [members])

  return (
    <div className="App">

      {members.map( (member) => {
        return <Member key={member.name} details={member} />
      })}
      <Form values={formValues} update={updateForm} submit={submitForm}/>

     
     
      
    </div>
  );
}

export default App;
