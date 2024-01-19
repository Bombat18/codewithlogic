

import React, { useState } from 'react';
import EditEmployeeModal from './EditEmployeeModal';

const EmployeeListItem = ({ employee, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="mb-4 p-5 border  rounded text-white">

      <p className='p-1'> <span className='text-cyan-300 font-bold'>Name:</span> {employee.name}</p>
      <p className='p-1'><span className='text-cyan-300 font-bold'>Designation:</span> {employee.designation}</p>
      <p className='p-1'><span className='text-cyan-300 font-bold'>Available: </span>{employee.available ? 'Yes' : 'No'}</p>


      <button
        className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
        onClick={() => setShowEditModal(true)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => onDelete(employee.id)}
      >
        Delete
      </button>


      {showEditModal && (
        <EditEmployeeModal
          employee={employee}
          onClose={() => setShowEditModal(false)}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default EmployeeListItem;
