import React from 'react';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: (this.props.value ? this.props.value : false)
    }
  }

  updateField = (e) => {
    this.setState({
      value: !this.state.value
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
      options.push(<div className="checkbox"><input type="checkbox" name={this.props.attributes.name} value={value.val} onClick={this.updateField} /> {value.label}</div>);
    });
    return (
      <fieldset>
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
        {options}
      </fieldset>
    )
  }
}
