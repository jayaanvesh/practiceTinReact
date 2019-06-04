import React from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import CreateBid from "./P-components/create-bid";
import SellerProfile from "./components/seller-profile/seller-profile";
import Last from "./components/last/last1";
import First from "./components/first/first";
import Address from "./components/address/address";
import TabContainer from "./components/TabsPage";
import TextInput from "./components/input";
import FormControl from "./components/FormControl";
import { Collapse } from "./components/collapse";
import { Collapse2 } from "./components/collapse2";

function App() {
  return (
    <div className="App">
      {/* <FormControl /> */}
      {/* <TextInput /> */}
      {/* <Collapse /> */}
      <Collapse2 />
      {/* <TabContainer />
      <Register />
      <Login />
      <CreateBid />
      <SellerProfile />
      <First />
      <Address />
      <Last /> */}
    </div>
  );
}

export default App;
