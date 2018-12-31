import React from 'react';

export default function CodeBlock({ children }) {
  return (
    <span style={{ fontFamily: 'Menlo,monospace', color: '#f0f' }}>
      {children}
    </span>
  );
}
