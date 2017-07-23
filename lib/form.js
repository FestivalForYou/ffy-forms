'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('./components/text');

var _text2 = _interopRequireDefault(_text);

var _password = require('./components/password');

var _password2 = _interopRequireDefault(_password);

var _email = require('./components/email');

var _email2 = _interopRequireDefault(_email);

var _select = require('./components/select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('./components/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('./components/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _bool = require('./components/bool');

var _bool2 = _interopRequireDefault(_bool);

var _textarea = require('./components/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _hidden = require('./components/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _info = require('./components/info');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.state = {
        fields: {},
        values: {},
        errors: []
      };
    }, _this.submit = function (e) {
      _this.state.errors = [];
      e.preventDefault();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(_this.state.fields)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (_this.state.fields[key].validateField()) {
            _this.state.values[key] = _this.state.fields[key].getValue();
          } else {
            _this.state.errors.push(key);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (_this.state.errors.length == 0) {
        _this.props.onSubmit(_this.state.values);
      } else {
        _this.forceUpdate();
        _this.props.onSubmit({
          errors: _this.state.errors
        });
      }
    }, _this.clearFields = function () {
      console.log('clear fields');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(_this.state.fields)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          _this.state.fields[key].clear();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }, _this.getFieldValue = function (field) {
      return _this.state.fields[field].getValue();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = [];
      this.props.fields.forEach(function (field, index) {
        switch (field.type) {
          case 'text':
            fields.push(_react2.default.createElement(_text2.default, { key: index, attributes: field, labels: _this2.props.showlabels, getFieldValue: _this2.getFieldValue, realtimeval: _this2.props.realtimeval, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'password':
            fields.push(_react2.default.createElement(_password2.default, { key: index, attributes: field, labels: _this2.props.showlabels, getFieldValue: _this2.getFieldValue, realtimeval: _this2.props.realtimeval, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'email':
            fields.push(_react2.default.createElement(_email2.default, { key: index, attributes: field, labels: _this2.props.showlabels, getFieldValue: _this2.getFieldValue, realtimeval: _this2.props.realtimeval, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'select':
            fields.push(_react2.default.createElement(_select2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'radio':
            fields.push(_react2.default.createElement(_radio2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'checkbox':
            fields.push(_react2.default.createElement(_checkbox2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'bool':
            fields.push(_react2.default.createElement(_bool2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'textarea':
            fields.push(_react2.default.createElement(_textarea2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'hidden':
            fields.push(_react2.default.createElement(_hidden2.default, { key: index, attributes: field, ref: function ref(el) {
                _this2.state.fields[field.name] = el;
              } }));
            break;
          case 'info':
            fields.push(_react2.default.createElement(_info2.default, { key: index, attributes: field }));
            break;
        }
      });
      return _react2.default.createElement(
        'form',
        { name: this.props.name, method: 'POST', action: '', onSubmit: this.submit },
        this.state.errors.length > 0 && _react2.default.createElement(
          'p',
          null,
          this.props.errormsg
        ),
        fields,
        _react2.default.createElement(
          'fieldset',
          null,
          _react2.default.createElement('input', { type: 'submit', value: this.props.submitbtn })
        )
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;


Form.defaultProps = {
  realtimeval: false,
  value: '',
  showlabels: true
};