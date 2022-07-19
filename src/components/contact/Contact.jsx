import "./contact.scss";
import emailjs from 'emailjs-com';
import React, {useRef, useState} from 'react'

export default function Contact() {
  
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xuh9wal', 'template_n67ia0h', form.current, 'HWK7N9w2tMT3Rq-8q')
      .then((result) => {
          console.log(result.text);
          setDone(true);
         form.reset();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="contact" id="contact">
       <div className="left">
        <img src="assests/shake.svg" alt="" />
       </div>
       <div className="right">
          <h2>Contact</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder=' Email' required/>
            <input type="text" name='subject' placeholder=' Subject' required/>
            <textarea name='message' rows="10" placeholder='Your Message' required></textarea>
            <button type='submit'>Send</button>
            <span>{done && "Thanks for Contacting me"}</span>
          </form>
       </div>
    </div>
  );
}