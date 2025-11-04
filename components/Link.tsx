import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children, onClick, ...rest }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent full page reload
    event.preventDefault();
    // Update the URL hash, which our App router listens for
    window.location.hash = to;
    // Call the original onClick handler if it was passed
    if (onClick) {
        onClick(event);
    }
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default Link;