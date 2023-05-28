import './App.css'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [tel, setTel] = useState("");
  const handleClick = () => {
    console.table({username, id, city, date, tel })
  }
    return (
      <div className='registration-form'>
        <h3> Registration Form </h3>
        <div className='forms'>
          <div className='labels'>
            <label> ID </label>
            <label> Name </label>
            <label> City </label>
            <label> Tel </label>
            <label> Date of Birth </label>
          </div>
        <div>
            <input type='text' onChange={(e) => setId(e.target.value)} />
            <input type='text' onChange={(e) => setUsername(e.target.value)} />
            <input type='text' onChange={(e) => setCity(e.target.value)} />
            <input type='number' onChange={(e) => setTel(e.target.value)} />
            <input type='date' onChange={(e) => setDate(e.target.value)} />
        </div>
        </div>
      <div className='submit-container'>
        <button onClick={handleClick}>Submit </button>
      </div>
      </div>
    );
  }

export default App
