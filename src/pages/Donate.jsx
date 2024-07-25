import React, { useState } from 'react';
import Pay from './Pay';

function Donate() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef',
    padding: '20px'
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    transition: 'all 0.3s ease'
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '12px',
    width: '100%',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'border-color 0.2s ease'
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  };

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const tx_ref = `negade-tx-${Date.now()}`;
  const public_key = 'CHAPUBK_TEST-fyWi4eChG3JBec7YatFhxsmlbnaUwHSi';

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <input
          onChange={e => setFname(e.target.value)}
          type='text'
          placeholder='First Name'
          value={fname}
          style={inputStyle}
        />
        <input
          onChange={e => setLname(e.target.value)}
          type='text'
          placeholder='Last Name'
          value={lname}
          style={inputStyle}
        />
        <input
          onChange={e => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
          value={email}
          style={inputStyle}
        />
        <input
          onChange={e => setAmount(e.target.value)}
          type='number'
          placeholder='Amount'
          value={amount}
          style={inputStyle}
        />
        <Pay
          public_key={public_key}
          tx_ref={tx_ref}
          amount={amount}
          email={email}
          first_name={fname}
          last_name={lname}
        />
      </div>
    </div>
  );
}

export default Donate;
