import React from 'react';
import Validate from '../validate';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.value ? this.props.value : false),
      valid: true
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

  validateField = () => {
    if(this.props.attributes.required) {
      let valid = true;
      this.state.valid = Validate.runTest('required', this.state.value);
    }
    return this.state.valid;
  }

  clear = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    let options = [];
    this.props.attributes.options.forEach((value, index) => {
      options.push(<div className="radio" key={index}><input type="radio" name={this.props.attributes.name} value={value.val} onClick={this.updateField} id={this.props.attributes.name + '_' + index} /> <label htmlFor={this.props.attributes.name + '_' + index}>{value.label}</label></div>);
    });
    let classname = (this.props.attributes.classname ? this.props.attributes.classname : "");
    if(!this.state.valid) {
      classname += " error";
    }
    return (
      <fieldset className={classname}>
        <p>{this.props.attributes.label}</p>
        {options}
      </fieldset>
    )
  }
}
