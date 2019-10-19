let arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
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

console.log(leftArr);
// arr[maxIndex] = arr[6]
// maxVal = 7
//var maxRightVal = 0;
var maxRightIndex = 0;
var maxLeftIndex = 0;
var sWaterRight = 0;
var sWaterLeft = 0;
// общая площадь камней под водой
//var firstRightVal = rightArr[0];
var firstRightInd = rightArr.length[0];
var firstLeftInd = leftArr.length[0];

function right(arr, maxIndex) {
  console.log(arr);
  let firstRightVal = arr[0];
  let maxRightVal = 0;
  let sStoneRight = 0;

  //	console.log(maxVal);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxRightVal) {
      maxRightIndex = i;
      maxRightVal = arr[i];
    }
  }
  console.log("1я вершина", firstRightVal);
  console.log("2я вершина", maxRightVal);
  let stoneRight = arr.slice(1, maxRightIndex); // - (массив) кол-во секций (длинна под водой) между вершинами
  console.log("все что под водой", stoneRight);

  for (let i = 0; i < stoneRight.length; i++) {
    sStoneRight += stoneRight[i];
    //	console.log(sStoneRight, stoneRight[i]);
  }
  console.log("Сумма камней под водой", sStoneRight);
  if (stoneRight.length > 0) {
    sWaterRight += maxRightVal * stoneRight.length - sStoneRight; // Площадь воды = высота блока * кол-во блоков(длинна под водой) - площадь камней в воде
    console.log("---всего воды", sWaterRight);
    console.log("Длинна под водой", stoneRight.length);
    let newArr = arr.slice(maxRightIndex, arr.length);

    console.log("навый массив", newArr);

    right(newArr, maxRightIndex);
    return sWaterRight;
  }
  //sWaterRight += sWaterRight;
}
right(rightArr, maxIndex);

console.log("+++++всего воды", sWaterRight);
console.log("++++++++++++++++++++++++++++++++");

// --------------------- Левая часть--------------------------//

function left(arr) {
  console.log(arr);
  let firstLeftVal = arr[0];
  let maxLeftVal = 0;
  let sStoneLeft = 0;

  //	console.log(maxVal);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxLeftVal) {
      maxLeftIndex = i;
      maxLeftVal = arr[i];
    }
  }
  console.log("длинна", arr.length - 1);
  console.log("1я вершина", maxLeftIndex);
  console.log("2я вершина", maxLeftVal);
  let stoneLeft = arr.slice(maxLeftIndex + 1, arr.length - 1); // - (массив) кол-во секций (длинна под водой) между вершинами
  console.log("все что под водой", stoneLeft);

  for (let i = 0; i < stoneLeft.length; i++) {
    sStoneLeft += stoneLeft[i];
    //	console.log(sStoneRight, stoneRight[i]);
  }
  console.log("Сумма камней под водой", sStoneLeft);
  if (stoneLeft.length > 0) {
    sWaterLeft += maxLeftVal * stoneLeft.length - sStoneLeft; // Площадь воды = высота блока * кол-во блоков(длинна под водой) - площадь камней в воде
    console.log("---всего воды", sWaterLeft);
    console.log("Длинна под водой", stoneLeft.length);
    let newArr = arr.slice(0, maxLeftIndex + 1);

    console.log("навый массив", newArr);

    left(newArr, maxLeftIndex);
    return sWaterLeft;
  }

  sWaterLeft += sWaterLeft;
}
left(leftArr);

console.log("+++++всего воды", sWaterLeft);
