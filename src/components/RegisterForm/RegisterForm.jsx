import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responder, setResponder] = useState('');
  const [agency, setAgency] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        responder: responder,
        agency: agency,
      },
    });
  }; 

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="firstResponder">
          Fire/PD/EMS/Medical? (optional):
          <input 
            type="checkbox" 
            name="firstResponder" 
            id="firstResponder"
            value={firstResponder}
            onChange={e => setResponder(e.target.value)}/>
        </label>
        {responder &&
          (<label htmlFor="agency">
              Agency (optional):
              <input type="text" name="agency" id="agency"
              onChange={e=> setAgency(e.target.value)}/>
            </label>)}
        <div>
          <label htmlFor="team">
            Team:
            <select name="team" id="team">
              <option value="Team1">Team 1</option>
              <option value="Team2">Team 2</option>
              <option value="Team3">Team 3</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
