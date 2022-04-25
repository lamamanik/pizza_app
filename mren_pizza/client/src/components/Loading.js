import React from 'react';

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{ height: '100px', width: '100px', marginTop: '100px' }}
      ></div>
    </div>
  );
}
