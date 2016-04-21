module.exports.callCb = function(cb) {
  setTimeout(() => {
    console.log('call');
    cb();
  }, 1000);
};

module.exports.dntCallCb = function(cb) {
  setTimeout(() => {
    console.log('not call');
  }, 1000);
};

module.exports.callCbTwice = function(cb) {
  setTimeout(() => {
    console.log('call');
    cb();
    cb();
  }, 1000);
};
