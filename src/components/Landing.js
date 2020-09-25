import React, { useRef, useEffect } from "react";
import "../App.scss";
import "../styles/Landing.scss";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

function Landing() {
  let shapesText = useRef(null);
  let ampersand = useRef(null);
  let figuresText = useRef(null);
  let continueBox = useRef(null);
  let continueContainer = useRef(null);

  useEffect(() => {
    TweenMax.from(shapesText, 1.4, {
      y: 300,
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenMax.from(ampersand, 2.5, {
      y: 300,
      ease: Power3.easeOut,
      delay: 1.5,
    });
    TweenMax.from(figuresText, 2, {
      y: 300,
      ease: Power3.easeOut,
      delay: 1.5,
    });
    TweenMax.to(continueContainer, 2.5, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 3.5,
    });
  }, []);

  const mouseEnter = () => {
    console.log("mouse enter");
    TweenMax.to(continueBox, 0.2, {
      border: 3,
      borderRadius: 50,
      marginTop: -1,
      marginBottom: -1,
      opacity: 0.55,
      ease: Power3.easeInOut,
    });
  };

  const mouseLeave = () => {
    console.log("mouse leave");
    TweenMax.to(continueBox, 0.3, {
      border: 2,
      borderRadius: 10,
      marginTop: 0,
      marginBottom: 0,
      opacity: 1,
      ease: Power3.easeInOut,
    });
  };

  return (
    <>
      <div className="header">
        <div className="header-top">
          <h1>
            <span
              className="hide-text"
              ref={(el) => {
                shapesText = el;
              }}
            >
              SHAPES
            </span>
          </h1>
          <h1>
            <span
              className="hide-text"
              ref={(el) => {
                ampersand = el;
              }}
            >
              &
            </span>
          </h1>
        </div>
        <div>
          <h1>
            <span
              className="hide-text"
              ref={(el) => {
                figuresText = el;
              }}
            >
              FIGURES
            </span>
          </h1>
        </div>
      </div>
      <div
        ref={(el) => {
          continueContainer = el;
        }}
        className="link-container"
      >
        <Link to="/editor">
          <p
            className="hide-text"
            ref={(el) => {
              continueBox = el;
            }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Continue
          </p>
        </Link>
      </div>
    </>
  );
}

export default Landing;
