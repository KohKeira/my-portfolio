import { useRef } from "react";
import profileImage from "../assets/images/avatar.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: ["Software Developer", "DSTA Scholar", "IT Student"],
      typeSpeed: 100,
      backDelay: 50,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row g-5 p-2 px-md-4">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-md-last">
            <img
              src={profileImage}
              alt="Keira's photo"
              className="rounded-circle"
              id="profileImage"
            />
          </div>
          <div className="col-12 col-md-6  text-center text-md-start ps-md-5">
            <h1>Hi! I&apos;m Keira</h1>
            <h1 className="fw-bold text-info font-monospace">
              <span ref={type}></span>
            </h1>
            <p className="mt-4">
              As a passionate and curious IT student, I aspire to constantly
              upgrade my skills to meet the demand of the IT industry. With my
              problem-solving and analytical skills, I hope to create products
              that will contribute back to the society.
            </p>
            <div className="d-flex align-items-center gap-3 mt-4 justify-content-center justify-content-md-start">
              <a className="btn btn-outline-light " href='KohKeira_Resume.pdf' download="KohKeira_Resume.pdf">
                Resume
              </a>
              <a
                href="https://github.com/KohKeira"
                target="_blank"
                className="icon"
              >
                <FaGithub size={35} />
              </a>
              <a
                href="https://www.linkedin.com/in/keira-koh"
                target="_blank"
                className="icon"
              >
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
