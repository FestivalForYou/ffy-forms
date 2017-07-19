import React from 'react';
import Text from './components/text';
import Password from './components/password';
import Email from './components/email';
import Select from './components/select';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import TrueFalse from './components/bool';
import Textarea from './components/textarea';
import Hidden from './components/hidden';

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
          fields.push(<Text key={index} attributes={field} labels={this.props.showlabels} getFieldValue={this.getFieldValue} realtimeval={this.props.realtimeval} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'password':
          fields.push(<Password key={index} attributes={field} labels={this.props.showlabels} getFieldValue={this.getFieldValue} realtimeval={this.props.realtimeval} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'email':
          fields.push(<Email key={index} attributes={field} labels={this.props.showlabels} getFieldValue={this.getFieldValue} realtimeval={this.props.realtimeval} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'select':
          fields.push(<Select key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'radio':
          fields.push(<Radio key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'checkbox':
          fields.push(<Checkbox key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'bool':
          fields.push(<TrueFalse key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'textarea':
          fields.push(<Textarea key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
          break;
        case 'hidden':
          fields.push(<Hidden key={index} attributes={field} ref={(el) => { this.state.fields[field.name] = el; }} />)
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
  value: '',
  showlabels: true
}
