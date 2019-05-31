import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import '../../index.scss';
import './seller-profile.scss';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

const SellerProfile = () => {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2" xs="12" ></MDBCol>
        <MDBCol md="8" xs="12" className="top">
          <MDBRow>
            <MDBContainer>
              <h4 className="text-left" style={{fontWeight:450}}>My Profile</h4>
            </MDBContainer>
            <MDBRow>
             <MDBCol md="5">
             <MDBRow>
               <MDBCol>
                <img width="200px" height="200px" className="mx-auto d-block" style={{margin:"10px 0px 10px 10px"}}
                 src="http://sync-storage.com/wp-content/uploads/2016/02/Icon-Doctor.png" alt="upload img" />
                <div className="input-group">
                  <div className="custom-file">
                  <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Upload 
                  </label>
                  </div>
                </div>
               </MDBCol>
              </MDBRow>
             </MDBCol>
             <MDBCol md="7">
             <FormControl className="container-fluid">
              <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "demo-controlled-open-select"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1">Half</MenuItem>
                <MenuItem value="2">Full</MenuItem>
                <MenuItem value="3">Quater</MenuItem>
              </Select>
            </FormControl>
              <MDBInput
                label="Name*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
              />
              <MDBInput
                label="Mobile Number*"
                group
                type="number"
                validate
                error="wrong"
                success="right"
                className="wid"
              />
              <MDBInput
                label="OTP*"
                group
                type="number"
                validate
                error="wrong"
                success="right"
                className="wid"
                disabled
                style={{width:"100px"}}
              />
              <MDBInput
                label="Email-Id*"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                className="wid"
              />
              <MDBInput
                label="Status*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
              />
              <MDBInput
                label="Address*"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="wid"
              />
              </MDBCol>
             </MDBRow>
          </MDBRow>
        </MDBCol>
        <MDBCol md="2" xs="12" ></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SellerProfile;