import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  // a component should always return markup, which is the result of createElement
  return React.createElement(
    'div', // what kind of element this is
    {}, // attributes
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        animal: 'Dog',
        name: 'Luna',
        breed: 'Havanese',
      }),
      React.createElement(Pet, {
        animal: 'Bird',
        name: 'Pepper',
        breed: 'Cockatiel',
      }),
      React.createElement(Pet, {
        animal: 'Dog',
        name: 'Tyrsi',
        breed: 'Chihuahua',
      }),
    ]
    // children
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
