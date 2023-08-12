import "./FooterStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,

} from "react-icons/fa";

import {BiLogoGmail} from "react-icons/bi"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <p>NIT, Kurukshetra</p>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              8955928803
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              ankushagrawal4321@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sapiente, omnis quo cumque aspernatur nesciunt velit eos ex pariatur
            quibusdam neque qui, similique laborum magni? Consectetur
            perferendis earum voluptas commodi!
          </p>
          <div className="social">
          <Link to="https://wa.me/919460752352">
            <FaWhatsapp
                size={40}
                style={{ color: "white", marginRight: "2rem" }}
              />
          </Link>
            
          {/* <Link to="mailto:ankushagrawal4321@gmail.com" target="_blank"> */}
          <Link to="https://mail.google.com/mail/?view=cm&to=ankushagrawal4321@gmail.com" target="_blank">
            <BiLogoGmail
                size={40}
                style={{ color: "white", marginRight: "2rem" }}
              />
          </Link>
            

            <Link to="https://www.linkedin.com/in/ankush-agrawal/">
              <FaLinkedin
                size={40}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </Link>
            
            <Link to="https://github.com/ankushagrawal1718">
              <FaGithub
                size={40}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
