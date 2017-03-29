// //given a 6 x 6 2D array (A)

// [
// [1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0] ]

// // We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation


// // a b c
// //   d
// // e f g

// //There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

// // Task: Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

// // Sample input:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// // Sample output: 19

// // A contains the following hourglasses:
// 1 1 1   1 1 0   1 0 0   0 0 0
//   1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0

// 0 1 0   1 0 0   0 0 0   0 0 0
//   1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0

// 1 1 1   1 1 0   1 0 0   0 0 0
//   0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0

// 0 0 2   0 2 4   2 4 4   4 4 0
//   0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0

//The hourglass with the maximum sum (19) is:
// 2 4 4
//   2
// 1 2 4

function main(arr) {
  function hourglassSum (x,y) {
    var topRow = arr[x][y] + arr[x][y+1] + arr[x][y+2];
    var middleRow = arr[x+1][y+1];
    var bottomRow = arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2];
    return topRow + middleRow + bottomRow;
  }
  var max = Number.NEGATIVE_INFINITY;
  for (var x = 0; x < arr.length -2; x++) {
    var row = arr[x];
    for (var y = 0; y < row.length - 2; y++) {
      max = Math.max(max, hourglassSum(x,y));
    }
  }
  return max;
}

var myArr = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

console.log(main(myArr));








