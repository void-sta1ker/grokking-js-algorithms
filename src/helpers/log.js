/**
 * Calculate log of a number in worst case scenario
 * @param {number} n number to calculate
 * @param {number} base Defaults to 2
 * @returns {number} log of a number
 */
export default function log(n, base = 2) {
  const result = Math.log(n) / Math.log(base);

  return Math.ceil(result);
}
