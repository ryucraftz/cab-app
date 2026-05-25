import React from 'react';

interface StitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: 'primary' | 'secondary' | 'outline';
  readonly children: React.ReactNode;
}

export const StitchButton: React.FC<StitchButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden focus:ring-2 focus:outline-none focus:ring-primary/50";
  
  const variants = {
    primary: "px-8 py-4 bg-primary text-background-dark shadow-[0_0_15px_rgba(25,230,111,0.2)] hover:shadow-[0_0_25px_rgba(25,230,111,0.4)] hover:bg-primary/95 hover:scale-[1.02]",
    secondary: "px-6 py-3 bg-surface-dark text-white border border-white/10 hover:border-primary/50 hover:bg-white/5",
    outline: "px-6 py-3 bg-transparent text-primary border border-primary hover:bg-primary/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default StitchButton;
