import React from 'react';
import { Link } from 'react-router-dom';

const CitiesList = () => {
  const cities = [
    { id: 1, name: 'ThisCompany', age: 20 },
    { id: 2, name: 'ThatCompany', age: 50 },
    { id: 3, name: 'ThatCompany', age: 60 },
  ];

  return (
    <div>
      <h1>Cities List</h1>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/city/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
