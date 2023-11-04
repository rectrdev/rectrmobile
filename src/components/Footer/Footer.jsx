import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer" id="L7">
        <div className="footerdata">
          <div className="data">
            <h1>Rectr.in</h1>
          </div>

          <img src="assests/logo-wh.png" alt="LOGO" />
        </div>
        <hr />
        <div className="footerdownload">
          <h1>Download Our App</h1>

          <a href="https://play.google.com/store/apps/details?id=com.rectr.rectrapp" target="_blank" ><p>DOWNLOAD RECTR APP </p><img width="30" height="30" src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new"/></a>
          
        </div>

        <div className="footerlinks">
          <h1>Reach Us </h1>
          <div className="iconslinks">
            <div className="icons">
              <a target="_blavk" href="https://www.instagram.com/rectr.in/">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/fluency/50/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
              <p>
                We Are
                <br /> Active
              </p>
            </div>
            <div className="icons">
              <a href="mailto:Sresanjai.founder@rectr.in ">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/fluency/50/mail--v1.png"
                  alt="mail--v1"
                />
              </a>

              <p>
                Happy To <br /> Hear You
              </p>
            </div>
          </div>
        </div>

        <div className="footerdisclamer">
          <p>@Copyright 2023 Rectr.in</p>
          <div className="disclamerlinks">
            <Link
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <p>|</p>
            <Link
              to="/privacy"
            >
              Terms of Service
            </Link>
            <p>|</p>
            <Link
              to="/privacy"
            >
              Consent
            </Link>
          </div>
        {/* <p className="developer">Designed With <img width="15" height="15" src="https://img.icons8.com/emoji/15/heart-suit.png" alt="heart-suit"/> By BishalDe</p> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
