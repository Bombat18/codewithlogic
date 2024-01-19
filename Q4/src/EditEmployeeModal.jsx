// EditEmployeeModal.js

import React, { useState, useEffect } from 'react';

const EditEmployeeModal = ({ employee, onClose, onEdit }) => {
    const [editedEmployee, setEditedEmployee] = useState({ ...employee });

    useEffect(() => {
        setEditedEmployee({ ...employee });
    }, [employee]);

    const handleEditEmployee = () => {
        onEdit(editedEmployee);
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded">
                <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
                <div className="mb-4">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={editedEmployee.name}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label>Designation:</label>
                    <input
                        type="text"
                        value={editedEmployee.designation}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, designation: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label>Age:</label>
                    <input
                        type="number"
                        value={editedEmployee.age}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, age: parseInt(e.target.value) })}
                    />
                </div>
                <div className="mb-4">
                    <label>Available:</label>
                    <input
                        type="checkbox"
                        checked={editedEmployee.available}
                        onChange={() => setEditedEmployee({ ...editedEmployee, available: !editedEmployee.available })}
                    />
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditEmployee}>
                        Save
                    </button>
                    <button className="ml-2 px-4 py-2" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditEmployeeModal;
