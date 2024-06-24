/**
 * Binary search. Best case O(log(n)). Average case O(log(n)). Worst case O(n). Space O(1) (iterative) or O(log n) (recursive)
 * @description Divides the search interval in half repeatedly until the target value is found or the interval is empty. Requires a sorted array.
 * @param {number[]} arr array of values
 * @param {number} target target value
 * @returns {number} index position of target or `-1` if not found
 */
export function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export function binarySearchRecursive(
  arr,
  target,
  left = 0,
  right = arr.length - 1
) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);
  const guess = arr[mid];

  if (guess === target) {
    return mid;
  }

  if (guess < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }

  return binarySearchRecursive(arr, target, left, mid - 1);
}

/*
Exercises:
1.1 log(128) = 7
1.2 log(256) = 8
*/
