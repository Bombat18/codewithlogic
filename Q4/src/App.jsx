
import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployeeModal from './AddEmployeeModal';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [availableEmployees, setAvailableEmployees] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
   
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
    setTotalAndAvailableEmployees(storedEmployees);
  }, []);

  const setTotalAndAvailableEmployees = (employeeList) => {
    setTotalEmployees(employeeList.length);
    setAvailableEmployees(employeeList.filter(emp => emp.available).length);
  };

  const handleAddEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    setTotalAndAvailableEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleEditEmployee = (editedEmployee) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === editedEmployee.id ? editedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setTotalAndAvailableEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
    setTotalAndAvailableEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="flex  p-10">
      <div className=" w-1/4 pr-4">
        
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-cyan-300 ">Dashboard Overview</h2>
          
          <p className='text-white'>Total Employees: {totalEmployees}</p>
          <p className='text-white'>Available Employees: {availableEmployees}</p>
        </div>

        
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Employee
        </button>
      </div>

      <div className="w-3/4">
        
        <EmployeeList
          employees={employees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />

        
        {showAddModal && (
          <AddEmployeeModal
            onClose={() => setShowAddModal(false)}
            onAdd={handleAddEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default App;
