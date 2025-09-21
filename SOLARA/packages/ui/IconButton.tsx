import React from 'react';

interface ButtonProps {
  onClick: () => void;
  Icon?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  hoverClass?: string;
}

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  Icon,
  children,
  className = '',
  hoverClass = 'hover:text-gray-400',
}) => {
  const baseClasses = `
    flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-200
    cursor-pointer
  `;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className} ${hoverClass}`}
    >
      {Icon && (
        <div className={children ? 'mr-2' : ''}>
          <Icon className="h-6 w-6" />
        </div>
      )}
      {children}
    </button>
  );
};

export default IconButton;