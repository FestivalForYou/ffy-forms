import React from 'react';
import Field from './field';

export default class Hidden extends Field {
  render() {
    return (
      <input
        type='hidden'
        name={this.props.attributes.name}
        value={this.state.value} />
    )
  }
}
