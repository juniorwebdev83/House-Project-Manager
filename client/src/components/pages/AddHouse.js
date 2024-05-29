// src/pages/AddHouse.js
import React, { useState } from 'react';
import axios from 'axios';

const AddHouse = () => {
  const [formData, setFormData] = useState({
    address: '',
    contactInfo: '',
  });

  const { address, contactInfo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/houses', formData, {
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
        name="address"
        value={address}
        onChange={onChange}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="contactInfo"
        value={contactInfo}
        onChange={onChange}
        placeholder="Contact Info"
        required
      />
      <button type="submit">Add House</button>
    </form>
  );
};

export default AddHouse;
