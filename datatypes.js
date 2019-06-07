function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
  
    var int = 12;
    var double = 4.0;
    var string = "is the best place to learn and practice coding!";

    int = parseInt(readLine());
    double = parseFloat(readLine());
    string = readLine();

    console.log(i + int);

    console.log((d + double).toFixed(1));
  
    console.log(s + string);
}