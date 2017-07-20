import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.attributes.content}} />
    )
  }
}
