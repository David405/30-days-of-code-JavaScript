function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    var int = 12;
    var double = 4.0;
    var string = "is the best place to learn and practice coding!";

    int = parseInt(readLine());
    double = parseFloat(readLine());
    string = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + int);
    // Print the sum of the double variables on a new line.
    console.log((d + double).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + string);
}