import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: (this.props.value ? this.props.value : [])
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

  clear = () => {
    this.setState({
      checked: []
    })
  }

  render() {
    let options = [];
    this.props.attributes.options.forEach((value, index) => {
      options.push(<div className="checkbox" key={index}><input type="checkbox" name={this.props.attributes.name + '[]'} value={value.val} onClick={this.updateField} /> {value.label}</div>);
    });
    return (
      <fieldset className={this.props.attributes.classname}>
        <label htmlFor={this.props.attributes.name}>{this.props.attributes.label}</label>
        {options}
      </fieldset>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.array
}
