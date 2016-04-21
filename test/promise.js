module.exports.resolve = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('call');
      resolve();
    }, 1000);
  });
};

module.exports.dntResolve = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('not call');
    }, 1000);
  });
};
