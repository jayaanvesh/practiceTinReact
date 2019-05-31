import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '../index.scss';
import './login-page.scss';

const CreateBid = () => {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="2" xs="12" ></MDBCol>


        <MDBCol md="8" xs="12"  className="top">

          <form>
            <p className="h5  mb-4" style={{color:'black'}}>Create a New Bid</p>
            <div className="grey-text">
              <MDBRow>
                <MDBCol md="6" >
                <MDBInput
                  label="Category"
                  group
                  type="dropdown"
                  validate
                  error="wrong"
                  success="right"
                  outline
                  className="wid"
                style={{height:'50px'}}
                />
                
                </MDBCol>
                <MDBCol md="6">
                <MDBInput
                  label="Enter your password"
                  group
                  type="password"
                  validate
                  outline
                style={{height:'50px'}}
                />
                </MDBCol>
               </MDBRow>
                <p className="text-right" style={{color:'black',marginTop:'-20px',fontSize:'12px'}}>Forgot password?</p>
            </div>
            <div className="text-center">
              <MDBBtn color="orange" style={{borderRadius:'5px'}}>Submit</MDBBtn>
            </div>
            <div className="text-center mt-4">
             <p  className="text-center"> Don't Have an Account? <span style={{color:'#f49e42'}}> Sign Up</span></p>
            </div>
          </form>
        </MDBCol>
      <MDBCol md="2" xs="12" ></MDBCol>

      </MDBRow>

    </MDBContainer>
  );
};

export default CreateBid;