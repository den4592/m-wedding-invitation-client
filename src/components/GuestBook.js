import { useEffect, useState } from "react";
import GuestData from "./GuestData";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const GuestBook = () => {
  const [guestText, setGuestText] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
  }, [guestText]);

  return (
    <section className="section6 section">
      <div className="container">
        <div className="guest-book">
          <h2>방명록 </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="성함을 입력해 주세요."
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="내용을 입력해 주세요."
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
