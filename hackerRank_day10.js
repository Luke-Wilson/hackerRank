function main(n) {
  var maxRun = 0;
  var bin = n.toString(2);

  bin.split('').reduce((acc, cur) => {
    if (cur === '1') {
      maxRun = Math.max(maxRun, acc+1);
      return acc + 1;
    }
    return 0;
  }, 0);

  return maxRun;
}


console.log(main(157));