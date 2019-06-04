import React, { Component } from "react";
import { MDBCol, MDBBtn, MDBContainer, MDBRow } from "mdbreact";
import SellerProduct from "./sellerproduct";

class SellerList extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/sellerlist")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          data: result
        });
      });
  }

  render() {
    var { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div>Please wait while Loding...</div>;
    } else {
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="2" xs="12" />
            <MDBCol md="8" xs="12">
              <MDBRow style={{ marginTop: "30px" }}>
                <h3 style={{ fontWeight: 450 }}>Seller List</h3>
                <div style={{ marginLeft: "auto" }}>
                  <p
                    style={{
                      fontWeight: 450,
                      display: "inline-block",
                      marginTop: "10px"
                    }}
                  >
                    Filter by
                  </p>{" "}
                  &ensp;
                  <select
                    className="browser-default custom-select"
                    style={{ width: "max-content", height: "34px" }}
                  >
                    <option value="1">All</option>
                    <option value="2">Area</option>
                    <option value="3">City</option>
                    <option value="3">District</option>
                    <option value="3">State</option>
                  </select>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <p
                    style={{
                      fontWeight: 450,
                      display: "inline-block",
                      marginTop: "10px"
                    }}
                  >
                    Sort By
                  </p>{" "}
                  &ensp;
                  <select
                    className="browser-default custom-select"
                    style={{ width: "max-content", height: "34px" }}
                  >
                    <option value="1">Price: High to Low</option>
                    <option value="2">Price: Low to High</option>
                  </select>
                </div>
                {data.map(details => (
                  <div
                    key={details._id}
                    className="card"
                    style={{ marginBottom: "15px" }}
                  >
                    <MDBRow style={{ padding: "20px" }}>
                      <MDBCol>
                        <small style={{ color: "grey" }}>Name</small>
                        <p>{details.name}</p>
                      </MDBCol>
                      <MDBCol>
                        <small style={{ color: "grey" }}>Offers</small>
                        <p>3 Offers</p>
                      </MDBCol>
                      <MDBCol>
                        <small style={{ color: "grey" }}>Address</small>
                        <p>
                          {details.area}, {details.city},
                        </p>
                        <p>
                          {details.district},{details.state}
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <SellerProduct />
                    <div style={{ textAlign: "center" }}>
                      <MDBBtn
                        color="orange"
                        className="morpheus-den-gradient"
                        style={{ borderRadius: "5px" }}
                      >
                        Choose
                      </MDBBtn>
                    </div>
                  </div>
                ))}
              </MDBRow>
            </MDBCol>
            <MDBCol md="2" xs="12" />
          </MDBRow>
        </MDBContainer>
      );
    }
  }
}

export default SellerList;
