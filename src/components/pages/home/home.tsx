import react from "react";
import Header from "../../organisms/header/header";
import Body from "../../organisms/body/body";
import Footer from "../../organisms/footer/footer";
import "./home.css";

const Home: react.FunctionComponent = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
