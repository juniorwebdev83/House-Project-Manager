// src/pages/UploadPhoto.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [houseId, setHouseId] = useState('');

  const onFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onHouseIdChange = (e) => {
    setHouseId(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`/api/uploads/${houseId}`, formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={houseId} onChange={onHouseIdChange} placeholder="House ID" required />
      <input type="file" onChange={onFileChange} required />
      <button type="submit">Upload Photo</button>
    </form>
  );
};

export default UploadPhoto;
