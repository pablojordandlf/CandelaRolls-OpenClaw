import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Placeholder for Logo */}
            <Image
              src="/path/to/your/logo-footer.png" // Replace with your actual logo path
              alt="CandelaRolls Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-sm">
            CandelaRolls - Baking happiness, one roll at a time.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="#hero" className="hover:text-yellow-400 transition-colors duration-200">Home</a></li>
            <li className="mb-2"><a href="#products" className="hover:text-yellow-400 transition-colors duration-200">Our Rolls</a></li>
            <li className="mb-2"><a href="#story" className="hover:text-yellow-400 transition-colors duration-200">Our Story</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors duration-200">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="mb-2">123 Cinnamon Lane</p>
          <p className="mb-2">Sweetville, CA 90210</p>
          <p className="mb-2">Email: info@candelarolls.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} CandelaRolls. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
