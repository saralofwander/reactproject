import React from "react";
import ReactDOM from 'react-dom';
import '../css/index.css';
import { useState } from "react";




const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>svamp@contact.com</p>
      <br></br><br></br>
      <MyForm />
      <MyFormTwo />
    </div>
    )
  };
  
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Formuläret uppdateras snarast'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Fyll i din fråga här:</p>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <br></br>
        </form>
      );
    }
  }

  function MyFormTwo() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <br></br>
        <label><p>Enter your name:</p>
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }


  export default Contact;
