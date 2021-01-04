import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";

const Form = () => {
  // *********** GSAP ANIMATION SECTION ************
  let container = useRef(null);
  let formWrapper = useRef(null);
  let innerText = useRef(null);

  let inputName = useRef(null);
  let inputMail = useRef(null);
  let inputMessage = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { width: "0vw" },
      {
        width: "100vw",
        ease: "power2.out",
        visibility: "visible",
        duration: 1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      formWrapper.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        delay: 1.5,
        duration: 1.3,
        ease: "easeIn",
      }
    );
    gsap.fromTo(
      innerText.current,
      { opacity: 0, y: -10 },
      { delay: 2.6, duration: 0.4, opacity: 1, ease: "power2.out", y: 0 }
    );
    gsap.fromTo(
      inputName.current,
      { opacity: 0, x: -5 },
      { delay: 2.7, duration: 0.2, opacity: 1, ease: "easeIn", x: 0 }
    );
    gsap.fromTo(
      inputMail.current,
      { opacity: 0, x: -5 },
      { delay: 2.8, duration: 0.2, opacity: 1, ease: "easeIn", x: 0 }
    );
    gsap.fromTo(
      inputMessage.current,
      { opacity: 0, x: -5 },
      { delay: 2.9, duration: 0.2, opacity: 1, ease: "easeIn", x: 0 }
    );
    gsap.fromTo(
      button.current,
      { opacity: 0, x: -5 },
      { delay: 3, duration: 0.2, opacity: 1, ease: "easeIn", x: 0 }
    );
  });

  //Form EmailJS:
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ir7mere",
        "template_gwxpiai",
        e.target,
        "user_V46aPdtFLE1iXEcr7EtPY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Your message is sent!");
  };

  return (
    <div className="container" ref={container}>
      <div className="formWrapper" ref={formWrapper}>
        <div className="innerText" ref={innerText}>
          <h1>Contact me,</h1>
          <p>and make your vision come true.</p>
          <p>
            My website:
            <a
              style={{
                color: "#7a528d",
                textDecoration: "none",
                marginLeft: 10,
              }}
              href="https://pokedex-application.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boris L.
            </a>
          </p>
          <div className="message">{message}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <input
              ref={inputName}
              type="text"
              placeholder="Your Name..."
              name="name"
              required
            />
            <input
              ref={inputMail}
              type="text"
              placeholder="Your e-mail..."
              name="email"
              required
            />

            <textarea
              ref={inputMessage}
              style={{ outline: "none", resize: "none" }}
              placeholder="Your Message..."
              className="messageInputField"
              name="message"
              required
            />
          </div>
          <button type="submit" className="btn" ref={button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
