// src/components/ReferralSteps.jsx
import React from 'react';

const Baseurl = import.meta.env.VITE_BASE_URL;
const ReferralSteps = ({ onReferClick }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How Do I Refer?</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex justify-center flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-lg mb-4">
              <img src='/refer1.png' alt="Step 1" />
            </div>
            <p>Submit referrals easily via website's referral section.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-lg mb-4">
              <img src="/refer2.png" alt="Step 2" />
            </div>
            <p>Earn rewards once your referral joins an Accredian program.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-lg mb-4">
              <img src="/refer3.png" alt="Step 3" />
            </div>
            <p>Both parties receive a bonus 30 days after program enrollment.</p>
          </div>
        </div>
        <button onClick={onReferClick} className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default ReferralSteps;
