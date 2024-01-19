

import React, { useState } from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(
    emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search Your Employee"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-72"
      />


      {filteredEmployees.map((employee) => (
        <EmployeeListItem
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
