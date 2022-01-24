
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let finalMatrix = [];
        for (let i = 0; i <matrix.length; i ++) {
            if(i%2 === 0) {
                finalMatrix.push(matrix[i]);
            }
            else {
                let reversedMatrix = matrix[i].reverse();
                finalMatrix.push(reversedMatrix);
            }
        }
        return matrix.flat();
}
