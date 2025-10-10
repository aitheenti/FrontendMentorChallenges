import React, { useState } from "react";
import "./App.css";

//form validation (email addres format)
//hover states

interface FormProps {
  onSubmit: (email: string) => void;
}

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-useless-escape
  const validInputFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInput.trim() === "") {
      setError(true);
    }
  };

  const handleInputchange = (textValue: string) => {
    const trimmedEmail = textValue.trim();
    if (trimmedEmail === "" || !validInputFormat.test(trimmedEmail)) {
      setError(true);
    } else {
      setError(false);
    }
    setEmailInput(textValue);
  };

  return (
    <>
      <main>
        <div id="topSection">
          <div id="formSection">
            <div id="logo">
              <img src="public/images/logo.svg" alt="base apparel logo" />
            </div>
            <h1>
              <span className="largeText">We're</span> coming soon{" "}
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals. Email Address
            </p>
            <form method="" onSubmit={handleFormSubmit} noValidate>
              <div id="emailWithInput">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => handleInputchange(e.target.value)}
                  required
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                <button type="submit" id="submitArrow">
                  <img src="public/images/icon-arrow.svg" alt="arrow" />
                </button>
              </div>
              {error && (
                <span className="error">
                  The email is not formatted correctly.
                </span>
              )}
            </form>
          </div>
          <div id="heroSection">
            <img src="public/images/hero-desktop.jpg" alt="hero image" />
          </div>
        </div>
        <div className="copyrightSection">
          <footer>
            <p className="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a target="blank" href="https://github.com/aitheenti">
                NK
              </a>
              .
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
