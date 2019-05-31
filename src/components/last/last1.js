import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFormInline } from 'mdbreact';
import '../../index.scss';

const NewBid = () => {

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2" xs="12" ></MDBCol>
        <MDBCol md="8" xs="12">
            
              {/* <div style={{marginLeft:"auto", marginRight:"auto"}}> */}
                <MDBFormInline className="md-form mr-auto mb-4" >
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <MDBBtn color="orange" size="sm" type="submit" className="mr-auto">
                  Search
                  </MDBBtn>
                </MDBFormInline>
              {/* </div> */}
           
        </MDBCol>
        <MDBCol md="2" xs="12" ></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NewBid;