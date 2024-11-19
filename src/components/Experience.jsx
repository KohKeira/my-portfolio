import { experiences } from "../data/experiences";

const Experiences = () => {
  return (
    <section id="experiences">
      <div
        className="m-auto container d-flex flex-column gap-4 px-md-5"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="fw-bold">Experiences</h2>
        <div id="carouselIndicators" className="carousel slide">
          <div className="carousel-indicators ">
            {experiences.map((experience, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {experiences.map((experience, i) => (
              <div
                className={`carousel-item position-relative ${
                  i === 0 ? "active" : ""
                }`}
                key={experience.title}
                style={{ height: "400px" }}
              >
                <img
                  src={experience.thumbnail}
                  className="d-block object-fit-cover m-auto w-100 h-100"
                  alt={experience.title}
                />
                <div className="image-overlay text-light position-absolute top-0 h-100 d-flex flex-column justify-content-center">
                  <h3 className="">{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-body"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-body"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
