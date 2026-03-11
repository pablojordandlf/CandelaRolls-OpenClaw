import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  // Add any other common section props like id, backgroundColor, etc.
  id?: string;
  backgroundColor?: string;
  sectionPadding?: boolean; // If true, apply default padding
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
  backgroundColor = 'bg-white', // Default background color
  sectionPadding = true, // Default to apply padding
}) => {
  const paddingClass = sectionPadding ? 'py-16 px-4' : '';

  const combinedClasses = `
    relative
    ${backgroundColor}
    ${paddingClass}
    ${className}
  `;

  return (
    <section id={id} className={combinedClasses}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
