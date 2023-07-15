import React, { useEffect, useState } from "react";

function HappyClients() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const countBoxes = Array.from(document.querySelectorAll(".count-box"));

    const handleScroll = () => {
      countBoxes.forEach((countBox) => {
        if (isElementInViewport(countBox) && !countBox.classList.contains("counted")) {
          countBox.classList.add("counted");
          animateCount(countBox);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const animateCount = (countBox) => {
    const countText = countBox.querySelector(".count-text");
    const stopValue = parseInt(countText.getAttribute("data-stop"), 10);
    const speed = parseInt(countText.getAttribute("data-speed"), 10);
    const duration = speed / stopValue;

    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += 1;
      countText.textContent = currentCount;

      if (currentCount === stopValue) {
        clearInterval(timer);
      }
    }, duration);
  };
  return (
      <section className="fun-fact-section">
        <div className="outer-box" style={{ backgroundImage: "url(images/background/8.png)" }}>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="count-box">
                    <div className="icon-box">
                      <span className="flaticon flaticon-project-management" />
                    </div>
                    <div className="text-box">
                      <div className="count">
                        <span className="count-text" data-speed="5000" data-stop="345">0</span>
                        <i>+</i>
                      </div>
                      <h3 className="counter-title">Finished Projects</h3>
                    </div>
                  </div>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                  <div className="count-box">
                    <div className="icon-box">
                      <span className="flaticon flaticon-award" />
                    </div>
                    <div className="text-box">
                      <div className="count">
                        <span className="count-text" data-speed="5000" data-stop="17">0</span>
                        <i>+</i>
                      </div>
                      <h3 className="counter-title">Award View</h3>
                    </div>
                  </div>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                  <div className="count-box">
                    <div className="icon-box">
                      <span className="flaticon flaticon-user-experience" />
                    </div>
                    <div className="text-box">
                      <div className="count">
                        <span className="count-text" data-speed="5000" data-stop="10">0</span>
                        <i>+</i>
                      </div>
                      <h3 className="counter-title">Years Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                  <div className="count-box">
                    <div className="icon-box">
                      <span className="flaticon flaticon-diagram" />
                    </div>
                    <div className="text-box">
                      <div className="count">
                        <span className="count-text" data-speed="5000" data-stop="489">0</span>
                      </div>
                      <h3 className="counter-title">Happy Clients</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HappyClients;
