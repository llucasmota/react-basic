import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}
/**
 * Definindo valor default de propriedades
 */
TechItem.defaultProps = {
  tech: "Oculto"
};
/**
 * Configura como devo receber cada tipo de property
 * similar a um controle de schema
 */
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
export default TechItem;
