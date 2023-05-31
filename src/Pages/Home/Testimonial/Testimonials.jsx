import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  //  console.log(reviews)
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What our client say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        {
            reviews.map(review=><SwiperSlide key={review._id}>
                <div className="my-16 mx-24 flex flex-col items-center gap-4">
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                    <p className="text-center py-8">{review.details}</p>
                    <h3 className="text-3xl text-orange-600"> {review.name} </h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
