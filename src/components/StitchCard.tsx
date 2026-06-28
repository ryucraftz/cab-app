import React from 'react';

interface StitchCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly noPadding?: boolean;
}

export const StitchCard: React.FC<StitchCardProps> = ({
  children,
  className = '',
  noPadding = false,
}) => {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md ${noPadding ? '' : 'p-8'} ${className}`}
    >
      {children}
    </div>
  );
};

export default StitchCard;
