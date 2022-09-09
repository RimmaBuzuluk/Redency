function loadGrain(levels) {
  let left = 0; //вказівник зліва
  let right = levels.length - 1; //вказвик зправа
  let resalt = 0;
  let max_r = 0;
  let max_l = 0;

  let count = 0; //кількість ітерацій

  //якщо довжина levels дорівнює значенню менше ніж 3, кількість зерна в баржі дорівнюватиме 0
  if (levels.length == 2 || levels.length == 0 || levels.length == 1) {
    return 0;
  } else {
    while (left < right) {
      //
      count++;
      if (levels[left] < levels[right]) {
        if (levels[left] > max_l) {
          max_l = levels[left];
        } else {
          resalt += max_l - levels[left];
        }
        left++;
      } else {
        if (levels[right] > max_r) {
          max_r = levels[right];
        } else {
          resalt += max_r - levels[right];
        }
        right--;
      }
    }
  }
  //console.log(count);
  return resalt;
}

console.log(loadGrain([0, 1, 0, 2, 1, 0, 1, 3]));
// console.log(loadGrain([4, 1, 3]));
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
// console.log(loadGrain([2, 0, 1, 5, 2, 7]));
// console.log(loadGrain([2, 4, 2]));
// console.log(loadGrain([7, 4]));
// console.log(loadGrain([]));
