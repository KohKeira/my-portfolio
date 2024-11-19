import { FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";
import Tag from "./Tag";

const Project = () => {
  return (
    <section id="projects">
      <div
        className="container d-flex flex-column gap-4 px-5"
        style={{ maxWidth: "1200px" }}
      >
        <h2 className="fw-bold">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <div className="col" key={project.title}>
              <div
                className="card w-100 h-100 m-auto slide-in border-secondary"
                style={{ maxWidth: "20rem" }}
              >
                {project.thumbnailType === "image" ? (
                  <img
                    src={project.thumbnail}
                    className="card-img-top"
                    alt={project.title}
                  />
                ) : (
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={project.thumbnail}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="card-body p-0 position-relative">
                  <div className="p-3 h-100 d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex gap-2 flex-wrap mt-auto">
                      {project.tags.map((tag) => (
                        <Tag
                          technology={tag}
                          key={`${project.title} - ${tag}`}
                        />
                      ))}
                    </div>
                    {project.link !== "" && (
                       <a
                       className="text-decoration-none mt-3 m-auto align-items-center gap-2 mobile-link"
                       href={project.link}
                       target="_blank"
                     >
                       View on GitHub
                       <i className="pb-1">
                         <FaArrowRight size={20} />
                       </i>
                     </a>
                    )}
                  </div>
                  {project.link !== "" && (
                    <div className="card-hover-item d-flex rounded-bottom bg-light bg-gradient">
                      <a
                        className="text-decoration-none text-black m-auto d-inline-flex align-items-center gap-2"
                        href={project.link}
                        target="_blank"
                      >
                        View on GitHub
                        <i className="pb-1">
                          <FaArrowRight size={20} />
                        </i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
