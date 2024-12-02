import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees, deleteEmployee } from '../api';
import './EmployeeList.css';  

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees = async () => {
      const { data } = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter((emp) => emp._id !== id));
  };

  return (
    <div className="container">
      <h2>Employees List</h2>
      <button onClick={() => navigate('/add-employee')}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button className="update-btn" onClick={() => navigate(`/update-employee/${emp._id}`)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(emp._id)}>Delete</button>
                <button className="view-btn" onClick={() => navigate(`/view-employee/${emp._id}`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
