import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';

const initialMembersList = [
  {
  id: uuid(),
  username:'Galo Sandoval',
  email:'galosan@gmail.com',
  role:'The Muscle'
  }
]

const initialFormValues = {
  username:'',
  email:'',
  role:''
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMembersList})
}
const fakeAxiosPost = (url, {username, email, role}) => {
  const newMember = { id: uuid(), username, email, role}
  return Promise.resolve({ status: 200, success: true, data: newMember})
}

function App() {
  const [person, setPerson]  = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues)

  // Form state updater
  const updateForm = (inputAtr, inputValue) => {
    const updatedFormValues = { ...formValues, [inputAtr]:inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!newFriend.username || !newFriend.email || !newFriend.role){return}
    fakeAxiosPost('fakeapi.com', newFriend)
      .then(res => {
        const memberFromAPI = res.data
        setPerson([memberFromAPI, ...person])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setPerson(res.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exclusive Members Only</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <MemberForm 
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}
        />
      </header>
      {
        person.map(person => {
          return (
            <Member key={person.id} details={person}/>
          )
        })
      }
    </div>
  );
}

export default App;
