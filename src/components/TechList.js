import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.jS", "ReactJS", "React Native"]
  };

  handleSubmit = e => {
    e.preventDefault();
    /**
     * No react não devo usar um push() pois alteraria a imutabilidade
     * da variável, sendo assim, utilizo o setState e crio um novo
     * array
     */
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
