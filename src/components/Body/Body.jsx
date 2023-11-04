import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./Body.css";

import AOS from "aos";
import "aos/dist/aos.css";

const offerdata_tenant = {
  h2_1: "Pre book your house and your given the first preference",
  img_1: "assests/tenant/1.jpg",

  h2_2: "Pay rent without money",
  img_2: "assests/tenant/2.jpg",

  h2_3: "Get to know your community/area",
  img_3: "assests/tenant/3.jpg",

  h2_4: "Listing only verified profiles, we respect your privacy.",
  img_4: "assests/tenant/4.jpg",
};

const offerdata_host = {
  h2_1: "Background checks on people visiting the house.",
  img_1: "assests/host/1.jpg",

  h2_2: "Owners now can earn passively with rectr",
  img_2: "assests/host/2.jpg",

  h2_3: "A full-fledged dashboard to control in and out of your listing",
  img_3: "assests/host/3.jpg",

  h2_4: "Rent your house with verified tenants",
  img_4: "assests/host/4.jpg",
};

const Body = () => {

  const [overlayBox, setOverlayBox] = useState("overlaybox");

  const handleOverlayBox = () => {
    if (overlayBox === "overlaybox overlaybox-active") setOverlayBox("overlaybox");
    else
      setOverlayBox("overlaybox overlaybox-active");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* INNOVATION SECTION */}
      <div className={overlayBox}>
        <h1>Sign in to Newsletter</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <a className="btn" href="">Subscribe to Newsletter</a>
        <p>Read <Link to="/privacy">Privacy policy</Link> and <Link to="/privacy">Terms And Conditionss</Link></p>
        <button onClick={handleOverlayBox}>Back To Home</button>
      </div>
      <h1>
        <span>Innovation</span> in every tap
      </h1>

      <div className="innovationSection">
        <div className="innovationSection-box" data-aos="fade-up">
          <img src="assests/innovations/feature1.svg" />
          <h1>Precise search engine that reflects your search.</h1>
          <p>
            Introducing the renovated search bar that precisely reflects your
            search results. Made for you & your needs.
          </p>
        </div>
        <div className="innovationSection-box" data-aos="fade-up">
          <img src="assests/innovations/feature2.png" />
          <h1>
            Personalized content <br /> according to your interest.
          </h1>
          <p>
            Personalized house listings that return a better ROI each minute
            spent in the app.
          </p>
        </div>
        <div className="innovationSection-box" data-aos="fade-up">
          <img src="assests/innovations/feature3.jpg" />
          <h1>Choose the Host or tenant who match your mindset</h1>
          <p>
            Now tenants can choose not only a house but also the owners/host
            from the pool of highly valued people according to your preferences.
          </p>
        </div>
        <div className="innovationSection-box" data-aos="fade-up">
          <img src="assests/innovations/feature4.jpg" />
          <h1>Background check for enhanced security.</h1>
          <p>
            Host/Owners need not worry about listing your property with Rectr,
            we give a clear picture of people using our app.
          </p>
        </div>
      </div>

      {/* OFFER SECTION */}

      <h1>
        What We <span>Offer</span>
      </h1>

      <div className="offerSectionbtn">
        <h1>Tenant</h1>
      </div>

      <div className="offerSection">
        <div className="offerbox" data-aos="fade-up">
          <img src={offerdata_tenant["img_1"]} />
          <h2>{offerdata_tenant["h2_1"]}</h2>
        </div>

        <div className="offerbox" data-aos="fade-up">
          <h2>{offerdata_tenant["h2_2"]}</h2>
          <img src={offerdata_tenant["img_2"]} />
        </div>

        <div className="offerbox" data-aos="fade-up">
          <img src={offerdata_tenant["img_3"]} />
          <h2>{offerdata_tenant["h2_3"]}</h2>
        </div>

        <div className="offerbox" data-aos="fade-up">
          <h2>{offerdata_tenant["h2_4"]}</h2>
          <img src={offerdata_tenant["img_4"]} />
        </div>

        <div className="offerSectionbtn">
          <h1>Host</h1>
        </div>

        <div className="offerbox" data-aos="fade-up">
          <img src={offerdata_host["img_1"]} />
          <h2>{offerdata_host["h2_1"]}</h2>
        </div>

        <div className="offerbox" data-aos="fade-up">
          <h2>{offerdata_host["h2_2"]}</h2>
          <img src={offerdata_host["img_2"]} />
        </div>

        <div className="offerbox" data-aos="fade-up">
          <img src={offerdata_host["img_3"]} />
          <h2>{offerdata_host["h2_3"]}</h2>
        </div>

        <div className="offerbox" data-aos="fade-up">
          <h2>{offerdata_host["h2_4"]}</h2>
          <img src={offerdata_host["img_4"]} />
        </div>
      </div>

      {/* MEAN SECTION  */}

      <h1 id="L3" data-aos="fade-up">
        What does it <span>Mean</span> <br /> to you
      </h1>
      <div className="meanSection" data-aos="fade-up">
        <div className="meanSection-box">
          <p>
            Book your house in advance & be the
            <strong>
              <span> prior </span>
            </strong>
            one to get it.
          </p>
          <img src="assests/mean/whatyouget-img-1.png" alt="" />
        </div>
        <div className="meanSection-box">
          <p>
            Pay rent
            <strong>
              <span> without </span>
            </strong>
            money, yup it's true using Rectr pay.
          </p>
          <img src="assests/mean/whatyouget-img-2.png" alt="" />
        </div>
        <div className="meanSection-box">
          <p>
            <strong>
              <span>Get to know </span>
            </strong>
            your community / area, crime rates etc.
          </p>
          <img src="assests/mean/whatyouget-img-3.png" />
        </div>
        <div className="meanSection-box">
          <p>
            Listing only
            <strong>
              <span> verifed profile </span>
            </strong>
            , we respect your privacy.
          </p>
          <img src="assests/mean/whatyouget-img-4.png" id="L4" />
        </div>
      </div>

      {/* INSIDE FACTORY  */}
      <h1>
        Inside the <span>Factory</span>
      </h1>
      <div className="factorySection" data-aos="fade-up">
        <img src="assests/mean/Rectr.png" />
      </div>

      {/* 3 step process 
        <h1>
          <span>3</span> Step Process
        </h1>
        <div className="stepSection">
          <img src="/3step/app-ss-1.png" />
          <h2>Search</h2>
          <h3>
            Use our effective search engine & filters to select your desired
            independent rental homes.
          </h3>

          <img src="/3step/app-ss-2.png" />
          <h2>Register</h2>
          <h3>Click Register based on Owner/Tenant conditions.</h3>

          <img src="/3step/app-ss-3.png" />
          <h2>Scheduled-visit</h2>
          <h3>
            Book the Date & time of visiting the house in physical. Know each
            other. Deal Closed 🌟
          </h3>
        </div>
        */}

      {/* OUR CLAIM SECTION  */}
      <h1 id="L5">
        We <span>Claim</span>
      </h1>
      <div className="claimSection">
        <div className="claimBox" data-aos="fade-up">
          <div className="claimimgbox">
            <img src="assests/claim/speed.svg" />
            <p>
              Increased <br /> Speed & Efficiency
            </p>
          </div>
          <img src="assests/claim/arrow.svg" alt="" />
          <p>
            40% <br /> than current market
          </p>
        </div>

        <div className="claimBox" data-aos="fade-up">
          <div className="claimimgbox">
            <img src="assests/claim/security.svg" />
            <p>
              Security <br /> We Sealed it
            </p>
          </div>
          <img src="assests/claim/arrow.svg" alt="" />
          <p>
            No <br /> comprosmise
          </p>
        </div>

        <div className="claimBox" data-aos="fade-up">
          <div className="claimimgbox">
            <img src="assests/claim/ease.svg" />
            <p>Easy to use</p>
          </div>
          <img src="assests/claim/arrow.svg" alt="" />
          <p>Gen Z & Millineals </p>
        </div>

        <div className="claimBox" data-aos="fade-up">
          <p>Security</p>
          <div className="claimimgbox">
            <img src="assests/claim/triangle.svg" />
            <p>Easy to use</p>
          </div>
          <p>Efficiency</p>
        </div>
      </div>

      {/* LOADING SECTION  */}
      <h1 id="L6">
        Still a lot getting <span>loaded</span>...
      </h1>
      <div className="loadingSection" data-aos="fade-up">
        <p>
          We make your Inbox <span>valuable</span> , with discounts and upcoming
          features.
        </p>
        <a href="#" onClick={handleOverlayBox} >Join Us</a>

        <p>
          Get ahead of people who don't. <br /> See you there...
        </p>
      </div>

      {/* FAQ SECTION  */}
      <h1 id="faq">
        <span>FAQ</span> Section
      </h1>
      <div className="faqsection">
        <span></span>
        <details>
          <summary data-aos="fade-up">How To Use ?</summary>
          <p>
            Download the app from play store ( Launching Soon). Search the
            desired Rental house you prefer from filters and search.Absolutely
            Free. Register. Scheduled-Visit. Own-it.
          </p>
        </details>
        <details>
          <summary data-aos="fade-up">Host your Property !</summary>
          <p>
            For Now we accepting Rental house around Tamilnadu. Submit Your
            Property for Free Here!
          </p>
        </details>
      </div>
    </>
  );
};

export default Body;
