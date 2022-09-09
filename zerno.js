function loadGrain(levels) {
  let left = 0; //pointer left
  let right = levels.length - 1; //pointer right
  let result = 0;
  let max_right = 0;
  let max_left = 0;

  let count = 0; //number of iterations

  //if the length of levels is less than 3, the amount of grain in the barge will be 0
  if (!Array.isArray(levels) || levels.length < 3) {
    return 0;
  }

  while (left < right) {
    count++;
    if (levels[left] < levels[right]) {
      if (levels[left] > max_left) {
        max_left = levels[left];
      } else {
        result += max_left - levels[left];
      }
      left++;
    } else {
      if (levels[right] > max_right) {
        max_right = levels[right];
      } else {
        result += max_right - levels[right];
      }
      right--;
    }
  }

  //console.log(count);
  return result;
}

console.log(loadGrain([4, 1, 3]));
console.log(loadGrain(3));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));
