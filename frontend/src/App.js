import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
          <Route path="/view-employee/:id" element={<ViewEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
