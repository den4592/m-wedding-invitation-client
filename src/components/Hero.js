import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  setTimeout(() => {
    let intro = document.querySelector(".intro");
    intro.classList.add("hidden");
  }, 6000);

  setTimeout(() => {
    let intro = document.querySelector(".intro");
    let hero = document.querySelector(".hero");
    if (intro) {
      hero.removeChild(intro);
    }
  }, 8000);

  return (
    <section className="section1 section">
      <div className="hero">
        <div id="particle-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="intro">
          <div className="intro-text-container">
            <p className="intro-text intro-name">이병주,신일선</p>
            <p className="intro-text intro-additional">
              함께하는 8번째 가을,
              <br /> 저희 결혼합니다.
            </p>
          </div>
        </div>
        <div className="hero-img-container"></div>
      </div>
    </section>
  );
};

export default Hero;
