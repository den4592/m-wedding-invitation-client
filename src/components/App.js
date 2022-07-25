import "../css/style.css";
import Hero from "./Hero";
import Main from "./Main";
import Dday from "./Dday";
import Album from "./Album";
import Location from "./Location";
import BankAccount from "./BankAccount";
import GuestBook from "./GuestBook";

function App() {
  return (
    <div className="app">
      <Hero />
      <Main />
      <Dday />
      <Album />
      <Location />
      <BankAccount />
      <GuestBook />
    </div>
  );
}

export default App;
