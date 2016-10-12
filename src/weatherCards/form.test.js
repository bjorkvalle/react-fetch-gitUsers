import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const form = new Form();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form onChange/>, div);
});

// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'sad';
    
//     expect(form.returnString()).toBe(text)
//   })
// })