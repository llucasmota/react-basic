import React, { Component } from "react";
import TechItem from "./TechItem";
class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.jS", "ReactJS", "React Native"]
  };
  // executa assim que o componente é apresentado
  componentDidMount() {}

  // executa assim que há alteração nas props e no estado
  componentDidUpdate(prevProps, prevState) {}

  // executa quando o componente deixa de existir
  componentWillMount() {}

  handleSubmit = e => {
    e.preventDefault();
    /**
     * No react não devo usar um push() pois alteraria a imutabilidade
     * da variável, sendo assim, utilizo o setState e crio um novo
     * array
     */
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleDelete(tech) {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
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
