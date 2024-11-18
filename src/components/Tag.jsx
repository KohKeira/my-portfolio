import PropTypes from "prop-types";
import { backend, database, frontend } from "../data/technologies";
import { isDarkBackground } from "../utils/helpers";

const Tag = ({ technology }) => {
  Tag.propTypes = {
    technology: PropTypes.string.isRequired,
  };
  const allTechnologies = [
    ...backend,
    ...frontend,
    ...database,
    {
      id: "aws",
      path: "src/assets/logos/aws.svg",
      label: "AWS Services",
      color: "#FF9900",
    },
  ];
  const tech = allTechnologies.find(
    (item) => item.id === technology
  );
  return (
    <span
      style={{
        backgroundColor: tech.color,
      }}
      className={`px-2 rounded-pill ${
        isDarkBackground(tech.color) ? "text-white" : "text-black"
      }`}
    >
      {tech.label}
    </span>
  );
};
export default Tag;
