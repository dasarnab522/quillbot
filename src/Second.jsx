import React, { useEffect, useState } from "react";
import "./Second.css";
function Second() {
  const [selected, setSelected] = useState(0);
  const [filled, setFilled] = useState(0);

  const images = [
    {
      id: 1,
      url: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
    },
    {
      id: 2,
      url: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
    },
    {
      id: 3,
      url: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
    },
    {
      id: 4,
      url: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
    },
  ];

  function getId(itemNumber) {
    setFilled(0);
    setSelected(itemNumber);
    let elements = document.getElementsByClassName("itemHeading");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selectedItem");
    }
    elements[itemNumber].classList.add("selectedItem");
  }

  let timeoutId;

  useEffect(() => {
    if (filled < 100) {
      clearTimeout(timeoutId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutId = setTimeout(() => setFilled((prev) => (prev += 0.6)), 30);
    } else {
      setFilled(0);
      setSelected((prev) => {
        if (prev === 3) {
          getId(0);
          return 0;
        } else {
          getId(prev + 1);
          return (prev += 1);
        }
      });
    }

    let progressElement = document.getElementsByClassName("progress");

    for (let i = 0; i < progressElement.length; i++) {
      if (i === selected) {
        progressElement[i].style.width = `${filled}%`;
      } else {
        progressElement[i].style.width = "0%";
      }
    }

    // console.log(filled)
  }, [filled, selected]);

  return (
    <>
      <div className="second">
        <div className="imgs">
          <img src={images[selected].url} alt="Slide.jpg"></img>
        </div>
        <div className="text">
          <div onClick={() => getId(0)}>
            <strong className="itemHeading selectedItem">
              Increase your productivity
            </strong>
            <br />
            Paraphrase more text at once to finish writing faster.
            <div className="progressBar">
              <div className="progress"></div>
            </div>
          </div>
          <div onClick={() => getId(1)}>
            <strong className="itemHeading">Access all modes</strong>
            <br />
            Get maximum control over how you paraphrase.
            <div className="progressBar">
              <div className="progress"></div>
            </div>
          </div>
          <div onClick={() => getId(2)}>
            <strong className="itemHeading">Scan for plagiarism</strong>
            <br />
            Unlock the Plagiarism Checker to guarantee all sources are cited and
            nothing is unintentionally plagiarized.
            <div className="progressBar">
              <div className="progress"></div>
            </div>
          </div>
          <div onClick={() => getId(3)}>
            <strong className="itemHeading">
              Compare all mode outputs at once
            </strong>
            <br />
            Paraphrase in and compare outputs from all seven modes.
            <div className="progressBar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
