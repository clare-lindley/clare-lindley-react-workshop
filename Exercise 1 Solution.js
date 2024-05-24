// Import the React library
import React from 'react';

// Create a functional component named Exercise1
const Exercise1 = () => {
  // Create an ordered list with three favorite animals - all cats, obviously!
  const animalsList = React.createElement('ol', null,
    React.createElement('li', null, 'Cat'),
    React.createElement('li', null, 'Cat'),
    React.createElement('li', null, 'Cat')
  );

  // Create a section with your name
  const nameSection = React.createElement('section', null,
    'Clare',
    animalsList
  );

  // Wrap the section in a div element
  const divElement = React.createElement('div', null, nameSection);

  // Return the div element
  return divElement;
};

// Export the Exercise1 component
export default Exercise1;

