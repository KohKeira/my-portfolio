import { backend, database, frontend } from "../data/technologies";
const About = () => {
  return (
    <section id="about">
      <div
        className="m-auto container d-flex flex-column gap-4 px-5"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="fw-bold">About Me</h2>
        <div>
          <p>
            <span className="fs-4 wave">👋</span>Hi! I am a Year 2 Diploma in IT
            Student from Temasek Polytechnic.
          </p>
          <p>
            As an aspiring Software Application Developer, I have knowledge of
            various web technologies and programming languages. I can transform
            user-friendly and interactive UI/UX design{" "}
            <span className="fs-5">💡</span> into real-life responsive full-stack web
            applications using various technologies such as Laravel and MERN.{" "}
          </p>
          <p>
            Currently, I am a trainee for WorldSkills Singapore under the Web
            Technologies trade. <span className="fs-4">⌨️</span> This has pushed
            me beyond my limits as I am being exposed to technologies beyond
            the curriculum. With these skills, I am aiming to represent my
            school in WSS2025.
          </p>
        </div>
        <ul className="nav nav-pills nav-justified gap-2 gap-md-4 ">
          <li className="nav-item">
            <button
              className="btn btn-outline-light w-100 active"
              aria-current="page"
              data-bs-toggle="tab"
              data-bs-target="#frontend"
            >
              Frontend
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-light w-100"
              data-bs-toggle="tab"
              data-bs-target="#backend"
            >
              Backend
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-light w-100"
              data-bs-toggle="tab"
              data-bs-target="#database"
            >
              Database
            </button>
          </li>
        </ul>
        <div className="tab-content mt-4">
          <div
            className="tab-pane fade show active"
            id="frontend"
            role="tabpanel"
            aria-labelledby="frontend-tab"
            tabIndex="0"
          >
            <div className="row g-5 justify-content-start">
            {frontend.map((logo) => (
                <div className="col" key={logo.id}>
                  <div className="svg-container">
                  <img src={logo.path} alt={logo.id} className="svg-img" />
                  </div>
                  <p className="mt-2">{logo.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="backend"
            role="tabpanel"
            aria-labelledby="backend-tab"
            tabIndex="0"
          >
            <div className="row g-5">
              {backend.map((logo) => (
                <div className="col" key={logo.id}>
                  <div className="svg-container">
                  <img src={logo.path} alt={logo.id} className="svg-img" />
                  </div>
                  <p className="mt-2">{logo.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="database"
            role="tabpanel"
            aria-labelledby="database-tab"
            tabIndex="0"
          >
            <div className="row g-5">
            {database.map((logo) => (
                <div className="col" key={logo.id}>
                  <div className="svg-container">
                  <img src={logo.path} alt={logo.id} className="svg-img" />
                  </div>
                  <p className="mt-2">{logo.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
