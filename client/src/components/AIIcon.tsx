import React from 'react';

export const AIIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.2000/svg"
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Background Orbits */}
      <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
      <path d="M 20 100 A 80 40 0 1 1 180 100 A 80 40 0 1 1 20 100" strokeWidth="1" opacity="0.5" transform="rotate(-15 100 100)" />
      
      {/* Globe */}
      <circle cx="100" cy="100" r="55" strokeWidth="3" />
      
      {/* Abstract Continents */}
      <path d="M 65 65 Q 80 50 100 60 Q 110 70 95 80 Q 75 75 65 65 Z" />
      <path d="M 120 70 Q 140 60 145 80 Q 135 110 115 100 Q 110 85 120 70 Z" />
      <path d="M 75 110 Q 90 100 100 120 Q 90 145 70 130 Z" />
      <path d="M 115 125 Q 130 115 140 135 Q 125 145 115 125 Z" />

      {/* Orbit Path for Plane */}
      <path d="M 30 130 Q 100 170 170 60" strokeWidth="3" />
      
      {/* Plane */}
      <path d="M 160 55 L 180 35 L 185 40 L 165 60 Z M 175 40 L 195 40 L 190 45 L 170 45 Z M 165 50 L 150 65 L 155 70 L 170 55 Z" fill="currentColor" stroke="none" />
      
      {/* Location Pins */}
      {/* Pin 1 */}
      <path d="M 75 65 C 75 55, 85 55, 85 65 C 85 75, 80 80, 80 85 C 80 80, 75 75, 75 65 Z" fill="currentColor" stroke="none" />
      <circle cx="80" cy="65" r="2" fill="white" stroke="none" />
      
      {/* Pin 2 */}
      <path d="M 125 75 C 125 65, 135 65, 135 75 C 135 85, 130 90, 130 95 C 130 90, 125 85, 125 75 Z" fill="currentColor" stroke="none" />
      <circle cx="130" cy="75" r="2" fill="white" stroke="none" />

      {/* Pin 3 */}
      <path d="M 85 115 C 85 105, 95 105, 95 115 C 95 125, 90 130, 90 135 C 90 130, 85 125, 85 115 Z" fill="currentColor" stroke="none" />
      <circle cx="90" cy="115" r="2" fill="white" stroke="none" />

      {/* Stars */}
      <path d="M 35 45 L 40 30 L 45 45 L 60 50 L 45 55 L 40 70 L 35 55 L 20 50 Z" strokeWidth="1" />
      <path d="M 35 145 L 40 130 L 45 145 L 60 150 L 45 155 L 40 170 L 35 155 L 20 150 Z" strokeWidth="1" />
      
      {/* Suitcase */}
      <rect x="140" y="150" width="30" height="20" rx="3" strokeWidth="2" />
      <path d="M 148 150 V 145 h 14 v 5" strokeWidth="2" />
      <path d="M 145 170 v 3 M 165 170 v 3" strokeWidth="2" />
    </svg>
  );
};
