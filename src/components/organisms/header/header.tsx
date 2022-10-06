import { FunctionComponent } from "react";
import Typewriter from "typewriter-effect";
import "./header.css";

const Header: FunctionComponent = () => {
  const titles: string[] = [
    "Staff Engineer",
    "Full Stack Developer",
    "DevOps",
    "Linux Lover",
    "Dad Joke Teller",
  ];

  return (
    <div className="container__header">
      <span id="avatar" />
      <span className="console-container">
        <Typewriter
          options={{
            delay: 50,
            deleteSpeed: 50,
            loop: true,
            autoStart: true,
            strings: titles,
          }}
        />
      </span>
    </div>
  );
};

export default Header;
