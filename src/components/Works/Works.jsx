import React, { useContext } from "react";
import "./Works.css";
import Persistent from "../../img/Persistent.png";
import Flipkart from "../../img/Flipkart.png";
import Google from "../../img/Google.png";
import Salesforce from "../../img/Salesforce.png";
import Sparks from "../../img/Sparks.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <spane className="intern">
            Worked as an Intern in those different organization increasing
            <br/>
            the overall productivity at work. Learned and developed different 
            <br/>
            skills in different domains for example Salesforce.
            <br/>
            Always looking forward for opportunity to learn and grow!
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Persistent} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Flipkart} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Salesforce} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sparks} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;