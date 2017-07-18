import React from 'react';
import Field from './field';

export default class Password extends Field {
  render() {
    let valid = '';
    if(this.state.showvalid && this.props.attributes.validation) {
      valid = 'validate';
      if(this.state.value != '') {
        if(this.state.valid) {
          valid += ' success';
        } else {
          valid += ' fail';
        }
      }
    }
    return (
      <fieldset>
      {this.props.labels &&
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
      }
        <input
          type='password'
          name={this.props.attributes.name}
          value={this.state.value}
          placeholder={(this.props.attributes.placeholder ? this.props.attributes.placeholder : '')}
          onChange={this.updateField}
          required={(this.props.attributes.required ? this.props.attributes.required : false)}
          className={valid} />
      </fieldset>
    )
  }
}
