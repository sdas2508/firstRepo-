 /* let val = "Souvik Das";
 let sum = 0;

 for(let i of val){
    sum += 1;
 }
 console.log("Count Of Number Element of String = ", sum); */

  /* let str = "SouvikDas";
 console.log(str.length); */

 /* const obj ={
    name: "Souvik Das",
    age: 26,
 }
 let output = `Myself ${obj.name}, My age is ${obj.age}`;
 console.log(output); */

 // string method

/* let val= "Souvik\tDas";
 console.log(val.length); */

 // upper case,lower case, trim case

 /* let val = "Souvik Das";
 console.log(val.toUpperCase(val));

 let val2 = "Swastika Ghosh";
 console.log(val2.toLowerCase(val2));

 let val3 = "     souvik Das";
 console.log(val3.trim()); */

// Prompt the user to enter their full name. Generate a username for them based on the input.
/* Start username with @, followed by their full name and ending with the fullname length.
Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.

eg: user name = “shradhakhapra”  
username should be “@shradhakhapra13”*/

let fullName = "SouvikDas";
let trimName = fullName.trim();
let final = "@"+trimName+trimName.length;
console.log(final);
