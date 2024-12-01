import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../api';
import './UpdateEmployee.css';

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      const { data } = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, employee);
    navigate('/');
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        <button type="submit">Update</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
