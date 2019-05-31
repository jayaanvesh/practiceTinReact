import React, { Component} from "react";
import { MDBBtn } from "mdbreact";
import './register.css';
export class Login extends Component {
    render() {
    return (
      <div id="signup_sec">
      <br />
        <h2><b> Login Here </b></h2><br/>
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
          <input type="text" className="form-control" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon" id="mobile_num"/>
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
        <p style={{textAlign:"right"}}> <a href="!#">forgot Password?</a> </p>
        </div>
        <br /><br />
        <MDBBtn color="deep-orange" style={{borderRadius:"30px"}}>Login</MDBBtn>
        <br/>
        <p id="login_link">Don't have an Account ? <a href="!#">SignUp Here</a> </p>
      </div>
    );
  }
}

export default Login;