import React, { useState, useEffect } from 'react';

function App() {
  const [meetUps, setMeetUps] = useState([]);

  useEffect(() => {
    fetchMeetUps();
  }, []);

  const fetchMeetUps = async () => {
    try {
      const response = await fetch('http://localhost:8050/api/meetups');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMeetUps(data.meetUps);
    } catch (error) {
      console.error('Error fetching meetups:', error);
    }
  };

  return (
    <div>
      <h2 style={{ color: '#2e6c80' }}>Meet Ups:</h2>
      <ul>
        {meetUps.map((meetUp, index) => (
          <li key={index}>{meetUp}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;