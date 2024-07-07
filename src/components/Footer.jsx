// src/components/Footer.jsx
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h4 className="font-bold mb-2">Programs</h4>
          <ul>
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p>Email: admissions@accredian.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
          <FaFacebook />
          <FaSquareXTwitter />
          <LuInstagram />
          {/* Add more social links as needed */}
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p>&copy; 2024 Accredian. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
