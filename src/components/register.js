import React, { Component} from "react";
import { MDBBtn } from "mdbreact";
import './register.css';
export class Register extends Component {
    render() {
    return (
      <div>
      <div id="signup_sec">
      <br />
        <h2><b> SignUp Here </b></h2><br/>
        <div>
          <i class="fab fa-google" id="google"></i>
          <i class="fab fa-facebook-f" id="facebook"></i>
          <i class="fab fa-linkedin-in" id="linkedIn"></i>
        </div>
        <br/> <p> <b>OR</b> </p>
        <div style={{display:"inline-block" ,textAlign:"center"}}>
        <div className="input-group" style={{width:"310px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-mobile prefix"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon" id="mobile_num" />
        </div>
        <br />
        <div className="input-group" style={{width:"310px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-user prefix"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" id="username" />
        </div>
        <br />
        <div className="input-group" style={{width:"300px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-key prefix"></i>
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" id="password"/>
          <i class="fas fa-eye-slash" id="eye"></i> 
        </div>
        <br />
        <div className="input-group" style={{width:"300px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-key prefix"></i>
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon" id="password" />
          <i class="fas fa-eye-slash" id="eye"></i>
        </div>
        </div>
        <br /><br />
        <input type="checkbox" style={{height:"40px"}}/>
        <p style={{textAlign:"left", display:"inline-block", fontSize:"80%"}}> &nbsp;&nbsp; By signing Up, I agree to Tinda's 
          <a href="!#"> Terms and Conditions,</a> and <br></br>
          <a href="!#"> &nbsp;&nbsp; Community Guidelines. Privacy Policy</a>
        </p>
        <br/>
        <MDBBtn color="deep-orange" style={{borderRadius:"30px"}}>Sign Up</MDBBtn>
        <br/>
        <p id="login_link">Already has an Account ? <a href="!#">Login Here</a> </p>
      </div>
      </div>
    );
  }
}

export default Register;