/* let val = 47;
let ans = 47;

if(ans!=val){
    console.log("Opps,Wrong Answer.")
}else{
    console.log("Congratulation ! Right Answer.");
} */

// array

/* let arr = {
    marks1: 73,
    marks2: 81,
    marks3: 69,
    marks4: 91,
    marks5: 79,
    marks6: 83,
    marks7: 67
} */

/* let marks =[73,81,69,91,79,83,67];
console.log(marks);
console.log(marks.length);

let str = ["souvik","swastika","ismita","swadhin","soumik","barnita"];

for(let i = 0;i<str.length;i++){
    console.log(str[i]);
}*/

//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

/* let stu = [85,97,44,37,76,60];
let sum = 0;
for(let i = 0;i<stu.length;i++){
    sum +=stu[i];
}
const final= sum/stu.length;
console.log(`Avarage of marks is = ${final}`);*/

/*All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
 */

let val = [250,645,300,900,50];
let sum = 0, final = 0;

for(let i = 0;i<val.length;i++){
    sum = val[i]*0.1;
    val[i] -= sum;
    console.log(val[i]);
}

