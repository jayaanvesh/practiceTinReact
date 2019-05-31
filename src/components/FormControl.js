import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import details from "./abc";

const SellerList = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2" xs="12" ></MDBCol>
        <MDBCol md="8" xs="12">
          <MDBRow>
            <h3 style={{fontWeight:450}}>Seller List</h3>
            <div style={{marginLeft:"auto"}}>
                <p style={{fontWeight:450,display:"inline-block", marginTop:"10px"}}>Filter by</p> &ensp;
                <select className="browser-default custom-select" style={{width:"max-content", height:"34px"}}>
                    <option value="1">All</option>
                    <option value="2">Area</option>
                    <option value="3">City</option>
                    <option value="3">District</option>
                    <option value="3">State</option>
                </select>
            </div>
            <div style={{marginLeft:"auto"}}>
                <p style={{fontWeight:450,display:"inline-block", marginTop:"10px"}}>Sort By</p> &ensp;
                <select className="browser-default custom-select" style={{width:"max-content", height:"34px"}}>
                    <option value="1">Price: High to Low</option>
                    <option value="2">Price: Low to High</option>
                </select>
            </div>
            {
              details.RandP.map((data)=>{
                return (
            <div>
              <div className="card" style={{marginBottom:"10px"}}>
                  <div className="margin"> 
                    <MDBRow>
                      <MDBCol lg="5">
                          <small className="gray">Name</small>
                          <p>{data.name}</p>
                      </MDBCol>
                      <MDBCol lg="4">
                          <small className="gray">Mobile</small>
                          <p>{data.mobile}</p>
                      </MDBCol>
                      <MDBCol lg="3">
                          <small className="gray">Status</small>
                          <p>{data.status}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow style={{marginBottom:"15px"}}>
                      <MDBCol lg="5">
                          <small className="gray">Address</small>
                          <p>Mothi Nagar, Dwarakapuri, Punjagutta</p>
                          <p style={{marginTop:"-10px"}}>Hyderabad, Telangana 500018</p>
                      </MDBCol>
                      <MDBCol lg="4">
                          <small className="gray">Quoted Price</small>
                          <p>{data.price}</p>
                      </MDBCol>
                      <MDBCol lg="3">
                          <small className="gray">Offers</small>
                          <p>{data.offers}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow >
                      <div className="mx-auto d-block">
                          <p/>
                          <small className="gray" style={{display:"inline-block"}}>
                            *Seller has alternative products for you. &nbsp;&nbsp;&nbsp;
                            <p style={{display:"inline-block", color:"#1e88e5",fontSize:"110%"}}>Show Alternatives</p>
                          </small>
                      </div>
                    </MDBRow>
                  </div>
                </div>
                   
                <div className="card" style={{display:"inline-block", height:"175px", overflow:"auto"}}>
                    {
                      details.products.map((data)=>{
                        return (
                          <div style={{display:"inline-block", margin:"10px 10px"}}>
                            <p>{data.product}</p>
                            <p style={{color:"orange"}}><b><MDBIcon icon="rupee-sign" />  {data.price}</b></p>
                            <p>{data.offers} & Get a cleaner free</p>
                            <div style={{textAlign:"center"}}>
                              <MDBBtn color="white" style={{borderRadius:"5px"}}>Select</MDBBtn>
                            </div>
                          </div>
                          )
                        })
                      }
                    </div>
                <div className="text-center" style={{marginTop:"5px", marginBottom:"30px"}}>
                  <MDBBtn color="orange" style={{borderRadius:"5px"}}>Accept Bid</MDBBtn>
                </div>
            </div>
                )
              })
            }
            </MDBRow>
            </MDBCol>
            <MDBCol md="2" xs="12" ></MDBCol>
          </MDBRow>
        </MDBContainer>
  )
};

export default SellerList;