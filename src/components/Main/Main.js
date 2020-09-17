import React from 'react';
import './main.css';
import Contact from './Contact';

const contactsMOCK = [{
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
  state = {
    contacts: [...contactsMOCK],
    search: "",
  }
  search = (e) => {
    const {value} = e.target;
    this.setState({ 
      search: value
     });

    this.setState({
      contacts:[
        ...contactsMOCK.filter((el) => {
          return(
            el.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
            el.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) >-1 ||
            el.phone.indexOf(this.state.search) >-1
          );
        }),
      ],
    });
  };
    
  render () {
  return (   
    <div className="main">
      <input className="input" type="text" 
       placeholder="Search"
        value={this.state.search}
        onChange={this.search}
       />

      {this.state.contacts.map(element => (     
        <Contact 
        firstName={element.firstName}
        lastName={element.lastName}
        phoneNumber={element.phone}
   />

      ))
    }
    </div>
  );
    
}
}
export default Main


