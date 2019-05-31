import React from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import CreateBid from './P-components/create-bid';
import SellerProfile from './components/seller-profile/seller-profile';
import Last from './components/last/last1';
import First from './components/first/first';
import Address from './components/address/address';
import TabContainer from './components/TabsPage';
import TextInput from './components/input';
import FormControl from './components/FormControl'

function App() {
  return (
    <div className="App">
      {/* <FormControl></FormControl> */}
      <TextInput></TextInput>
      {/* <TabContainer></TabContainer>
      <Register></Register>
      <Login></Login>
      <CreateBid></CreateBid>
      <SellerProfile></SellerProfile>
      <First></First>
      <Address></Address>
      <Last></Last> */}
    </div>
  );
}

export default App;
