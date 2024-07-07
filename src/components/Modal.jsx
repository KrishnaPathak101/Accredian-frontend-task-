import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Modal = ({ onClose }) => {
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [course, setCourse] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!refereeName || !refereeEmail || !referrerName || !referrerEmail || !course) {
      alert('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(refereeEmail)) {
      alert('Invalid referee email');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(referrerEmail)) {
      alert('Invalid referrer email');
      return;
    }

    if (course !== 'product-management' && course !== 'data-science') {
      alert('Invalid course');
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const formData = { refereeName, refereeEmail, referrerName, referrerEmail, course };

      const response = await axios.post(`${apiUrl}/referrals`, formData, {
        withCredentials: true,
      });

      console.log(response.data);
      alert('Form submitted successfully');
      onClose();
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Form submission failed');
    } finally {
      setIsLoading(false); // Set loading state to false

      // Reset form fields if needed
      setRefereeName('');
      setRefereeEmail('');
      setReferrerName('');
      setReferrerEmail('');
      setCourse('');
    }
  };

  return (
    <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="loader border-4 border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4">Referral Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer's Name</label>
            <input
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={referrerName}
              onChange={e => setReferrerName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer's Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={referrerEmail}
              onChange={e => setReferrerEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee's Name</label>
            <input
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={refereeName}
              onChange={e => setRefereeName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee's Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={refereeEmail}
              onChange={e => setRefereeEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Course</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={course}
              onChange={e => setCourse(e.target.value)}
              disabled={isLoading}
            >
              <option value="">Select a course</option>
              <option value="product-management">Product Management</option>
              <option value="data-science">Data Science</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
