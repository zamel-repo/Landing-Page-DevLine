"use client";

import React from 'react';

interface CurvedLinesProps {
  className?: string;
}

const CurvedLines = ({ className = '' }: CurvedLinesProps) => {
  const paths = [];
  const totalLines = 50;
  
  for (let i = 0; i < totalLines; i++) {
    const offsetX = i * 4;

const opacity = 0.6 - (i / totalLines) * 0.4;

const startColor = [125, 55, 157];
const endColor = [62, 31, 65];

const r = startColor[0] + (endColor[0] - startColor[0]) * (i / totalLines);
const g = startColor[1] + (endColor[1] - startColor[1]) * (i / totalLines);
const b = startColor[2] + (endColor[2] - startColor[2]) * (i / totalLines);

const color = `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
    
    paths.push(
      <path 
        key={i}
        d={`M 0,-20 C ${0 + offsetX} 100 ${0 + offsetX},200 ${700 + offsetX * 0.2},600`}
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        opacity={opacity}
      />
    );
  }

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 300 300" 
        className="w-full h-full" 
        preserveAspectRatio="xMinYMin slice"
      >
        {paths}
      </svg>
    </div>
  );
};

export default CurvedLines;