// src/components/FAQ.jsx
import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="text-left mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-2">Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
          <p className="mb-6">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
