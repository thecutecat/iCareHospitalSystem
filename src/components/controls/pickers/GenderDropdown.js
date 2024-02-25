/* eslint-disable linebreak-style */
import React, { useState } from 'react';

const GenderDropdown = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <label htmlFor="genderDropdown">Select Gender:</label>
      <select id="genderDropdown" value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Display the selected gender */}
      {selectedGender && <p>You selected: {selectedGender}</p>}
    </div>
  );
};

export default GenderDropdown;