/**
 *
 * @param arr
 * @returns
 * @description This function have complexity is O(n)
 */
function sum_1(arr: number[]): number {
  let result = 0;
  for (let i = 0; i++; i < arr.length) {
    result += arr[i];
  }
  return result;
}

/**
 *
 * @param arr
 * @returns
 * @description This function have complexity is O(n)
 */
function sum_2(arr: number[]): number {
  return arr.reduce((a, b) => a + b);
}

/**
 *
 * @param arr
 * @returns
 * @description This function have complexity is O(n)
 */
function sum_3(arr: number[]): number {
  let result = 0;
  arr.forEach((num) => {
    result += num;
  });
  return result;
}
