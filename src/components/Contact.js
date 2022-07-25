import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalBackground = useRef();
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
  }, []);

  function openModal() {
    setIsOpen(true);
    modalBackground.current.style.display = "block";
  }
  function closeModal() {
    setIsOpen(false);
    modalBackground.current.style.display = "none";
  }

  return (
    <section className="section3 section">
      <div className="contact" ref={showingText1}>
        <p className="husband-parents">
          이우식 · 신명례 차남 <strong>이병주</strong>
        </p>
        <p className="wife-parents">
          신동준 · 장경미 장녀 <strong>신일선</strong>
        </p>
        <button className="contact-btn" onClick={openModal}>
          신랑 · 신부 · 혼주 연락처
        </button>
      </div>
      <div
        className="modal-background"
        ref={modalBackground}
        onClick={closeModal}
      ></div>
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-header">
            <strong>
              <span>연락처</span>
            </strong>
            <FontAwesomeIcon
              icon={faXmark}
              className="modal-close-btn"
              onClick={closeModal}
            />
          </div>
          <div className="h-parents modal-body">
            <p className="sans-serif">신랑측 혼주</p>
            <div className="modal-body-inner">
              <div className="h-tel ">
                <p>이병주</p>
                <p>010-8861-9149</p>
              </div>
              <div className="f-tel ">
                <p>이우식</p>
                <p>010-8861-9594</p>
              </div>
              <div className="m-tel ">
                <p>신명례</p>
                <p>010-4535-0053</p>
              </div>
            </div>
          </div>
          <div className="b-parents modal-body">
            <p className="sans-serif">신부측 혼주</p>
            <div className="modal-body-inner">
              <div className="b-tel ">
                <p>신일선</p>
                <p>010-9385-6550</p>
              </div>
              <div className="f-tel ">
                <p>신동준</p>
                <p>010-9288-6550</p>
              </div>
              <div className="m-tel ">
                <p>장경미</p>
                <p>010-9288-6550</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
<section className="section3 section"></section>;
