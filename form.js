import React from 'react';
import Text from './components/text';
import Password from './components/password';
import Select from './components/select';

export default class Form extends React.Component {
  componentWillMount = () => {
    this.state = {
      fields: {},
      values: {}
    }
  }

  submit = (e) => {
    e.preventDefault();
    for(let key of Object.keys(this.state.fields)) {
      this.state.values[key] = this.state.fields[key].getValue();
    }

    this.props.onSubmit(this.state.values);
  }

  clearFields = () => {
    console.log('clear fields');
    for(let key of Object.keys(this.state.fields)) {
      this.state.fields[key].clear();
    }
  }

  getFieldValue = (field) => {
    return this.state.fields[field].getValue();
  }

  render() {
    let fields = [];
    this.props.fields.forEach((field, index) => {
      switch(field.type) {
        case 'text':
          fields.push(<Text key={index} attributes={field} getFieldValue={this.getFieldValue} realtimeval={this.props.realtimeval} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'password':
          fields.push(<Password key={index} attributes={field} getFieldValue={this.getFieldValue} realtimeval={this.props.realtimeval} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'select':
          fields.push(<Select key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
      }
    });
    return (
      <form name={this.props.name} method="POST" action="" onSubmit={this.submit}>
        {fields}
        <fieldset>
          <input type="submit" value={this.props.submitbtn} />
        </fieldset>
      </form>
    )
  }
}

Form.defaultProps = {
  realtimeval: false,
  value: ''
}
