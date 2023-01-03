import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolio_Old from "../../img/portfolio.png";
import SignLanguage from "../../img/signLanguage.png";
import YogaClub from "../../img/YogaClubWebsite.png";
import Portfolio_New from "../../img/portfolioNew.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Work</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://harshdhoke-portfolio.netlify.app/">
          <img src={Portfolio_Old} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/harshdhoke/Real-Time-Sign-Language-Identification-using-KNN-A-Machine-Learning-Approach">
          <img src={SignLanguage} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://harsh-dhoke-portfolio.vercel.app/">
          <img src={Portfolio_New} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://elegant-dasik-82822d.netlify.app/">
          <img src={YogaClub} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;