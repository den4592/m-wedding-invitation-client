import { useState, useRef, useEffect } from "react";
import schedule from "node-schedule";
import calendar from "../img/calendar.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dday = () => {
  const [dday, setDday] = useState();
  const showingText1 = useRef(null);

  useEffect(() => {
    const el1 = showingText1.current;
    gsap.fromTo(
      el1,
      { opacity: 0, y: 200 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el1,
        },
      }
    );
  });

  const calculateDday = () => {
    const masTime = new Date("2022-10-29");
    const todayTime = new Date();
    const diff = masTime - todayTime;
    const day = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    console.log(day);
    setDday(day);
  };

  useState(() => {
    calculateDday();
  }, []);

  //매일 00:00:00에 디데이 계산
  schedule.scheduleJob("59 59 23 * * 0-7", () => {
    calculateDday();
  });

  return (
    <section className="section3 section">
      <div className="container">
        <div className="dday" ref={showingText1}>
          <img src={calendar} className="calendar" />
          <strong>
            <p className="dday-text">
              이병주 💘 신일선 님의 결혼식 {dday}일 전
            </p>
          </strong>
        </div>
      </div>
    </section>
  );
};

export default Dday;
