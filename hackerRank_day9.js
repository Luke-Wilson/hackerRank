function solution(input) {
  var factorial = function(n) {
    return n === 1 ? 1 : n * factorial(n-1);
  };
  return factorial(input);
}

console.log(solution(4));