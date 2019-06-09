function processData(input) {
    let odd = '';
    let even = '';

    var array = input.split('\n');
    var length = parseInt(array[0]);
    var string = array.slice(1);

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < string[i].length; j++) {
            if (j % 2) {
                even += string[i][j];
            } else {
                odd += string[i][j];
            }
        }

        console.log(odd + ' ' + even);
        odd = '';
        even = '';
    }
} 