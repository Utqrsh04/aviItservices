import React, { useEffect, useState } from "react";
import "./OurValues.css";
import VisibilitySensor from "react-visibility-sensor";

const OurValues = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window?.innerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerHeight]);

  return (
    <section className="ourservices">
      <div className="ourservices-section">
        <h1>Our Values</h1>
        <VisibilitySensor
          partialVisibility
          offset={{
            top: windowHeight / 3,
            bottom: windowHeight / 3,
          }}
        >
          {({ isVisible }) => (
            <div className="ourservices-row">
              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  <img
                    className="values-image"
                    src="../../assests/4.jpeg"
                    alt=""
                  />
                </div>
                <h2> Excellence & Quality</h2>
              </div>

              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  {" "}
                  <img
                    className="values-image"
                    src="../../assests/6.jpeg"
                    alt=""
                  />
                </div>
                <h2>Innovation</h2>
              </div>
              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  {" "}
                  <img
                    className="values-image"
                    src="../../assests/3.jpeg"
                    alt=""
                  />
                </div>
                <h2>Ethics & Intergity</h2>
              </div>
              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  {" "}
                  <img
                    className="values-image"
                    src="../../assests/5.jpeg"
                    alt=""
                  />
                </div>
                <h2>Consistency & Reliability</h2>
              </div>
              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  {" "}
                  <img
                    className="values-image"
                    src="../../assests/2.jpeg"
                    alt=""
                  />
                </div>
                <h2>Respect & Teamwork</h2>
              </div>
              <div
                className={`service ${
                  isVisible ? " cssanimation fadeInBottom sequence" : ""
                }`}
              >
                <div className="service-image">
                  <img
                    className="values-image"
                    src="../../assests/1.jpeg"
                    alt=""
                  />
                </div>
                <h2>Safety, Health & Environment</h2>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default OurValues;
