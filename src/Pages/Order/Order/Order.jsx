import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../SharedPage/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCardd from "../../../components/foodCard/FoodCardd";
import FoodCard from "../../../components/foodCard/foodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    const initialIndex=categories.indexOf(category)
   // console.log(category)

    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=useMenu();

    const desserts=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const drinks=menu.filter(item=>item.category === 'drinks')
    const offered=menu.filter(item=>item.category === 'offered')

    return (
        <div>
             <Helmet>
                <title>Order | Bistro Boss</title>
            </Helmet>

            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className="tabs bg-green-400 flex justify-center font-extrabold mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                     <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                  <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            
                </Tabs>
            </div>
        
        </div>
    );
};

export default Order;
