import { useState } from "react";
import PlusIcon from "./assets/images/icon-plus.svg";
import StarIcon from "./assets/images/icon-star.svg";
import MinusIcon from "./assets/images/icon-minus.svg";
import "./App.css";

const faqDataMock = [
  {
    number: 1,
    question: "What is Frontend Mentor?",
    answer:
      "Frontend Mentor is a platform that provides realistic coding challenges to help developers improve their frontend skills using real-world projects.",
    isExpanded: false,
  },
  {
    number: 2,
    question: "How do I participate in Frontend Mentor challenges?",
    answer:
      "To participate, sign up on the Frontend Mentor website, choose a challenge that suits your skill level, download the starter files, and start coding.",
    isExpanded: true,
  },
  {
    number: 3,
    question: "Are Frontend Mentor challenges free?",
    answer:
      "Frontend Mentor offers both free and premium challenges. Free challenges provide basic projects, while premium challenges include more complex designs and additional assets.",
    isExpanded: false,
  },
  {
    number: 4,
    question: "Can I use a framework like React or Vue?",
    answer:
      "Yes! You can use any frontend technology you prefer, including React, Vue, Angular, or even just vanilla HTML, CSS, and JavaScript.",
    isExpanded: false,
  },
  {
    number: 5,
    question: "How do I submit my solution?",
    answer:
      "After completing a challenge, submit your solution by uploading it to GitHub and sharing the live site link on the Frontend Mentor platform.",
    isExpanded: false,
  },
  {
    number: 6,
    question: "Can I get feedback on my solution?",
    answer:
      "Yes, once you submit your solution, other community members can provide feedback and suggestions to help you improve your code.",
    isExpanded: false,
  },
  {
    number: 7,
    question: "Is there a time limit for completing challenges?",
    answer:
      "No, you can take as much time as you need to complete a challenge. The goal is to learn and improve at your own pace.",
    isExpanded: false,
  },
];

function App() {
  const [faqData, setFaqData] = useState(faqDataMock);

  const toggleFaqAccordionExpand = (e) => {
    const clickedQuestionId = parseInt(e.target.parentElement.className);
    const questionToToggle = faqData.find(
      (questionSet) => questionSet.number === clickedQuestionId
    );
    const updatedQuestionState = {
      ...questionToToggle,
      isExpanded: !questionToToggle.isExpanded,
    };

    setFaqData(
      faqData.map((question) =>
        question.number === clickedQuestionId ? updatedQuestionState : question
      )
    );
  };

  return (
    <>
      <div className="headerSection"></div>
      <div className="faqSection">
        <div className="faqHeader">
          <div className="starIcon">
            <img src={StarIcon} alt="star icon" />
          </div>
          <div>
            <h1>FAQs</h1>
          </div>
        </div>
        {faqData.map((faqSet) => {
          return (
            <>
              <div
                key={faqSet.number}
                className={`faqContainer${
                  faqSet.isExpanded ? "Expanded" : "Collapsed"
                }`}
              >
                <div className="faqQuestion">
                  <h2>{faqSet.question}</h2>
                  <button
                    className={`${faqSet.number}`}
                    onClick={(e) => toggleFaqAccordionExpand(e)}
                  >
                    <img
                      src={faqSet.isExpanded ? MinusIcon : PlusIcon}
                      alt={`${faqSet.isExpanded} ? "minus icon" : "plus icon`}
                    />
                  </button>
                </div>
                <div className="faqAnswer">
                  <h2>{faqSet.answer}</h2>
                </div>
              </div>
              <hr style={{ width: "100%", border: "0.5px solid gray" }} />
            </>
          );
        })}
      </div>
      <div className="bodySection"></div>
    </>
  );
}

export default App;
