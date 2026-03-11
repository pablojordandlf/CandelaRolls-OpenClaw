import React, { ButtonHTMLAttributes } from 'react';

// Extend default button attributes for flexibility
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'font-semibold rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary: 'text-white focus:ring-blue-500', // Default to blue for primary
    secondary: 'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400', // Lighter for secondary
  };

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  // Combine and apply styles
  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className} // Allow custom classes to override or extend
  `;

  // Apply specific colors for primary variants only, e.g. gradients as in Hero section
  if (variant === 'primary') {
    // Example using a gradient similar to HeroButton's "Order Now"
    // You might want to pass exact colors as props for more control
    return (
        <button
        className={`${combinedStyles} bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700`}
        {...props}
        >
        {children}
        </button>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
