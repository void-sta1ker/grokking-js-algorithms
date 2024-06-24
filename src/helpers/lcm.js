import gcd from "./gcd";

// solve by using math
export default function lcmMath(a, b) {
  return (a * b) / gcd(a, b);
}
