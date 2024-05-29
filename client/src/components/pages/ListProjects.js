// src/pages/ListProjects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/projects', {
          headers: {
            'x-auth-token': token,
          },
        });
        setProjects(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            House: {project.house} - Start: {project.startDate} - End: {project.endDate} - Budget: {project.budget} - Status: {project.status}
            <br />
            Notes: {project.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
