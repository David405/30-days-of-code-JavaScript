
var arr = [];
for(i = 0; i < 6; i++){
   arr[i] = readLine().split(' ');
   arr[i] = arr[_i].map(Number);
}
var highestSum = -63;
var tempSum = 0;
for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {           
        tempSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        if(tempSum > highestSum) {
            highestSum = tempSum;           
        }
    }
}

console.log(highestSum);
