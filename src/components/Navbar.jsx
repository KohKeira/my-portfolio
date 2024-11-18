import { useState } from "react";

const Navbar = () => {
  const sections = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experiences", label: "Experiences" },
    { href: "#awards", label: "Awards" },
  ];
  const [active, setActive] = useState("");

  const handleActive = (section) => {
    setActive(section);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Keira
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {sections.map((section) => (
              <li className="nav-item" key={section.label}>
                <a
                  className={`nav-link ${
                    active === section.href ? "active" : ""
                  }`}
                  href={section.href}
                  onClick={() => handleActive(section.href)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
