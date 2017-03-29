// Given an array of n integers, print each element in reverse order as a single line of space-separated integers.

// input: first line contains an integer, n. Second line contains n space-separated integers describing the array.

// Sample input:
// 4
// 1 4 3 2

// Sample output
// 2 3 4 1

function main (input) {
  input = input.split('\n');
  var [n, ...arr] = input;
  var output = arr[0].split(' ').reverse().join(' ');
  console.log(output);
}

main(`4
1 4 3 2`);