'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

function ReviewSlider ()
{
  const reviews = testimonialReviews;
  const sliderRef = React.useRef();
  const settings = {
    className: "center",
    dots:true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    pauseOnFocus: false, 
    pauseOnHover: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
      }
  }, 
  {
      breakpoint: 860,
      settings: {
          slidesToShow: 2,
          slidesToScroll:2
      }
  }, 
  {
      breakpoint: 580,
      settings: {
          slidesToShow:1,
          slidesToScroll:1
      }
  }, 
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }]
  };
  return (
    <>
      <div className="md:p-10 pt-0">
          <div className="flex flex-col gap-3 pb-10">
            <p className="text-3xl font-DM San text-center font-semibold">Clients Feedback</p>
            <p className="text-base text-center">How our customers like how we work.</p>
          </div>
          <div className="p-3">
            <Slider ref={sliderRef} {...settings}>
              {
                reviews.map((element, index) => (
                  <ReviewsCards key={index} review={element} />
                  ))
              }
            </Slider>
          </div>
        </div>
    </>
  );
}
const ReviewsCards = ({ review }) => {
  const {name, description} = review;
  return (
    <div className="flex flex-col gap-2 p-4 m-2 text-left justify-center rounded-2xl font-DM Sans border border-neutral-400">
      <div className="p-3 text-base text-black">{description}</div>
      <div className="flex flex-row gap-2 ps-4 justify-start border-t border-neutral-400 pt-4">
        <span className="my-auto">
        <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-neutral-500"></FontAwesomeIcon>
        </span>
        <span className="text-lg font-semibold capitalize my-auto">{name}</span>
      </div>
    </div>
  );
};

const testimonialReviews=[
  {
    name:"Amit Kumar",
    description: "Onetick Technologies creates aesthetically pleasing websites. They are committed to making communication smooth and efficient. However, I find the technical aspects of the back-end more complex than I have experienced so far."
  },
  {
    name:"Ajay Singh",
    description: "It was good experience working with Onetick Technologies for my projects. The team was highly professional, responsive and skilled in what they do. They delivered my projects on time and with in the budget."
  },
  {
    name:"Vijay Malhotra",
    description: "It has been a pleasure working with Onetick Technologies team. They are extremely efficient and delivers projects on time."
  },
  {
    name:"Rahul Garg",
    description: "I am here to share my experience with Onetick Technologies on a project regarding my website. It was earlier showing some bugs and 404 errors. But thanks to the developers and team for getting my work done. Very grateful. It was a happy experience."
  },
  {
    name:"Harshit Sharma",
    description: "I would like to extend my thanks to Netmaxims technologies for re-defining my site and being so interactive throughout. I received highly active responses."
  },
]

export default ReviewSlider;