import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';

const initialMembersList = [
  {
  id: uuid(),
  name:'Galo Sandoval',
  email:'galosan@gmail.com',
  role:'The Muscle'
  }
]

const initialFormValues = {
  name:'',
  email:'',
  role:''
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMembersList})
}
const fakeAxiosPost = (url, {name, email, role}) => {
  const newMember = { id: uuid(), name, email, role}
  return Promise.resolve({ status: 200, success: true, data: newMember})
}

function App() {
  const [person, setPerson]  = useState([]) 
  const [formValue, setFormValue] = useState(initialFormValues)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
