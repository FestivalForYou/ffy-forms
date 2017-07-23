'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.updateField = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.validateField = function () {
      return _this.state.valid;
    };

    _this.clear = function () {
      _this.setState({
        value: ''
      });
    };

    _this.state = {
      value: _this.props.value ? _this.props.value : _this.props.attributes.options[0],
      valid: true
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var options = [];
      this.props.attributes.options.forEach(function (value, index) {
        options.push(_react2.default.createElement(
          'option',
          { key: index },
          value
        ));
      });
      return _react2.default.createElement(
        'fieldset',
        { className: this.props.attributes.classname },
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.attributes.name },
          this.props.attributes.label
        ),
        _react2.default.createElement(
          'select',
          { name: this.props.attributes.name, onChange: this.updateField },
          options
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

exports.default = Select;