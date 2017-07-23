const runTest = (test, ...vars) => {
  switch(test) {
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
}

const equals = ([a,b]) => {
  if(a === b) {
    return true;
  } else {
    return false;
  }
}

const required = ([test]) => {
  if(test !== "" && test !== false) {
    return true;
  } else {
    return false;
  }
}

const min = ([arr, length]) => {
  if(arr.length >= length) {
    return true;
  } else {
    return false;
  }
}

export default {
  runTest: runTest
}
