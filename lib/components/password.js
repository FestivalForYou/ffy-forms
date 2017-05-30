'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Password = function (_Field) {
  _inherits(Password, _Field);

  function Password() {
    _classCallCheck(this, Password);

    return _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).apply(this, arguments));
  }

  _createClass(Password, [{
    key: 'render',
    value: function render() {
      var valid = '';
      if (this.state.showvalid && this.props.attributes.validation) {
        valid = 'validate';
        if (this.state.value != '') {
          if (this.state.valid) {
            valid += ' success';
          } else {
            valid += ' fail';
          }
        }
      }
      return _react2.default.createElement(
        'fieldset',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.attributes.name },
          this.props.attributes.label
        ),
        _react2.default.createElement('input', {
          type: 'password',
          name: this.props.attributes.name,
          value: this.state.value,
          placeholder: this.props.attributes.placeholder ? this.props.attributes.placeholder : '',
          onChange: this.updateField,
          required: this.props.attributes.required ? this.props.attributes.required : false,
          className: valid })
      );
    }
  }]);

  return Password;
}(_field2.default);

exports.default = Password;