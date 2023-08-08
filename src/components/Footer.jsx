import "./FooterStyle.css";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

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
            <FaFacebook
              size={40}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={40}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaInstagram
              size={40}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={40}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaGithub
              size={40}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
