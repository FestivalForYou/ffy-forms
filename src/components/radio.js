import React from 'react';

export default class Radio extends React.Component {
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
      options.push(<div className="radio"><input type="radio" name={this.props.attributes.name} value={value.val} onClick={this.updateField} /> {value.label}</div>);
    });
    return (
      <fieldset>
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
        {options}
      </fieldset>
    )
  }
}
