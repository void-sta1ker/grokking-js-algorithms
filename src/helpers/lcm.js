const gcd = require("./gcd");

// solve by using math
function lcmMath(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = lcmMath;
