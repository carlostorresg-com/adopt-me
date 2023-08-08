import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false };

  // note: you need to use Class components to use getDerivedStateFromError and componentDidCatch
  // there is no equivalent in function components

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // lifecycle method
  componentDidCatch(error, info) {
    console.error('ErrorBoundary component caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{' '}
          <Link to="/">Click here to go back to the home page.</Link>
        </h2>
      );
    }

    // if there is no error, smoothly follow along
    return this.props.children;
  }
}

export default ErrorBoundary;
