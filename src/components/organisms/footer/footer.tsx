import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer: FunctionComponent = () => {
  return (
    <div className="container__footer">
      <a
        id="instagram"
        href="https://www.instagram.com/markanovicivan/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        id="linkedin"
        href="https://www.linkedin.com/in/ivan-markanovic-b9667084/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a id="github" href="https://github.com/kyok0" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Footer;
