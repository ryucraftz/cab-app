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
      className={`bg-surface-dark border border-white/5 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl ${noPadding ? '' : 'p-8'} ${className}`}
    >
      {children}
    </div>
  );
};

export default StitchCard;
