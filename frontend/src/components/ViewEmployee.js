import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../api';
import './ViewEmployee.css';

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const { data } = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  return (
    <div>
      <h2>View Employee Details</h2>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>
  );
};

export default ViewEmployee;
