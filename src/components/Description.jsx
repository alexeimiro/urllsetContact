import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import userPanelImage from '../images/Frame 50.png'

const Description = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animations for all sections
    document.querySelectorAll('.animate-me').forEach((section, index) => {
      const animation = gsap.fromTo(
        section,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power3.inOut' }
      );

      // Create a ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%', // Adjust the trigger point as needed
        end: 'bottom 20%',
        animation,
        toggleActions: 'play none none none',
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center font-sans mt-40">
      <div className="max-w-4xl p-2 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* Section 1 with animated count-up */}
          <div className={`flex-1 p-10 rounded-md bg-blue-500 m-2 animate-me sm:col-span-2 flex flex-col items-center justify-center`}>
            <CountUp end={23} duration={3} decimals={2} className="text-5xl font-bold pb-8 text-white" suffix="% ROI" />
            <h3 className="text-lg font-bold text-white text-center pb-3">Invest and Own a Piece of the Future</h3>
            <p className="text-center text-white">
              As an investor with Urllset, you become a shareholder in a robust investment fund.
              This entitles you to a share of passive rental income, boasting an impressive 23% ROI.
              Your investment directly correlates with your share of profits.
            </p>
          </div>

          {/* Section 2 */}
          <div className={`flex-1 p-6 rounded-md bg-gray-900 m-2 animate-me text-white`}>
            <h2 className="text-xl font-bold text-center pb-5">A New Era in Property Investment</h2>
            <p className="text-center">
              Urllset is not just a platform; it's a revolution in collective investment in both
              commercial and residential real estate. Our unique approach centers around acquiring
              high-potential properties and integrating them into a closed-end investment fund.
            </p>
          </div>

          {/* Section 3 */}
          <div className={`flex-1 p-6 rounded-md bg-gray-900 m-2 animate-me text-white`}>
            <h3 className="text-lg font-bold text-center pb-5">Hassle-Free Property Management</h3>
            <p className="text-center">
              Dive into the real estate market without the complexities of property management.
              Urllset takes the reins, handling all aspects of property management and
              responsibility. You invest, we manage - it's that simple.
            </p>
          </div>

          
          {/* Section 4 with userPanelImage */}
          <div className={'sm:col-span-2 m-2 animate-me'}>
            <img src={userPanelImage} />
          </div>

          {/* Section 5 */}
          <div className={`flex-1 p-6 rounded-md bg-white text-black m-2 animate-me`}>
            <h3 className="text-lg font-bold text-center pb-5">Secure Your Financial Independence with Urllset</h3>
            <p className="text-center">
              Investing with Urllset stands as a premier opportunity to secure financial
              independence. With carefully selected real estate properties, your investment is
              comfortable, safe, and geared for long-term growth.
            </p>
          </div>

          {/* Section 6 */}
          <div className={`flex-1 p-6 rounded-md bg-gray-900 m-2 animate-me text-white`}>
            <h3 className={`text-lg font-bold text-center pb-5`}>Join the Urllset Community Today</h3>
            <p className="text-center">
              Ready to be part of a unique crowdfunding platform where every investment counts?
              Whether you're investing $100 or more, start your journey with Urllset.
            </p>
            <p className="text-center text-white">
              Elevate your investment portfolio with Urllset. Click to explore and embark on your
              path to smarter, more rewarding real estate investment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Description;
