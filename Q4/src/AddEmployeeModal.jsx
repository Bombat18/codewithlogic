

import React, { useState } from 'react';

const AddEmployeeModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [age, setAge] = useState('');
  const [available, setAvailable] = useState(true);

  const handleAddEmployee = () => {

    if (!name || !designation || isNaN(age) || age <= 0) {
      alert('Please fill all mandatory fields and provide a valid age.');
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      designation,
      age: parseInt(age),
      available,
    };

    onAdd(newEmployee);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold mb-4">Add Employee</h2>
        <div className="mb-4">
          <label>Name:</label>
          <input className='border rounded-sm p-1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label>Designation:</label>
          <select name="department" className='bg-gray-200 rounded p-1' value={designation} onChange={(e) => setDesignation(e.target.value)}>
          <option className='text-gray-400 text-center '>Add Designation</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Testing">Testing</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        <div className="mb-4">
          <label>Age:</label>
          <input type="number" className='border rounded-sm' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="mb-4">
          <label>Available:</label>
          <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddEmployee}>
            Add
          </button>
          <button className="ml-2 px-4 py-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
