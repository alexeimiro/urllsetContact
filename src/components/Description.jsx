import React from 'react';

const Description = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Section 1 */}
          <div className={`flex-1 p-6 rounded-md  bg-gray-900 m-1 `}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">🌍</div>
              <h2 className="text-xl font-bold">A New Era in Property Investment</h2>
            </div>
            <p>
              Urllset is not just a platform; it's a revolution in collective investment in both commercial and residential real estate. Our unique approach centers around acquiring high-potential properties and integrating them into a closed-end investment fund.
            </p>
          </div>

          {/* Section 2 */}
          <div className={`flex-1 p-6 rounded-md  bg-gray-900 m-1 `}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">💼</div>
              <h3 className="text-lg font-bold">Invest and Own a Piece of the Future</h3>
            </div>
            <p>
              As an investor with Urllset, you become a shareholder in a robust investment fund. This entitles you to a share of passive rental income, boasting an impressive 24% ROI. Your investment directly correlates with your share of profits.
            </p>
          </div>

          {/* Add more sections as needed */}
          
          {/* Section 3 */}
          <div className={`flex-1 p-6 rounded-md  bg-gray-900 m-1`}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">🔑</div>
              <h3 className="text-lg font-bold">Hassle-Free Property Management</h3>
            </div>
            <p>
              Dive into the real estate market without the complexities of property management. Urllset takes the reins, handling all aspects of property management and responsibility. You invest, we manage - it's that simple.
            </p>
          </div>

          {/* Section 4 */}
          <div className={`flex-1 p-6 rounded-md  bg-blue-500 m-1`}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">🚀</div>
              <h2 className="text-xl font-bold">Our Mission: Accessible, Attractive Real Estate Investment for All</h2>
            </div>
            <p>
              Urllset is dedicated to transforming the real estate market. Our goal is to provide a platform for passive, long-term income that's accessible to everyone. No matter your experience level, Urllset makes real estate investment attractive and straightforward.
            </p>
          </div>

          {/* Section 5 */}
          <div className={`flex-1 p-6 rounded-md  bg-white text-black m-1`}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">🌟</div>
              <h3 className="text-lg font-bold">Secure Your Financial Independence with Urllset</h3>
            </div>
            <p>
              Investing with Urllset stands as a premier opportunity to secure financial independence. With carefully selected real estate properties, your investment is comfortable, safe, and geared for long-term growth.
            </p>
          </div>

          {/* Section 6 */}
          <div className={`flex-1 p-6 rounded-md  bg-gray-900 m-1`}>
            <div className="flex items-center mb-2">
              <div className="text-2xl">📊</div>
              <h3 className="text-lg font-bold">Join the Urllset Community Today</h3>
            </div>
            <p>
              Ready to be part of a unique crowdfunding platform where every investment counts? Whether you're investing $100 or more, start your journey with Urllset.
            </p>
          </div>

          {/* Section 7 */}
          <div className={`flex-1 p-6 rounded-md bg-gray-900 m-1`}>
            <div className="flex items-center mb-2">
              <div className="text-2xl"></div>
              <h3 className="text-lg font-bold">
                Discover More and Start Investing Now
              </h3>
            </div>
            <p>
              Elevate your investment portfolio with Urllset. Click to explore and embark on your path to smarter, more rewarding real estate investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
