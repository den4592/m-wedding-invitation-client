import { useEffect, useState, useRef } from "react";
import GuestData from "./GuestData";
import axios from "axios";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GuestBook = () => {
  const [guestText, setGuestText] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const showingText = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || text === "") {
      setName("");
      setText("");
      alert("성함과 내용을 모두 작성해 주세요.");
      return;
    }
    axios
      .post("https://m-wedding-invitation.herokuapp.com/guesttext", {
        name: name,
        text: text,
      })
      .then((response) => {
        setGuestText([
          ...guestText,
          {
            id: response.data.id,
            name: name,
            text: text,
          },
        ]);
      });
    setName("");
    setText("");
  };

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
  }, []);

  //data fetch
  useEffect(() => {
    axios
      .get("https://m-wedding-invitation.herokuapp.com/read")
      .then((response) => {
        setGuestText(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <section className="section6 section">
      <div className="container">
        <div className="guest-book" ref={showingText}>
          <h2>방명록 </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="성함을 입력해 주세요."
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="전하고 싶은 말."
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="submit-btn">추가하기</button>
          </form>
          <GuestData guestData={guestText} />
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
