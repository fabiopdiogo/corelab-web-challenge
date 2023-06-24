import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '.';

test('renders learn react link', () => {
  render(<TodoList />);
  const searchElement = screen.getByPlaceholderText(/search/i);
  const buttonElement = screen.getByText(/add new vehicle/i);
  expect(searchElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
