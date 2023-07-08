/*  SWITCH CASE
let y = 10;
let x = ++y;
let z =x;
switch (z) {
    case 11 : 
        console.log("True");
        break;
    case 10 : 
        console.log("False");
        break;
}
*/
// ARRAY
/*
let arr = ["HAMED", "SAYED" , ["MAHMOUD" , "ALI"]];
console.log(Array.isArray(arr));
console.log(arr[0]);
console.log(arr[1][2]);
console.log(arr[2][1]);
console.log(arr[2][0][3]);
console.log(arr.length);
*/

//linear search in array
function linerSearch(arr, item) {
    let newitem = item ;
    for (var i=0;i<arr.length;i++) {
        if (arr[i] === newitem) {
            return newitem ;
        }
        else {
            return newitem;
        }
    }
}

let a = ["hamed", "abdelrahman" , "mahmoud" , "hamza"];
let nam = "hamed";


linerSearch(a,nam);