import React from "react";
import ReactDOM from 'react-dom';
import '../css/index.css';
import { useState } from "react";




const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>wanwan@contact.com</p>
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
            <p>jhbgkjhgkgv</p>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  function MyFormTwo() {
    const [name, setName] = useState("");
  
    return (
      <form>
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
