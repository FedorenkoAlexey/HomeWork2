var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var maxVal = arr[0];
var maxIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxIndex = i;
    maxVal = arr[i];
  }
}
// arr[maxIndex] = arr[6]
// maxVal = 7
var maxRightVal = 0;
var maxRightIndex = 0;
var sWaterRight = 0;
var sStoneRight = 0; // общая площадь камней под водой
for (let i = maxIndex + 1; i < arr.length; i++) {
  //	console.log(i);
  if (arr[i] > maxRightVal) {
    maxRightIndex = i;
    maxRightVal = arr[i];
  }
}
var stoneRight = arr.slice(maxIndex + 1, maxRightIndex); // - (массив) кол-во секций (длинна под водой) между вершинами

for (let i = 0; i < stoneRight.length; i++) {
  sStoneRight += stoneRight[i];
}
sWaterRight = maxRightVal * stoneRight.length - sStoneRight; // Площадь воды = высота блока * кол-во блоков(длинна под водой) - площадь камней в воде
console.log(sWaterRight);
// --------------------- Левая часть--------------------------//

var maxLeftVal = 0;
var maxLeftIndex = 0;
var sWaterLeft = 0;
var sStoneLeft = 0; // общая площадь камней под водой
for (let i = maxIndex - 1; i >= 0; i--) {
  if (arr[i] > maxLeftVal) {
    maxLeftIndex = i;
    maxLeftVal = arr[i];
  }
}
var stoneLeft = arr.slice(maxLeftIndex + 1, maxIndex); // - (массив) кол-во блоков под водой между вершинами

for (let i = 0; i < stoneLeft.length; i++) {
  sStoneLeft += stoneLeft[i];
}
sWaterLeft = maxLeftVal * stoneLeft.length - sStoneLeft;
console.log(sWaterLeft);
