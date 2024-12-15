  

// let age =20 ;
// document.write(age)
// console.log(age)

// let userName="aliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
// let boolean = true ;
// let num1 = 2.2;
// console.log(userName ,boolean, num1)
// let num2 =2+3;
// let num3 =2-3;
// let num4 =2*3;
// let num5 =2/3;
// let num6 =2**3;
// let num7 =90;
// num7++;
// let num9 =80;
// num9 --;
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)
// console.log(num6)
// console.log(num6)
// console.log(num9)
// alert(num2)
// let n= parseInt (prompt("enter n1"))
// let n1= parseInt( prompt("enter n2"))
// let num10 =n+n1;
// console.log(num10)


//ass
// Prompt the user for inputs
// let name = prompt("Enter your Name:");
// let address = prompt("Enter your Address:");
// let phoneNumber = prompt("Enter your Phone Number:");
// let birthYear = prompt("Enter your Birth Year:");

// // Calculate the age
// let Year = new Date().getFullYear();
// let Age = Year - birthYear;

// // Display the results
// console.log("Name =", name);
// console.log("Address =", address);
// console.log("Phone Number =", phoneNumber);
// console.log("Age =", Age);

// comparison 
let n1=10;
let n2=10;
console.log(n1==n2)
console.log(n1!=n2)
console.log(n1===n2)
console.log(n1!==n2)
console.log(n1<n2)
console.log(n1>n2)
console.log(n1<=n2)
console.log(n1>=n2)

let n3 = true && true
let n4 = true || true
let n5 = !true
console.log(n3)
console.log(n4)
console.log(n5)
 
var agE = 60;
if(agE <= 20){
    console.log("you youth")
}
else{
    console.log("you adult")
}

// var asad =parseInt(prompt("asad age"));
// var ahmed = parseInt(prompt("ahmed age"));
// if(asad > ahmed){
//     console.log("asad wuu ka wenyahay ahmed")
// }
// else if(ahmed==asad){
//     console.log("wey sila egyihiin")
// }
// else{
//     console.log("ahmed kama weyna asad")
// }

//  var grade =parseInt(prompt("enter grade"));
//  if(grade >= 90 && grade <100){
//     alert("grade A")
//  }
//  else if(grade >= 80 && grade <90){
//      alert("grade B")
//  }
//  else if(grade >= 70 && grade <80){
//     alert("grade C")
//  }
//  else if(grade >= 60 && grade <100){
//     alert("grade D")
//  }
// else{
//     alert("you fail")
// }

// var score = parseInt(prompt("Enter your score:"));
// var maxScore = parseInt(prompt("Enter the maximum score:"));

// // Check if the inputs are valid
// if (score > maxScore || score < 0 || maxScore <= 0 || isNaN(score) || isNaN(maxScore)) {
//     alert("Please enter valid scores.");
// } else {
//     // Calculate percentage
//     var percentage = (score / maxScore) * 100;

//     // Determine the grade
//     if (percentage >= 90) {
//         alert("Grade A");
//     } else if (percentage >= 80) {
//         alert("Grade B");
//     } else if (percentage >= 70) {
//         alert("Grade C");
//     } else if (percentage >= 60) {
//         alert("Grade D");
//     } else {
//         alert("You Fail");
//     }
// }

// let price = prompt("price");
// if(price <= 1 ){
//    alert("no precentage")
// }
//  if( price <= 10){
//     alert(" the precentage is 10%")
//  }
//  else if( price <= 20){
//     alert(" the precentage is 20%")
//  }
 
// if( price <= 30){
//    alert(" the precentage is 30%")
// }

// else{
//    alert("no precentage")
// }

// var paidMoney = parseFloat(prompt("Enter the amount you paid:"));
// var marketPrice = parseFloat(prompt("Enter the market price:"));

// if (isNaN(paidMoney) || isNaN(marketPrice) || paidMoney < 0 || marketPrice <= 0 || paidMoney > marketPrice) {
//     alert("Please enter valid amounts.");
// } else {
//     // Calculate percentage of payment
//     var percentagePaid = (paidMoney / marketPrice) * 100;

//     // Payment status evaluation
//     if (percentagePaid === 100) {
//         alert("Fully Paid (You paid 100% of the market price)");
//     } else if (percentagePaid >= 75) {
//         alert("Almost Paid (You paid " + percentagePaid.toFixed(2) + "% of the market price)");
//     } else if (percentagePaid >= 50) {
//         alert("Partially Paid (You paid " + percentagePaid.toFixed(2) + "% of the market price)");
//     } else if (percentagePaid > 0) {
//         alert("Minimal Payment (You paid " + percentagePaid.toFixed(2) + "% of the market price)");
//     } else {
//         alert("No Payment Made");
//     }
// }

// let fruits = prompt("Enter Ur fav fruit")
// switch(fruits){
//     case "mango":
//         console.log("mango price : 1$ ")
//            break
//     case "apple":
//         console.log("apple price : 2$ ")
//             break
//      case "banana":
//          console.log("banana price : 1$ ")
//              break
//     case "tomato":
//          console.log("tomato price : 1$ ")
//     default:
//         console.log("out of store "+ fruits )

// }

// for(let num = 0 ; num <=30 ; num++ ){
//     if(num % 2 == 0)
//     console.log(num)
// }

// let g =0 ;
// while(g <= 30){
//     if(g % 2 != 0)
//     console.log(g)
//     g++
// }

// let val = 10 ;
// do{
//   console.log(val)
//   val --
// }while(val >=0 );

let arr = [1,7,9,"kly","hiven"]
for( let i=0; i<arr.length; i++){
    console.log(arr[i])
}
// console.log(arr)