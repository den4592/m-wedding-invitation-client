import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BankAccount = () => {
  const [bankNumber, setBankNumber] = useState("");
  const innerContent = useRef();
  const showingText1 = useRef(null);

  const showContent = () => {
    innerContent.current.classList.toggle("show-content");
    let dropBtn = document.querySelector(".drop-btn");
    dropBtn.classList.toggle("checked");
  };

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

  return (
    <section className="section">
      <div className="container">
        <div className="bank-account" ref={showingText1}>
          <h2>신랑 신부에게 마음 전하기</h2>
          <div className="dropdown">
            <div className="drop-btn" onClick={showContent}>
              <span>계좌번호</span>
            </div>
            <ul className="inner-content" ref={innerContent}>
              <li className="account-container">
                <strong>
                  <p className="family-accounts sans-serif">신랑측 계좌번호</p>
                </strong>
                <div className="account-text-container">
                  <p>
                    신랑 이병주 : 카카오뱅크
                    <span className="text1"> 3333-07-6606971</span>
                  </p>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector(".text1").innerHTML
                      )
                    }
                  >
                    복사
                  </button>
                </div>
              </li>
              <li className="account-container">
                <strong>
                  <p className="family-accounts sans-serif">신부측 계좌번호</p>
                </strong>
                <div className="account-text-container">
                  <p>
                    신부 신일선 : 카카오뱅크
                    <span className="text2"> 3333-11-9040908</span>
                  </p>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector(".text2").innerHTML
                      )
                    }
                  >
                    복사
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <p className="congrats-flowers">
            '예식장의 규정으로 축하화환은 정중히 사양합니다'
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankAccount;
