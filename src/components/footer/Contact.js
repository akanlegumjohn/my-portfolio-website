import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLinkedin, faInstagram, faTwitter, faWhatsapp, faGithub);
const Contact = () => {
  return (
    <footer>
      <div className="contact--info">
        <h3>Contact Me</h3>
      </div>

      <div className="social--media-icons">
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>

        <div>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>

      <div className="bottom--text">
        <hr />
        <p className="copyright">2022 copyright all right reserve</p>
      </div>
    </footer>
  );
};

export default Contact;
