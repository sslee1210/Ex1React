// Footer.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Footer.css";
import { Navigation } from "swiper/modules";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer 내용 */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="./images/Swiper_img1.jpg" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Swiper_img2.jpg" alt="Image 2" />
        </SwiperSlide>
      </Swiper>
      <p>Types of clients we want to work</p>
      <p className="made">
        © MadeByProxymaDesign 2023. Web Design Italy Company. P.Iva 02130380385.
        All Rights Reserved. Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
