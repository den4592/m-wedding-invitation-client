import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";
import img10 from "../img/10.jpeg";
import img11 from "../img/11.jpeg";
import img12 from "../img/12.jpeg";
import img13 from "../img/13.jpg";
import img14 from "../img/14.jpeg";
import img15 from "../img/15.jpeg";
import img16 from "../img/16.jpeg";
import img17 from "../img/17.jpeg";
import img18 from "../img/18.jpeg";
import img19 from "../img/19.jpeg";
import img20 from "../img/20.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Album = () => {
  const showingText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      showingText.current,
      { opacity: 0, y: 200 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: showingText.current,
        },
      }
    );
  });

  return (
    <section className="section4 section">
      <div className="container">
        <div className="album" ref={showingText}>
          <h2 className="album-title">앨범</h2>
          <Swiper
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img12} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img13} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img14} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img15} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img16} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img17} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img18} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img19} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img20} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Album;
