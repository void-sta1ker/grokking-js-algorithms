/**
 * Max number in an array. Best case O(1). Average case O(n). Worst case O(n). Space O(1).
 * @description Returns the maximum number. If the array is empty, returns `undefined`.
 * @param {Array} arr array of numbers
 * @returns {number} maximum number
 */
export default function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const [first, ...rest] = arr;

  const maxValue = max(rest);

  if (first > maxValue) {
    return first;
  }

  return maxValue;
}

/**
 * Max number in an array. Best case O(1). Average case O(n). Worst case O(n). Space O(1).
 * @param {Array} arr array of numbers. If the array is empty, returns `undefined`.
 * @returns {number} maximum number
 */
export function max2(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  const subMax = max(arr.slice(1));

  return arr[0] > subMax ? arr[0] : subMax;
}
