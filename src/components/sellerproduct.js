import React from "react";
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import details from "./abc";

const SellerProduct = () => {
  return (
    <MDBCol>
      <div
        className="card"
        style={{ display: "inline-block", height: "175px", overflow: "auto" }}
      >
        {details.products.map(data => (
          <div
            key={data.id}
            style={{ display: "inline-block", margin: "10px" }}
          >
            <p>{data.product}</p>
            <p style={{ color: "orange" }}>
              <b>
                <MDBIcon icon="rupee-sign" /> {data.price}
              </b>
            </p>
            <p>{data.offers} & Get a cleaner free</p>
            <div style={{ textAlign: "center" }}>
              <MDBBtn color="white" style={{ borderRadius: "5px" }}>
                Try
              </MDBBtn>
            </div>
          </div>
        ))}
      </div>
    </MDBCol>
  );
};

export default SellerProduct;
