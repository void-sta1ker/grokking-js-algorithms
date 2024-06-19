/**
 * Create an array of numbers
 * @param {number} n total number of elements
 * @param {number} start starting index
 * @param {number} step step size
 * @returns {number[]} array of numbers
 */
export default function range(n, start = 0, step = 1) {
  return Array.from({ length: n }, (_, i) => start + i * step);
}
