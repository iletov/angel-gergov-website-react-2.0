import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactPage from '../images/contactPage.jpg';
import '../styles/Contact.css'

function Contact() {

	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bijntpn', 'template_q3co8ll', form.current, '6wqbQUXbTcvbMOiY1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

	return (
		<>
			
			<div className="contact">
					<div 
						className='leftSide'
						style={{ backgroundImage: `url(${contactPage})` }}
						></div>
					<div className='rightSide'>
						<h1> Contact Me</h1>

	        			<form ref={form} onSubmit={sendEmail} id="contact-form" method="POST">
			          	<label htmlFor="name" >Full Name</label>
			          	<input name="name" placeholder="Enter full name..." type="text" required='required' />
			          	
			          	<label htmlFor="user_email">Email</label>
			          	<input name="user_email" placeholder="Enter email..." type="email" required='required' />
			          	
			          	<label htmlFor="text-message">Message</label>
			          	<textarea
			           	 	rows="6"
			           		placeholder="Enter message..."
			            	name="text-message"
			            	required='required'
			          	/>
			          	<button type="submit" className='animated-button contact-button'> Send Message</button>
			        	</form>
					</div>
				</div>
			</>
	)
}

export default Contact