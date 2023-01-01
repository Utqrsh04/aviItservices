import React from "react";
import eye from "../eye.jpg";
import "./About.css";
import OurValues from "../OurValues/OurValues";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <>
      {" "}
      <section class="about">
        <div class="aboutcontent">
          <Fade left>
            {/* <h2>About Us</h2> */}
            <p> AVIIT SERVICES</p>
          </Fade>
        </div>
      </section>
      <div class="section-about">
        <Fade right>
          <div class="about-container">
            <div class="content-about">
              <div class="abouttitle">
                <h2>About Us</h2>
              </div>
              <div class="section1content">
                <p>
                  AVI IT Services Private Limited is founded in February ,2022 a
                  pan -African Subsidiary.
                </p>
                <p>
                  AVI IT Services Private Limited Is A Fast Growing Company .
                </p>
                <p>
                  we provide the public sector enterprises with multiple levels
                  of support to integrate Oracle Utilities, ORMB , CC&B.
                </p>
              </div>
            </div>
            <div class="aboutimage">
              <img src={eye} alt="img" />
            </div>
          </div>
        </Fade>
      </div>
      <div class="section2-about">
        <div class="about2-container">
          <Fade right>
            <div class="content2-about">
              <div class="about2-title">
                <h1>Our Vision</h1>
              </div>
              <div class="section2content">
                <p>
                  Our firm remains on the cutting edge of recruitment trends. We
                  stay well-informed and continually adapt to the ever-changing
                  world of human resources.
                </p>
                <p>
                  Our consistent record of uncompromising ethics instills
                  confidence and trust. Our consulting services focus on the
                  client’s most critical issues and opportunities in the talent
                  space.
                </p>
                <p>
                  We help companies manage their talent needs. We are a company
                  that focuses on building talent ecosystem. We create,
                  integrate and optimise the Talent Supply Chain for
                  organisations.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <OurValues />
    </>
  );
}
