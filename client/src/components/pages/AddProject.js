// src/pages/AddProject.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [formData, setFormData] = useState({
    house: '',
    startDate: '',
    endDate: '',
    budget: '',
    status: 'Pending',
    notes: '',
  });

  const { house, startDate, endDate, budget, status, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/projects', formData, {
        headers: {
          'x-auth-token': token,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="house"
        value={house}
        onChange={onChange}
        placeholder="House ID"
        required
      />
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={onChange}
      />
      <input type="date" name="endDate" value={endDate} onChange={onChange} />
      <input
        type="number"
        name="budget"
        value={budget}
        onChange={onChange}
        placeholder="Budget"
      />
      <select name="status" value={status} onChange={onChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <textarea
        name="notes"
        value={notes}
        onChange={onChange}
        placeholder="Notes"
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
