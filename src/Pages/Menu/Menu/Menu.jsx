import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedPage/Cover/Cover';
import menuImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const desserts=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'offered')

  
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <h1>Menu</h1>
            <Cover 
            img={menuImg}
            title={'Our Menu'}
            body={'Would you like to Try a Dish'}
            ></Cover>
            {/* Main Cover */}
            <SectionTitle
            subHeading={`Don't miss`}
            heading={`TODAY'S OFFER`}
            >
            </SectionTitle>

            {/* Offered Menu Items */}
            <MenuCategory items={offered} ></MenuCategory>

            {/* Desert Menu Items */}
            <MenuCategory
            items={desserts}
            title={"dessert"}
            coverImage={dessertImg}
            ></MenuCategory>

            {/* Pizza */}
           <MenuCategory
           items={pizza}
           coverImage={pizzaImg}
           title={'pizza'}

           ></MenuCategory>

           {/* Salad */}
           <MenuCategory
            coverImage={saladImg}
            title={'salad'}
            items={salad}
           >
           </MenuCategory>

           {/* Soup */}
           <MenuCategory
            coverImage={soupImg}
            title={'soup'}
            items={soup}
           >
           </MenuCategory>
            
        </div>
    );
};

export default Menu;