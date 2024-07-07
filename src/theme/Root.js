import React from 'react';
import ApplyTwemoji from '/src/components/ApplyTwemoji';

function Root({ children }) {
  return (
    <>
      {children}
      <ApplyTwemoji />
    </>
  );
}

export default Root;
