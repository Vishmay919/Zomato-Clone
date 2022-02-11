import React, { useState } from 'react';
import Header from '../../Components/common/header/Header';
import TabOptions from '../../Components/common/tabOptions/TabOptions';
import Footer from '../../Components/common/footer/Footer';
import Delivery from '../../Components/Delivery/Delivery';
import DiningOut from '../../Components/DiningOut/DiningOut';
import NightLife from '../../Components/NightLife/NightLife';


const HomePage = () => {
  const[activeTab, setActiveTab] = useState("Delivery")

  return <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab = {setActiveTab}/>
      {getCurrentScreen(activeTab)}
      <Footer />

  </div>;
};

const getCurrentScreen = (tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery />
    case "DiningOut":
      return <DiningOut />
    case "NightLife":
      return <NightLife />
    default:
      return <Delivery />
  }
}

export default HomePage;
