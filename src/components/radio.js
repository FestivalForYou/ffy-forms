import React from 'react';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.value ? this.props.value : false)
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
    return (
      <fieldset className={this.props.attributes.classname}>
        <p>{this.props.attributes.label}</p>
        {options}
      </fieldset>
    )
  }
}
