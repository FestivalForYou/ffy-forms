'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validate = require('../validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this.updateField = function (e) {
      _this.state.value = e.target.value;
      if (_this.props.realtimeval) {
        _this.validateField();
      }
      _this.forceUpdate();
    };

    _this.validateField = function () {
      if (_this.props.attributes.required) {
        var valid = true;
        _this.state.valid = _validate2.default.runTest('required', _this.state.value);
      }
      if (_this.state.valid) {
        if (_this.props.attributes.validation) {
          var _valid = true;
          var validations = _this.props.attributes.validation;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Object.keys(validations)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var key = _step.value;

              switch (key) {
                case 'equals':
                  var _test = validations.equals.var;
                  if (validations.equals.type == 'field') {
                    _test = _this.props.getFieldValue(validations.equals.var);
                  }
                  break;
              }
              _this.state.valid = _validate2.default.runTest(key, _this.state.value, test);
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
        }
      }
      return _this.state.valid;
    };

    _this.getValue = function (validate) {
      if (validate) {
        var valid = _this.validateField();
        if (!valid) {
          return _this.state.value;
        }
      } else {
        return _this.state.value;
      }
    };

    _this.clear = function () {
      _this.setState({
        value: ''
      });
    };

    _this.state = {
      value: _this.props.attributes.value ? _this.props.attributes.value : '',
      valid: true,
      showvalid: _this.props.realtimeval
    };
    return _this;
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var classname = this.props.attributes.classname ? this.props.attributes.classname : "";
      if (!this.state.valid) {
        classname += " error";
      }
      return _react2.default.createElement('fieldset', { className: classname });
    }
  }]);

  return Field;
}(_react2.default.Component);

exports.default = Field;


Field.defaultProps = {
  realtimeval: false,
  value: ''
};