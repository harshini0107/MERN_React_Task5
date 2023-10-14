/*
import './App.css';

function App() {
  return (
    <div >
      
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleCalculateAge = () => {
    if (birthdate) {
      const dob = new Date(birthdate);
      const today = new Date();
      const ageDiff = today - dob;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="font-weight-bold">Age Calculator</h1>
        <br></br>
        <h4 className="font-weight-bold">Enter your date of birth</h4>
      </div>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleCalculateAge}>
          Calculate Age
        </button>
      </div>
      {age !== null && (
        <div className="text-center font-weight-bold mt-3">
          <strong>You are {age} years old</strong>
        </div>
      )}
    </div>
  );
}

export default App;


