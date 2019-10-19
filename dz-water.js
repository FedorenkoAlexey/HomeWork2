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
console.log(rightArr);
// arr[maxIndex] = arr[6]
// maxVal = 7
//var maxRightVal = 0;
var maxRightIndex = 0;
var sWaterRight = 0;
 // общая площадь камней под водой
//var firstRightVal = rightArr[0];
var firstRightInd = rightArr.length[0];	


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
	console.log('1я вершина', firstRightVal );
	console.log('2я вершина', maxRightVal );
let stoneRight = arr.slice(1, maxRightIndex); // - (массив) кол-во секций (длинна под водой) между вершинами
	console.log('все что под водой', stoneRight);

for (let i = 0; i < stoneRight.length; i++) {
  sStoneRight += stoneRight[i];
//	console.log(sStoneRight, stoneRight[i]);
}
	console.log("Сумма камней под водой", sStoneRight);
	if (stoneRight.length >0) {
    sWaterRight += maxRightVal * stoneRight.length - sStoneRight; // Площадь воды = высота блока * кол-во блоков(длинна под водой) - площадь камней в воде
	console.log('---всего воды', sWaterRight);
	console.log("Длинна под водой" ,stoneRight.length);
	let newArr = arr.slice(maxRightIndex, arr.length);
		
	console.log('навый массив',newArr);
	 	
	right(newArr, maxRightIndex);
	return sWaterRight;

	}
//sWaterRight += sWaterRight;
}
right(rightArr, maxIndex);
	console.log('+++++всего воды', sWaterRight);




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