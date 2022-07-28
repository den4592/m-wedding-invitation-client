import { useRef, useEffect } from "react";
import Map from "./Map";
import kakao_map_icon from "../img/kakao_map.png";
import naver_map_icon from "../img/naver_map.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Location = () => {
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
    <section className="section5 section">
      <div className="container">
        <div className="location" ref={showingText}>
          <h3 className="location-title">오시는 길</h3>
          <p className="location-main">아모르아트 웨딩컨벤션 3층 아트홀</p>
          <p className="location-detail">
            충북 청주시 흥덕구 남석로 579(석곡동305-2)
            <br />
            석곡사거리에서 세종시 방면 50m(왼쪽방면)
          </p>
          <p className="location-tel">아모르아트 T. 043-233-1000</p>
          <a href="http://amourart.co.kr" target="_blank">
            <p className="location-url">www.amourart.co.kr</p>
          </a>

          <div className="map-container">
            <Map />
          </div>

          <ul className="icons">
            <li className="icon">
              <div className="icon-inner">
                <a
                  href="https://map.naver.com/v5/entry/place/37991316?c=14183972.6771235,4384383.6938324,15,0,0,0,dh"
                  target="_blank"
                >
                  <img src={naver_map_icon} style={{ width: "2.5rem" }} />
                </a>
                <strong>
                  <span>네이버지도</span>
                </strong>
              </div>
            </li>
            <li className="icon">
              <div className="icon-inner">
                <a
                  href="https://map.kakao.com/?q=%EC%95%84%EB%AA%A8%EB%A5%B4%EC%95%84%ED%8A%B8%EC%BB%A8%EB%B2%A4%EC%85%98"
                  target="_blank"
                >
                  <img src={kakao_map_icon} style={{ width: "2.5rem" }} />
                </a>
                <strong>
                  <span>카카오맵</span>
                </strong>
              </div>
            </li>
          </ul>

          <div className="d-bus-guide">
            <p className="d-bus-guide-title">
              <strong>대절 버스 탑승 안내</strong>
            </p>
            <p className="d-bus-guide-detail">
              사당역 1번 출구 ➡️ 아모르아트 컨벤션 <br />
              13:00출발
              <br />
              <br />
              아모르아트 컨벤션 ➡️ 사당역 1번 출구
              <br />
              17:30 출발
            </p>
          </div>

          <ul className="guides">
            <div className="bus-container">
              <strong>
                <p className="guides-title">버스</p>
              </strong>
              <div className="bus">
                <ul>
                  <li className="guides-detail-text">
                    가경동 청주고속버스터미널 혹은 청주시외버스터미널 하차 이후
                    택시 및 버스 대중교통 이용
                    <br />
                  </li>
                  <li className="guides-detail-text">
                    남부지방엡서 이용 시 남청주버스터미널 하차 이후 택시 및
                    버스대중교통 이용
                    <br />
                  </li>
                  <li className="guides-detail-text">
                    청주고속버스터미널 혹은 청주시외버스터미널 하차 이후 택시
                    7~10분 소요
                  </li>
                </ul>
              </div>
            </div>
            <div className="bus-public-transport-container">
              <strong>
                <p className="guides-title">청주 내 버스대중교통</p>
              </strong>
              <ul>
                <li className="guides-detail-text">
                  충북공고 및 석곡동 방면 512(사곡방면),
                  512-1~3(사곡방면),416(송절중방면),
                  416-1(송절중방면),418(팔봉리 방면), 419(구암방면) 내리실 때는
                  호암마을 정류장에서 하차
                </li>
              </ul>
            </div>
            <div className="ktx-container">
              <strong>
                <p className="guides-title">KTX</p>
              </strong>
              <ul>
                <li className="guides-detail-text">
                  오송역 하차 후 버스대중교통 (511번 이용 후 강서1동정류장에서
                  812나 419번 이용) 및 택시 이용
                </li>
                <li className="guides-detail-text">
                  KTX 오송역 하차 시 택시 15분 소요
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Location;
