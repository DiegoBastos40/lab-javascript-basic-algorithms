// Iteration 1: Names and Input
let hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Diego" ;

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
  console.log(`The  driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}

else if(hacker1.length < hacker2.length){
  console.log(`It seems  that the navigator ${hacker2} has the longest name, it has ${hacker2.length}characters`);
}
else {

  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops



let lettersHacker = "";

for (let i = hacker2.length - 1; i >=0; i--) {
  
  lettersHacker += hacker2[i] ;

}

console.log(lettersHacker.toUpperCase());
 

let uppercasedName = ""

for (let i = 0; i < hacker1.length; i++) {
    let uppercased = hacker1.toUpperCase();
    uppercasedName +=uppercased[i] +" ";
}

console.log (uppercasedName);


 
 if(hacker1.localeCompare(hacker2)) {
   console.log(`The driver's name ${hacker1} goes first`);
 }
 else if(hacker2.localeCompare(hacker1)) {
   console.log(`Yo, the navigator ${hacker2} goes first definitely`);
 }
 else{
   console.log(`What?! You both have the same name?${hacker2}`);
 }
   
 


