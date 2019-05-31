import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import details from "./abc";

const SellerProduct = () => {
  // return details.products.map((data) => {
    return (
              <div  className="card" style={{display:"inline-block", margin:"5px"}}>
                {
                  details.products.map((data)=>{
                    return (
                    <div>
                      <p>{data.product}</p>
                      <p style={{color:"orange"}}><b><MDBIcon icon="rupee-sign" />  {data.price}</b></p>
                      <p>{data.offers} & Get a cleaner free</p>
                      <div style={{textAlign:"center"}}>
                        <button color="white" style={{borderRadius:"5px"}}>Select</button>
                      </div>
                    </div>
                    ) 
                  })
                }
              </div>
    )
  // })
}

export default SellerProduct;