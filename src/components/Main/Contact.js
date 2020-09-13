import React from 'react';
import './contact.css';

function Contact ({firstName, lastName, phoneNumber}) {
  return (
    <div className="contactView">
      <p>{firstName} {lastName} {phoneNumber}</p>
    </div>
  );
}

export default Contact;
