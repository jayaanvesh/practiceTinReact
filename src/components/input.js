import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';

class SellerList extends React.Component {
  constructor(){
    super();
    this.state={
      isLoaded:false,
      error:null,
      data:[]
    }
  }
  componentDidMount(){
    // fetch("http://localhost:8000/sellerlist")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      // var abc = res.json()
      // return result => {
        this.setState({
          isLoaded: true,
          data: res.json()
        });
    },
    (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
  )
}

render(){
  var { error, isLoaded, data } = this.state;
  if(error){
    return <div>Error: {error.message} </div>
  }
  else if(!isLoaded){
    return <div>Please wait while Loding...</div>
  }
  else {
    return (
     <div>
      <ul>
        {
          data.SellerList.map(jaya => {
            return <li key={jaya.id}>name:{jaya.name}</li>  
          })

        }
      </ul>
     </div>
    )
  }
  // return (
  //   <MDBContainer>
  //     <MDBRow>
  //       <MDBCol md="2" xs="12" ></MDBCol>
  //       <MDBCol md="8" xs="12">
  //         <MDBRow>
  //           <h3 style={{fontWeight:450}}>Seller List</h3>
  //           <div style={{marginLeft:"auto"}}>
  //               <p style={{fontWeight:450,display:"inline-block", marginTop:"10px"}}>Filter by</p> &ensp;
  //               <select className="browser-default custom-select" style={{width:"max-content", height:"34px"}}>
  //                   <option value="1">All</option>
  //                   <option value="2">Area</option>
  //                   <option value="3">City</option>
  //                   <option value="3">District</option>
  //                   <option value="3">State</option>
  //               </select>
  //           </div>
  //           <div style={{marginLeft:"auto"}}>
  //               <p style={{fontWeight:450,display:"inline-block", marginTop:"10px"}}>Sort By</p> &ensp;
  //               <select className="browser-default custom-select" style={{width:"max-content", height:"34px"}}>
  //                   <option value="1">Price: High to Low</option>
  //                   <option value="2">Price: Low to High</option>
  //               </select>
  //           </div>
  //           <div>
  //             {
  //             data.map(details =>
  //               <div className="card" style={{marginBottom:"10px"}}>
  //                 <div className="margin"> 
  //                   <MDBRow>
  //                     <MDBCol lg="5">
  //                         <small className="gray">Name</small>
  //                         <p>{details.name}</p>
  //                     </MDBCol>
  //                     <MDBCol lg="7">
  //                         <small className="gray">Address</small>
  //                         <p>{details.area},{details.city},</p>
  //                         <p>{details.district},{details.state}</p>
  //                     </MDBCol>
  //                   </MDBRow>
  //                   <MDBRow >
  //                     <div className="mx-auto d-block">
  //                         <p/>
  //                         <small className="gray" style={{display:"inline-block"}}>
  //                           *Seller has alternative products for you. &nbsp;&nbsp;&nbsp;
  //                           <p style={{display:"inline-block", color:"#1e88e5",fontSize:"110%"}}>Show Alternatives</p>
  //                         </small>
  //                     </div>
  //                   </MDBRow>
  //                 </div>
  //               </div>
  //             )
  //             }
  //               <div className="text-center" style={{marginTop:"5px", marginBottom:"30px"}}>
  //                 <MDBBtn color="orange" style={{borderRadius:"5px"}}>Accept Bid</MDBBtn>
  //               </div>
  //           </div>
  //           </MDBRow>
  //           </MDBCol>
  //           <MDBCol md="2" xs="12" ></MDBCol>
  //         </MDBRow>
  //       </MDBContainer>
  // )
}
// }
};

export default SellerList;