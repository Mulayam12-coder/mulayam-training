
let even=[2,4,6,8];

let odd=[1,3,5,7];


let list1=[0,even,odd]; // a list containing -->[  0, [2,4,6,8], [1,3,5,7] ]
console.log(list1);

//create a new array with 0, all values from even, and all values from odd
let list2=[0, ...even, ...odd]; // a list containing --> [0,2,4,6,8,1,3,5,7]
console.log(list2);