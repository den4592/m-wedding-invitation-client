import "../css/style.css";
import Hero from "./Hero";
import Main from "./Main";
import Dday from "./Dday";
import Album from "./Album";
import Location from "./Location";
import BankAccount from "./BankAccount";
import GuestBook from "./GuestBook";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default App;
