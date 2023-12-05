// src/components/Error404.js
import React from 'react';

const Error404 = ({ location }) => {
  return (
    <div>
      <p>Error 404: Page not found</p>
      <p>Route: {location.pathname}</p>
    </div>
  );
};

export default Error404;
