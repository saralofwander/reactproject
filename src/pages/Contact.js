import React from "react";
import ReactDOM from 'react-dom';
import '../css/index.css';
import { useState } from "react";
import {useForm} from "react-hook-form";

/*
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
*/



const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>svamp@contact.com</p>
      <br></br><br></br>
      <MyFormTwo />
      <br></br>
      <MyForm />
      
    </div>
    )
  };
  
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
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
            <p>Enquiry:</p>
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
    const [email, setEmail] = useState("");

    


    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      trigger,
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      reset();
    };

    


  
    return (
      <>
      <form>
        <br></br>
        <label><p>Name:</p>
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <form>
      <br></br>
      <label><p>Email:</p>
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </label>
    </form>

    <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email behövs" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>

    </>
    
    )
  }


  export default Contact;
