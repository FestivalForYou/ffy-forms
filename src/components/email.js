import React from 'react';
import Field from './field';

export default class Email extends Field {
  render() {
    return (
      <fieldset>
      {this.props.labels &&
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
      }
        <input
          type='email'
          name={this.props.attributes.name}
          value={this.state.value}
          placeholder={(this.props.attributes.placeholder ? this.props.attributes.placeholder : '')}
          onChange={this.updateField}
          required={(this.props.attributes.required ? this.props.attributes.required : false)} />
      </fieldset>
    )
  }
}
