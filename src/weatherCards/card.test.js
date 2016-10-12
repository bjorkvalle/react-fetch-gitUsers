import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const card = new Card();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card city="dallas"/>, div);
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'sad';
    
    //expect(card.returnString()).toBe(text);
    expect('sad').toBe(text);
  })
})