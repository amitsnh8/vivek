import React, {Component} from 'react';
import './Signup.css';
import { Redirect } from "react-router-dom";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usertype: ""
        };
    this.onRadioChange = this.onRadioChange.bind(this);
    }
    onRadioChange = (e) => {
        this.setState({
            usertype: e.target.value
        });
      }
    
    render() {
        console.log(this.state.usertype,"Test")
        if (this.state.usertype==="Individual Practice/Clinic") {
            return <Redirect to="/doctor" />;

            console.log("yes");
          }
          else if (this.state.usertype==="Hospital") {
              return <Redirect to="/pharmacy" />;
            }
      return (
          
          <div>
<div className="logobox">
<div className="logo">
<img src="img/logo.png" />
</div>
</div>
<div className="conbox">
<div className="calenderbox">
<img src="img/cal-icon.png" />
</div>
<div className="funcbox">
    <div className="form-title">
    <h2>Create Account</h2>
</div>
<div className="formbox">
<form>
    <div className="forminputbox">
<div className="forminput">
    <div className="input">
        <input 
        type="radio" 
        name="reg" 
        value="Individual Practice/Clinic" 
        checked={this.state.usertype === "Individual Practice/Clinic"}
        onChange={this.onRadioChange}
        />
        </div>  
    <div className="label">Individual Practice/Clinic</div>
</div>
<div className="forminput">
    <div className="input">
        <input 
        type="radio" 
        name="reg" 
        value="Hospital" 
        checked={this.state.usertype === "Hospital"}
        onChange={this.onRadioChange}
        />
        </div>  
    <div className="label">Hospital</div>
</div>
<div className="forminput">
    <div className="input">
        <input 
        type="radio" 
        name="reg" 
        value="Diagnostic Center" 
        checked={this.state.usertype === "Diagnostic Center"}
        onChange={this.onRadioChange}
        />
        </div>  
    <div className="label">Diagnostic Center</div>
</div>
<div className="forminput">
    <div className="input">
        <input 
        type="radio" 
        name="reg" 
        value="Pharmacy or Medicine Vendor" 
        checked={this.state.usertype === "Pharmacy or Medicine Vendor"}
        onChange={this.onRadioChange}
        />
        </div>  
    <div className="label">Pharmacy or Medicine Vendor</div>
</div>
</div>
<div className="formsubmitbox">
<button type="submit" className="btn">Next Step</button>
</div>
</form>
</div>
</div>
</div>
</div>
      );
    }
  }
  
export default Signup;
  