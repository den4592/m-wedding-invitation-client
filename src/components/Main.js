import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const showingText1 = useRef();
  const showingText2 = useRef();
  const showingText3 = useRef();

  useEffect(() => {
    const showingTexts = [
      showingText1.current,
      showingText2.current,
      showingText3.current,
    ];

    gsap.fromTo(
      showingTexts,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: showingTexts,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section2 section">
      <div className="container">
        <div className="main">
          <h2 className="main-title">
            이병주 <span className="and-sign">💗</span> 신일선
          </h2>

          <div className="main-text">
            <div className="main-text-container">
              <span>2022.10.29(토)</span>
              <br />
              <span className="main-location-text">
                아모르아트 웨딩컨벤션 3층 아트홀, 15시 30분
              </span>
            </div>
            <div className="poem-container">
              <div ref={showingText1} className="main-text-container">
                <span>창으로 비쳐오는 햇살,</span>
                <br />
                <span>발밑의 풀 하나,</span>
                <br />
                <span>산책하는 강아지.</span>
                <br />
              </div>

              <div ref={showingText2} className="main-text-container">
                <span>매 순간을</span>
                <br />
                <span>가벼이 지나치지 않고</span>
                <br />
                <span>소중히 여기는</span>
                <br />
                <span>사랑스러운 사람을 만나</span>
                <br />
                <span>앞으로의 순간을</span>
                <br />
                <span>찬란하게 가꾸려 합니다.</span>
                <br />
              </div>

              <div ref={showingText3} className="main-text-container">
                <span>결혼식에 참석해 주셔서</span>
                <br />
                <span>많은 축하 부탁드립니다.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
