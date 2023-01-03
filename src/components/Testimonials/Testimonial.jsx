import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";
import profilePic4 from "../../img/profile4.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Being a Software Developer Harsh Dhoke is one of the best programmer I have ever seen with great problem solving skills and debgging ability. He always write's efficient solution to a problem with accuracy always greater than 70%.",
    },
    {
      img: profilePic2,
      review:
        "Harsh Dhoke has great knowledge of Computer Science fundamentals and also different Computer Science domains. Cyber Security is one of the domain he has expertise in and good command in cyptographic algorithms. He also has working knowledege of different Cybersecurity tools and technologies.",
    },
    {
      img: profilePic3,
      review:
        "When you ask me for a good team player and supportive group leader the only name comes in my mind is Harsh Dhoke. He is a great group leader with good working knowledge of different domains which is a must ability being the one, which not only helps him to manage the project's well but also helps others to solve their queries.",
    },
    {
      img: profilePic4,
      review:
        "I had the pleasure of working with Harsh Dhoke on a recent project and was blown away by his expertise in HTML, CSS, JavaScript, and React. He was a valuable asset to the project and the person who was consistently communicating and collaborating with the team to ensure the best results. I highly recommend him for any web development needs.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>People's always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;