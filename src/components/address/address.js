import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import '../../index.scss';
import './address.scss';

const Address = () => {

  return (
    <MDBContainer>
      <h3>Address</h3>
      <MDBRow>
            <MDBCol md="4"  xs="6">
                <MDBInput
                  label="Lane*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
                <MDBInput
                  label="Area*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
                </MDBCol>
                <MDBCol md="4"  xs="6">
                <MDBInput
                  label="Landmark*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
                <MDBInput
                  label="City*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
              </MDBCol>
              <MDBCol md="4"  xs="6">
                <MDBInput
                  label="State*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
                <MDBInput
                  label="ZipCode*"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="wid"
                />
              </MDBCol>
            </MDBRow>
    </MDBContainer>
  );
};

export default Address;