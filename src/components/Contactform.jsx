

// export default function Contactform() {
//     return(
//         <div className="shadow-lg p-5 rounded-lg ">
//             <h1 className="text-3xl ">Contact form</h1>
//         </div>
//     )
// }

// src/components/ContactForm.jsx


import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contactform = () => {
    const form  = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m8l7f2f', 'template_1p7tc0o', form.current, '7ZmwnZCAYddVyKOjE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <section className="shadow-lg p-5 rounded-lg sm:w-1/2">
        <div>
            <h2 className='text-center '>Get in touch</h2>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 '>
                <input type="text"
                placeholder='Name'
                name='user_name' required />
                <input type="email"
                placeholder='Email'
                name='user_email' required />
                <textarea name="message" placeholder='Your message' cols="30" rows="10"></textarea>
                <button type='submit' className='rounded-lg border-2 bg-gradient-to-r from-green-500 to-green-950 hover:bg-green-800 shadow-md'>Send message</button>
            </form>
        </div>
    </section>
  )
}

export default Contactform