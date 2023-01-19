// let n = prompt("enter a number")
let n = 1234
// take empty string to add numbers
let str = ""
//checking the number greater than or equality 0 or not
if (n >= 0) {
    //loop to reversing the number
    while (n > 0) {
        let temp = n % 10
        str = str + temp
        n = Math.floor(n / 10)
    }
}
// if not then it prints message
else {
    console.log("enter the number between 0-n")
}
// printing the final output
console.log(str)
