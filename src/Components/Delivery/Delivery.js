import React from 'react';
import {restaurants} from '../../Data/restaurants'
import Filters from '../common/Filters/Filters';
import './Delivery.css'
import DeliveryCollection from './DeliveryCollection/DeliveryCollection';
import Explore from '../common/Explore/Explore';
import TopBrands from './TopBrands/TopBrands';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (<div>
      <div className='max-width'>
        <Filters filterList = {deliveryFilters}/>
      </div>
      <DeliveryCollection />
      <TopBrands />
      <Explore list={restaurantList} collectionName="Delivery Restaurants in Banglore" />
  </div>
  );
};

export default Delivery;
