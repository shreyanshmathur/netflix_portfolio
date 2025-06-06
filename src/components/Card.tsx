import React from 'react';

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, description, icon, onClick, href, children, style }) => {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      className="reusable-card"
      onClick={onClick}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      style={style}
    >
      {image && <img src={image} alt={title} className="card-image" />}
      {icon && <div className="card-icon">{icon}</div>}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </Wrapper>
  );
};

export default Card;
