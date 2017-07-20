import React from 'react';
import PropTypes from 'prop-types';

export default class Bool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: (this.props.value ? this.props.value : false)
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

  clear = () => {
    this.setState({
      checked: false
    })
  }

  render() {
    let options = [];
    return (
      <fieldset className={this.props.attributes.classname}>
        <input type="checkbox" name={this.props.attributes.name} onClick={this.updateField} />
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
      </fieldset>
    )
  }
}

Bool.propTypes = {
  checked: PropTypes.bool
}
