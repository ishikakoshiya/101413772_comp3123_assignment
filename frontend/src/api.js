import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api/employees' });

export const fetchEmployees = () => API.get('/');
export const addEmployee = (employee) => API.post('/', employee);
export const getEmployeeById = (id) => API.get(`/${id}`);
export const updateEmployee = (id, employee) => API.put(`/${id}`, employee);
export const deleteEmployee = (id) => API.delete(`/${id}`);
