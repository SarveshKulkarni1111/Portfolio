// import React, { useState } from 'react';
// import { useRef } from 'react';
// import './contact.css';
// import emailjs from '@emailjs/browser';

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_kzmiumr', 'template_tisgfjj', form.current, 'VcdkDjERBtJAjBlLD')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//   };


//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate first name
//     if (formData.firstName.trim() === '') {
//       newErrors.firstName = 'First name is required';
//       valid = false;
//     }

//     // Validate last name
//     if (formData.lastName.trim() === '') {
//       newErrors.lastName = 'Last name is required';
//       valid = false;
//     }

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//       valid = false;
//     }

//     // Validate phone
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number (10 digits)';
//       valid = false;
//     }

//     // Validate message
//     if (formData.message.trim() === '') {
//       newErrors.message = 'Message is required';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Perform submit action (e.g., send data to server)
//       console.log('Form submitted:', formData);
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     // Clear the corresponding error when the user starts typing
//     setErrors({
//       ...errors,
//       [e.target.name]: '',
//     });
//   };

//   return (
//     <div>
//     <h5>Get in touch</h5>
//     <h1>Contact me</h1>
//     <form className="contact-form" ref={form} onSubmit={sendEmail}>
//     <div className='row'>
//       <div className="form-group col">
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           className = "border-color"
//           // className={`form-control ${errors.firstName ? 'error-border' : ''}`}
//         />
//         <span className="error-message">{errors.firstName}</span>
//       </div>

//       <div className="form-group col">
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           className = "border-color"
//           // className={`form-control ${errors.lastName ? 'error-border' : ''}`}
//         />
//         <span className="error-message">{errors.lastName}</span>
//       </div>
//       </div>

//       <div className='row'>
//       <div className="form-group col">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className = "border-color"
//           // className={` border-color form-control ${errors.email ? 'error-border' : ''}`}
//         />
//         <span className="error-message">{errors.email}</span>
//       </div>

//       <div className="form-group col">
//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="text"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className = "border-color"
//           // className={`form-control ${errors.phone ? 'error-border' : ''}`}
//         />
//         <span className="error-message">{errors.phone}</span>
//       </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className = "border-color"
//           placeholder="Type your message..."
//           // className={`form-control ${errors.message ? 'error-border' : ''}`}
//         />
//         <span className="error-message">{errors.message}</span>
//       </div>

//       <button type="submit" className="submit-button" value="Send">
//         Submit
//       </button>
//     </form>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState, useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_kzmiumr', 'template_tisgfjj', form.current, 'VcdkDjERBtJAjBlLD')
        .then((result) => {
          console.log(result.text);
          // setSuccessMessage('Message Sent!');
          toast.success('Message Sent!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate first name
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    // Validate last name
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits)';
      valid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(e);
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the corresponding error when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  return (
    <div>
      <h5>Get in touch</h5>
      <h1>Contact me</h1>
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <div className='row'>
          <div className="form-group col">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-color"
            />
            <span className="error-message">{errors.firstName}</span>
          </div>

          <div className="form-group col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-color"
            />
            <span className="error-message">{errors.lastName}</span>
          </div>
        </div>

        <div className='row'>
          <div className="form-group col">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-color"
            />
            <span className="error-message">{errors.email}</span>
          </div>

          <div className="form-group col">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-color"
            />
            <span className="error-message">{errors.phone}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-color"
            placeholder="Type your message..."
          />
          <span className="error-message">{errors.message}</span>
        </div>

        <button type="submit" className="submit-button" value="Send">
          Submit
        </button>
      </form>

      {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
