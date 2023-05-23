import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuItemCard from '../../SharedPage/MenuItemCard/MenuItemCard';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category ==='popular')
            setMenu(popularItems)
        })
    },[])
   // console.log(menu)

    return (
        <section className='mb-12'>
           <SectionTitle
           heading={"From Our Menu"}
           subHeading={"Popular items"}
           >
             
           </SectionTitle>
           <div className='grid md:grid-cols-2 gap-10'>
              {
                menu.map(item=> <MenuItemCard
                key={item._id}
                item={item}
                ></MenuItemCard> )
              }
           </div>
        </section>
    );
};

export default PopularMenu;