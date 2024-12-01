import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api';
import './AddEmployee.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    navigate('/');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Save</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEmployee;
