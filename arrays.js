function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    var arr1 = [];

    for (var i = arr.length - 1; i >= 0; i--){
        arr1.push(arr[i]);
    }
    console.log(arr1.join(' '));
}
