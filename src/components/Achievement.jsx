import { awards, certificates } from "../data/achievements";

const Achievement = () => {
  return (
    <section id="achievement">
      <div
        className="container d-flex flex-column gap-4 px-5"
        style={{ maxWidth: "1200px" }}
      >
        <h2 className="fw-bold">Achievements</h2>
        <div className="vstack gap-3 mt-4">
          <h4 className="fw-bold">Certificates</h4>
          <div className="d-flex gap-5 justify-content-center flex-wrap">
            {certificates.map((cert) => (
              <a href={cert.link} key={cert.title} target="_blank">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  height={100}
                  width={100}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="vstack gap-3 mt-4">
          <h4 className="fw-bold">Awards</h4>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {awards.map((award) => (
              <div className="col" key={award.title}>
                <div
                  className="card w-100 h-100 m-auto border-secondary"
                  style={{ maxWidth: "20rem" }}
                >
                  <img
                    src={award.thumbnail}
                    className="card-img-top"
                    alt={award.title}
                  />
                  <div className="card-body">
                  <h5 className="card-title">{award.title}</h5>
                  <p className="card-text">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
