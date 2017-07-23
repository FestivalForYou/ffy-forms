import React from 'react';
import PropTypes from 'prop-types';
import Validate from '../validate';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: (this.props.value ? this.props.value : []),
      valid: true
    }
  }

  updateField = (e) => {
    let val = e.target.value;
    let checked = this.state.checked;
    if(checked.indexOf(val) != -1) {
      checked.slice(val);
    } else {
      checked.push(val);
    }
    this.setState({
      checked: checked
    })
  }

  getValue = () => {
    return this.state.checked;
  }

  validateField = () => {
    if(this.props.attributes.required) {
      let valid = true;
      this.state.valid = Validate.runTest('min', this.state.checked, 1);
    }
    if(this.state.valid) {
      if(this.props.attributes.validation) {
        let valid = true;
        let validations = this.props.attributes.validation;
        for(let key of Object.keys(validations)) {
          switch(key) {
            case 'min':
              let test = validations.min.num;
              break;
          }
          this.state.valid = Validate.runTest(key, this.state.value, test);
        }
      }
    }
    return this.state.valid;
  }

  clear = () => {
    this.setState({
      checked: []
    })
  }

  render() {
    let options = [];
    this.props.attributes.options.forEach((value, index) => {
      options.push(<div className="checkbox" key={index}><input type="checkbox" name={this.props.attributes.name + '[]'} value={value.val} onClick={this.updateField} id={this.props.attributes.name + '_' + index} /> <label htmlFor={this.props.attributes.name + '_' + index}>{value.label}</label></div>);
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

Checkbox.propTypes = {
  checked: PropTypes.array
}
