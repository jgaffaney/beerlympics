import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onContinue = (event) => {
    history.push('/first');
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
           Welcome to the 4th Annual Beer Olympics Home Page.
           This page is still under construction!!
          </p>
          <p>
            Beer Olympics is an annual event that allows participants the opportunity to test their skills in
            a set of rigorous events that test excellence, endurance, and alcohol tolerance.  
            From humble begins of being designed on a bar napkin in 2019 to the modern day olympics that we know
            and love.  The games have been an opportunity for both players and spectators to enjoy a day of stress
            relief, friendly competion, great food, and the college drinking games we all know and love.
          </p>


        </div>
        <div className="grid-col grid-col_12">
          {/* <RegisterForm /> */}

          <center>
            {/* <h4>Already a Member?</h4> */}
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
            <button className="btn btn_sizeSM" onClick={onContinue}>
              Continue as a Guest
            </button>
            <br></br>
            <a href="">Register</a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;