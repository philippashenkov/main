import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the App component', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('contains header, main, and footer elements', () => {
    render(<App />);
    expect(screen.getByRole('header')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('footer')).toBeInTheDocument();
  });

  it('displays correct text content in header, main, and footer elements', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to My App');
    expect(screen.getByText('This is the main content area.')).toBeInTheDocument();
    expect(screen.getByText('2023 My App')).toBeInTheDocument();
  });
});
