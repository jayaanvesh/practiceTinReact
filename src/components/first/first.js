import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput,MDBBtn } from 'mdbreact';
import '../../index.scss';

const First = () => {

  return (
    <MDBContainer>
          <h4 className="text-left" style={{fontWeight:450}}>Seller Profile</h4>
      <MDBRow>
            <MDBCol md="4" xs="6">
            <img width="200px" height="200px" className="mx-auto d-block" style={{margin:"10px 0px 10px 10px"}}
                  src="http://sync-storage.com/wp-content/uploads/2016/02/Icon-Doctor.png" alt="upload img"/>
            <MDBBtn>Upload</MDBBtn>
            </MDBCol>
            <MDBCol md="4"  xs="6">
            <MDBInput
                label="GST Number*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                />
            <MDBInput
                label="Establishment Number*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                />
                <MDBInput
                label="Next Subscribed Date*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                readOnly
                />
            </MDBCol>

            <MDBCol md="4" xs="6">
                <MDBInput
                label="Referral code*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                readOnly
                />
                <MDBInput
                label="Status*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                readOnly
                />
                <MDBInput
                label="Subscribed Date*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
                readOnly
                />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
};

export default First;