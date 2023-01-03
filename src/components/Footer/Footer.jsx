import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://github.com/harshdhoke">
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-dhoke-23a6a81a8/">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://twitter.com/Harsh__Dhoke">
          <Twitter color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/the_harsh_dhoke/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/harsh.dhoke.79/">
          <Facebook color="white" size={"3rem"} />
          </a>
        </div>
        <span>Site design/logo © 2023 Harsh Dhoke</span>
      </div>
    </div>
  );
};

export default Footer;