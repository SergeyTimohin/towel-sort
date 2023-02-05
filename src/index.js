
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    for (let i = 1; i < matrix.length; i = i + 2) {
      matrix[i] = matrix[i].reverse();
    }
    let towelResult = [];
    matrix.forEach((item, i) => {
      towelResult.push(...item);
    });
    return towelResult;
  }  
};
