import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m8l7f2f', 'template_1p7tc0o', form.current, '7ZmwnZCAYddVyKOjE')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="shadow-lg p-5 rounded-lg bg-black w-full">
      <div>
        {!isSubmitted && (
          <h2 className="text-center text-2xl lg:text-3xl py-4">
            Interested? Join Our Waiting List for Exclusive Access
          </h2>
        )}

        {!isSubmitted && (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 ">
            <div className="flex flex-row gap-3">
              <label htmlFor="user_name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                placeholder="Name*"
                name="user_name"
                required
                className="pl-2 py-2 w-full"
              />
              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name*"
                name="last_name"
                required
                className="pl-2 py-2 w-full"
              />
            </div>
            <div className="flex flex-row gap-3">
              <label htmlFor="phone_number" className="sr-only">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder={isFocused ? '+ Phone Number*' : 'Phone Number*'}
                name="phone_number"
                value={isFocused ? `+${phoneNumber}` : phoneNumber}
                onChange={handlePhoneNumberChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className="pl-2 py-2 w-full"
              />
              <label htmlFor="user_email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                placeholder="Email*"
                name="user_email"
                required
                className="pl-2 py-2 w-full"
              />
            </div>
            <div className="text-2xs text-left mt-2">
              * Indicates a required field
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white py-1 px-2 rounded-full w-24 mx-auto
               md:py-2 md:px-4 md:text-base md:w-32 lg:py-3 lg:px-6 lg:text-lg lg:w-40
               hover:bg-white hover:text-black
               focus:outline-none focus:shadow-outline-blue
               active:bg-gradient-to-r active:from-pink-700 active:to-violet-700"
            >
              Send
            </button>
          </form>
        )}

        {isSubmitted && (
          <div className="text-center text-green-500 py-4">
            Thank you for your message! We'll be in touch.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contactform;
