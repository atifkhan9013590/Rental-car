import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Faq-div">
      <h2>FAQ</h2>
      <h1>Frequently Asked Questions</h1>
      <p>
        Use securing confined his shutters. Delightful as he it acceptance an
        solicitude discretion reasonably.
      </p>
      <p>Carriage we husbands advanced an perceive greatest.</p>
      <div className="question-answer">
        <div className="div1">
          <button onClick={() => toggleAnswer(0)}>
            What is about comparing rental car deal?
          </button>
          {activeIndex === 0 && (
            <p className="answer">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          )}
        </div>
        <div className="div2">
          <button onClick={() => toggleAnswer(1)}>
            How do I find the best rental car deals?
          </button>
          {activeIndex === 1 && (
            <p className="answer">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          )}
        </div>
        <div className="div3">
          <button onClick={() => toggleAnswer(2)}>
            How do I find such low rental car prices?
          </button>
          {activeIndex === 2 && (
            <p className="answer">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
