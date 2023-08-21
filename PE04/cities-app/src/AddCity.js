import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddCity = () => {
  const [cityData, setCityData] = useState({
    name: '',
    age: '',
  });

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission and add the new city to your data store
    // Redirect to the cities list page upon successful submission
    // Example: Assuming you have a function to add a city
    // addCity(cityData);
    history.push('/');
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={cityData.name}
          onChange={e => setCityData({ ...cityData, name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="number"
          value={cityData.age}
          onChange={e => setCityData({ ...cityData, age: e.target.value })}
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
