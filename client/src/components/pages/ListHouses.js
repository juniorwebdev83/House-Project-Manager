// src/pages/ListHouses.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/houses', {
          headers: {
            'x-auth-token': token,
          },
        });
        setHouses(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div>
      <h1>My Houses</h1>
      <ul>
        {houses.map((house) => (
          <li key={house._id}>
            {house.address} - {house.contactInfo} - {house.progress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListHouses;
