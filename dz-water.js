// let arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
// let arr = [7, 0, 2, 8, 3, 4, 7, 2, 4, 8, 0, 11, 0, 0, 0, 3];
let arr = [0, 0, 0, 3, 4, 5, 1, 2, 9, 0, 0, 0, 5, 5, 0, 0];
let maxVal = arr[0];
let maxIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxIndex = i;
    maxVal = arr[i];
  }
}
let rightArr = arr.slice(maxIndex, maxRightIndex);
let leftArr = arr.slice(0, maxIndex + 1);

var maxRightIndex = 0;
var maxLeftIndex = 0;
var sWaterRight = 0;
var sWaterLeft = 0;
var firstRightInd = rightArr.length[0];
var firstLeftInd = leftArr.length[0];

function right(arr, maxIndex) {
  console.log(arr);
  let firstRightVal = arr[0];
  let maxRightVal = 0;
  let sStoneRight = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxRightVal) {
      maxRightIndex = i;
      maxRightVal = arr[i];
    }
  }

  let stoneRight = arr.slice(1, maxRightIndex);

  for (let i = 0; i < stoneRight.length; i++) {
    sStoneRight += stoneRight[i];
  }
  if (stoneRight.length > 0) {
    sWaterRight += maxRightVal * stoneRight.length - sStoneRight;
    console.log("воды справа", sWaterRight);
    let newArr = arr.slice(maxRightIndex, arr.length);
    right(newArr, maxRightIndex);
    return sWaterRight;
  }
}
right(rightArr, maxIndex);

// --------------------- Левая часть--------------------------//

function left(arr) {
  console.log(arr);
  let firstLeftVal = arr[0];
  let maxLeftVal = 0;
  let sStoneLeft = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxLeftVal) {
      maxLeftIndex = i;
      maxLeftVal = arr[i];
    }
  }
  let stoneLeft = arr.slice(maxLeftIndex + 1, arr.length - 1); // - (массив) кол-во секций (длинна под водой) между вершинами
  console.log(stoneLeft);

  for (let i = 0; i < stoneLeft.length; i++) {
    sStoneLeft += stoneLeft[i];
  }
  if (stoneLeft.length > 0) {
    sWaterLeft += maxLeftVal * stoneLeft.length - sStoneLeft; // Площадь воды = высота блока * кол-во блоков(длинна под водой) - площадь камней в воде
    console.log("воды слева", sWaterLeft);
    let newArr = arr.slice(0, maxLeftIndex + 1);
    left(newArr, maxLeftIndex);
    return sWaterLeft;
  } else return;
  // sWaterLeft += sWaterLeft;
}
left(leftArr);

console.log("Всего воды =", sWaterLeft + sWaterRight);
