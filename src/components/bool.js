import React from 'react';
import PropTypes from 'prop-types';

export default class Bool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: (this.props.value ? this.props.value : false),
      valid: true
    }
  }

  updateField = (e) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  getValue = () => {
    return this.state.checked;
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
      checked: false
    })
  }

  render() {
    let classname = (this.props.attributes.classname ? this.props.attributes.classname : "");
    if(!this.state.valid) {
      classname += " error";
    }
    return (
      <fieldset className={classname}>
        <input type="checkbox" name={this.props.attributes.name} onClick={this.updateField} id={this.props.attributes.name} />
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
      </fieldset>
    )
  }
}

Bool.propTypes = {
  checked: PropTypes.bool
}
