import React from 'react';
import './main.css';
import Contact from './Contact';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

class Main extends React.Component{

  render () {
  return (   
    <div className="main">
      {contacts.forEach(element => {
        
        <Contact 
        firstName={element.firstName}
        lastName={element.firstName}
        phoneNumber={element.firstName}
   />

      })
    }
    </div>
  );
    
}
}
export default Main


