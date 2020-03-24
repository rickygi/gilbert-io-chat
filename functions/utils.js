function is(type, obj) {
  let cls = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && cls === type;
}

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

module.exports = { is, randomIndex };
