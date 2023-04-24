

import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Mail = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzgx00g', 'template_9ccv3r7', form.current , 'ki1b4GA_AQr6J3VKt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  
    return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
     <div className="bg-white rounded-md p-10">        
      <h1 className="text-2xl font-bold mb-5">Contact us</h1>      
         <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <label htmlFor="user_name" className="mb-2 font-medium">Name</label>
          <input type="text" name="user_name" id="user_name" className="py-2 px-3 border rounded-md mb-4" />

          <label htmlFor="user_email" className="mb-2 font-medium">Email</label>
          <input type="email" name="user_email" id="user_email" className="py-2 px-3 border rounded-md mb-4" />

          <label htmlFor="message" className="mb-2 font-medium">Message</label>
          <textarea name="message" id="message" className="py-2 px-3 border rounded-md mb-4"></textarea>

          <button type="submit" className="py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300 ease-in-out">Send</button>
        </form>
      </div>
    </div>
  ); 
    }
export default Mail;



// import { useState } from 'react';
// import { useRef } from "react";
// import emailjs from '@emailjs/browser';

// const Mail = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gzgx00g', 'template_9ccv3r7', form.current, 'ki1b4GA_AQr6J3VKt')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });

//     e.target.reset()
//   };

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sendEmail(event);
//     setIsSubmitted(true);
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-yellow-100">
//       <div className="bg-white rounded-md p-10">
//         <h1 className="text-2xl font-bold mb-5">Contact us</h1>
//         <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
//           <label htmlFor="user_name" className="mb-2 font-medium">Name</label>
//           <input type="text" name="user_name" id="user_name" className="py-2 px-3 border rounded-md mb-4" />

//           <label htmlFor="user_email" className="mb-2 font-medium">Email</label>
//           <input type="email" name="user_email" id="user_email" className="py-2 px-3 border rounded-md mb-4" />

//           <label htmlFor="message" className="mb-2 font-medium">Message</label>
//           <textarea name="message" id="message" className="py-2 px-3 border rounded-md mb-4"></textarea>

//           <button type="submit" className="py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300 ease-in-out" onClick={handleSubmit}>
//             Send
//           </button>
//           {isSubmitted && (
//             <div className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md">
//               Message sent successfully!
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Mail;





