import React from 'react';
import ReactDOM from 'react-dom';
import Snake from '../Snake';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Snake />, div);
});
