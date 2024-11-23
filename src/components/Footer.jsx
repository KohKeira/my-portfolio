import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-flex px-4 py-2 bg-body-tertiary flex-column flex-sm-row justify-content-center align-items-center gap-2">
      <p className="m-0">&#169; 2024 Keira Koh. All rights reserved.</p>
      <div className="ms-sm-auto hstack gap-2 justify-content-center align-items-center">
        <a href="https://github.com/KohKeira" target="_blank" className="icon">
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/keira-koh"
          target="_blank"
          className="icon"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
