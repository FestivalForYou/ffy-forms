'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var runTest = function runTest(test) {
  for (var _len = arguments.length, vars = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    vars[_key - 1] = arguments[_key];
  }

  switch (test) {
    case 'equals':
      return equals(vars);
      break;
    case 'required':
      return required(vars);
      break;
    case 'min':
      return min(vars);
      break;
  }
};

var equals = function equals(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  if (a === b) {
    return true;
  } else {
    return false;
  }
};

var required = function required(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 1),
      test = _ref4[0];

  if (test !== "" && test !== false) {
    return true;
  } else {
    return false;
  }
};

var min = function min(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      arr = _ref6[0],
      length = _ref6[1];

  if (arr.length >= length) {
    return true;
  } else {
    return false;
  }
};

exports.default = {
  runTest: runTest
};