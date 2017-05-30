const runTest = (test, ...vars) => {
  switch(test) {
    case 'equals':
      return equals(vars);
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

export default {
  runTest: runTest
}
