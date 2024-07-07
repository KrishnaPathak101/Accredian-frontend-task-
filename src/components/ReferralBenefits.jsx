import React from 'react';

const ReferralBenefits = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Your Referral Benefits</h2>
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Programs</th>
                    <th className="py-3 px-6 text-left">Referrer Bonus</th>
                    <th className="py-3 px-6 text-left">Referee Bonus</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-4 px-6">Professional Certificate Program in Product Management</td>
                    <td className="py-4 px-6">₹ 7,000</td>
                    <td className="py-4 px-6">₹ 9,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-4 px-6">PG Certificate Program in Strategic Product Management</td>
                    <td className="py-4 px-6">₹ 9,000</td>
                    <td className="py-4 px-6">₹ 11,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;
