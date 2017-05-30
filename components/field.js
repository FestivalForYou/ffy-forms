import React from 'react';
import Validate from '../validate';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.attributes.value ? this.props.attributes.value : ''),
      valid: true,
      showvalid: this.props.realtimeval
    }
  }

  updateField = (e) => {
    this.state.value = e.target.value
    if(this.props.realtimeval) {
      this.validateField();
    }
    this.forceUpdate();
  }

  validateField = () => {
    if(this.props.attributes.validation) {
      let valid = true;
      let validations = this.props.attributes.validation;
      for(let key of Object.keys(validations)) {
        switch(key) {
          case 'equals':
            let test = validations.equals.var;
            if(validations.equals.type == 'field') {
              test = this.props.getFieldValue(validations.equals.var);
            }
            this.state.valid = Validate.runTest(key, this.state.value, test);
        }
      }
    }
    return this.state.valid;
  }

  getValue = (validate) => {
    if(validate) {
      let valid = this.validateField();
      if(!valid) {
        return this.state.value;
      }
    } else {
      return this.state.value;
    }
  }

  clear = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <fieldset>

      </fieldset>
    )
  }
}

Field.defaultProps = {
  realtimeval: false,
  value: ''
}
