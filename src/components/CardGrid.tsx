import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardGrid: React.FC<CardGridProps> = ({ children, className = '', style }) => (
  <div className={`reusable-card-grid ${className}`} style={style}>
    {children}
  </div>
);

export default CardGrid;
