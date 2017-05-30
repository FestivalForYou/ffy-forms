import React from 'react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.value ? this.props.value : this.props.attributes.options[0])
    }
  }

  updateField = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  getValue = () => {
    return this.state.value;
  }

  clear = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    let options = [];
    this.props.attributes.options.forEach((value, index) => {
      options.push(<option key={index}>{value}</option>);
    });
    return (
      <fieldset>
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
        <select name={this.props.attributes.name} onChange={this.updateField}>
          {options}
        </select>
      </fieldset>
    )
  }
}