import React from 'react';

// Assuming SearchIcon is defined and imported from its location
import SearchIcon from './icons/SearchIcon'; 

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  Icon?: React.ElementType; 
}

const InputWithIcon: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  Icon = SearchIcon, 
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 pl-12 text-white text-lg ${className}`}
      />
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default InputWithIcon;