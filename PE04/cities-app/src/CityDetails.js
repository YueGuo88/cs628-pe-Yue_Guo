import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { id } = useParams();

  // Fetch city details based on the id (you can use state or context)
  const city = { id: 1, name: 'ThisCompany', age: 20 }; // Replace with actual data

  return (
    <div>
      <h1>City Details</h1>
      <h2>{city.name}</h2>
      <p>Age: {city.age}</p>
    </div>
  );
};

export default CityDetails;
