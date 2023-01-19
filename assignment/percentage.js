

// let total_classes = prompt('enter total classes  :')
// let attended_classes = prompt('enter attended classes  :')
// // let medical_cause = prompt('enter is there any medical cause or not say 'Y' or 'N' :)



let total_classes = 400
let attended_classes = 250
let medical_cause = 'Y'

let boolean = 'True'
// let medical_cause = 'N'

//calculating percentage
let check = (attended_classes / total_classes) * 100
// using if condition to check whether students are allowd or not
if (check >= 75) {
    console.log(boolean)
}
else if (check >= 60 && medical_cause == 'Y') {
    console.log(boolean)
}
else {
    boolean = 'False'
    console.log(boolean)
}