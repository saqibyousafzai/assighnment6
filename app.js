//////////Assigment//////////Q3

var num = [1,2,3,4,5,6,7,8,9,10];
for (var i=0; i<num.length; i++ ){
    console.log( num[i]);
}
//....ASSIGNMENT....//

// var text= prompt("enter");

var userInput=+prompt("enter the table num");
var tableLength=+prompt("enter the table length");
// var j=0;

for(var i=1; i<=tableLength; i++){
    document.write(userInput+"x"+i +"="+userInput*i+"<br>")
}

var fruits=["apple","banan","Grapes","mango"];
for(var i=0; i<fruits.length; i++){
    console.log("Element of"+fruits[i]+"","","" +"at"+" "+i);
}

// for(var i=0; i<text.length;i++)

// {

for (var i=0; i<=10; i++ ){
    console.log(i);
}


for (var i=0; i<=10; i=i+2 ){
    console.log(i);
}
//     if (text.slice(i,i+2) === " "){

//         j=j+1;

for (var i=0; i<=10; i=i+3 ){
    console.log(i);
}
// alert("words are "+j );

for (var i=0; i<=10; i++ ){
    console.log(i+"k");
}

var userInput=("enter your choice");
var A=["apple","banan","Grapes","mango"];
for(var i=0; i<fruits.length; i++){
    console.log("Element of"+fruits[i]+"","","" +"at"+" "+i);
}

var a=["cacke","samosa","pestries","cookies","sandwich"];
var userInput=prompt("enter your choice");
for(var i=0; i<a.length; i++){
    if(userInput==a[i]){
        console.log("yes its avalible in 2nd row");
    }
}

var a=[21,23,45,81,31,22];
var userInput=prompt("enter your num");
for(var i=0; i<a.length; i++){
    if(userInput==3){
        console.log("The largest Num is 91");
    }
}

var a=[21,23,45,81,31,22];
var userInput=prompt("enter your num");
for(var i=0; i<a.length; i++){
    if(userInput==0){
        console.log("The smallest Num is 21");
    }
}

for (var i=0; i<=100; i=i+5 ){
    console.log(i);
}
//     }

// }



// var str= "The New Yorker magazine doesn't allow the phrase World War II.  They say it should the Second World War. So let's search the following  sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

//  chapter 17-20
///////////////////

var i = 2;

for(var i=2; i<=10;i++)
{
    console.log("welcom boy");
}
// for(var i=0; i<str.length;i++){

//     if(str.slice(i, i+12) === "World War II"){

for (var i = 0; i <= 12; i++) {
    console.log("increament", i);
}
// str=str.slice(0,i)+ "the second world war"+ str.slice(i+4)


for (var i = 0; i<=4; i++){
    console.log(i);
}

//     }

//     // console.log(str.slice(i, i+12));

// }

// console.log(str);





// var str= "The New Yorker magazine doesn't allow the phrase World War II.  They say it should the Second World War. So let's search the following  sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";



// var indexnumber= str.indexOf("World War II");

// //console.log(indexnumber); //tell about index

// var firsttext = str.slice(0,indexnumber);

// var replacetext="the SSecond woOorld war";

// var remaindertext = str.slice(indexnumber+3);



// console.log(firsttext+replacetext+remaindertext)











// //find short way using replace it

// console.log(str.replace("Yorker" , "united state"));



// console.log(str.replaceAll("Yorker", "united state"));



// console.log(str.replace(/Yorker/g , "united state"));







// // round off



// var num= 34.88



// console.log(Math.round(num));

// console.log(Math.ceil(num));

// console.log(Math.floor(num));



//genreting random numbers

// console.log(Math.random());

// console.log(Math.random()*10);

// var num= Math.random()*10

// console.log(num.toFixed(2));







// to show number data type



// var num1= Number(prompt("enter first num"));

// var num2= Number(prompt("enter first num"));



// add= num1 +num2;



// console.log(add);



// .......................................Assignment .................................................//



// CHAPTER NO 21





// // var allLower = userInput.toLowerCase();

// var x = "YourStringHere"; 

// x = x.toLowerCase();

// console.log(x);

// var y = "YourStringHerer";

// y = y.toUpperCase();

// console.log(y);

// var originalString = "YourStringHere";

// var lowerCaseString = originalString.toLowerCase();

// console.log("lowerCaseString);



// var stringArray = ["Hello, World!"];



// var lowercaseString = stringArray[0].toLowerCase();



// console.log(lowercaseString); 





// var myString = "Hamza"; 

// var upperCaseString = myString.toUpperCase();



// alert(upperCaseString);

// var cityName = "kaRacHi";

// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();



// console.log(capitalizedCityName);







// CHAPTER NO: 22-25

// var sameWords = "captain";

// var slicedWord = sameWords.slice(1, 3); 



// console.log(slicedWord); 



// var myString = "Hello, world!";

// var stringLength = myString.length;



// console.log(stringLength);



// var animal = "elephant";

// var seg = animal.slice(1, 5); 



// console.log(seg);



// var myString = "Hello, world!";

// var stringLength = myString.length; 



// var slicedString = myString.slice(1, -3); 



// console.log(stringLength); 

// console.log(slicedString); 



// var text = "To be or not to be.";

// var indx = text.indexOf("be");

// var indx=3;

// var text = "To be or not to be.";

// var indx = text.lastIndexOf("be");

// var index=16;



// var text = "Let's go for a walk, and then let's go grab some coffee to go.";

// var indx = text.lastIndexOf("go");



// console.log(indx);



// if (yourString.indexOf(indexNum) !== -1) {

//     // Your code here if the segment exists

//   }

//   var myString = "abcde";

// var characterAtIndex2 = myString.charAt(2);



// console.log(characterAtIndex2); // Output: "c"



// var text = "This is a sample text.";

// var cha = text.charAt(3);



// console.log(cha); // Output: "s"



// var str = "Hello, world!";

// var x = str.charAt(str.length - 1);



// console.log(x); // Output: "!"



// var input = "This is a sample input.";

// var cha = input.charAt(3);



// // console.log(cha); // Output: "s"



// if (yourString.charAt(2) === 'yourCharacter') {

//     // Your code here if the 3rd character is the particular character

//   }



// var charArray = [];



// var reply = "no, I don't know. It's a no from me.";



// for (var i = 0; i < reply.length; i++) {

//   charArray.push(reply.charAt(i));

// }



// var revisedReply = charArray.join("");



// revisedReply = revisedReply.replace("no", "yes");



// console.log(revisedReply); 





// var str = "I have 1 apple and 2 oranges.";

// var newStr = str.replace("1", "one");



// console.log(newStr);



// var x = "banana";

// var y = x.replace(/a/g, "z");



// console.log(y); 



// CHAPTER NO: 26

// var roundedNumber = Math.round(yourNumber);

// var yourNumber = 15;

// // console.log(yourNumber);



// var origNum = 5.3; 

// var roundNum = Math.ceil(origNum);

// document.write(roundNum);



// var origNum = 5.7; 

// var roundNum = Math.floor(origNum);

// document.write(roundNum);



// var originalNumber = 5.6; 

// // var roundedNumber = Math.round(originalNumber);

// // document.write(roundedNumber);



// var originalNumber = 0.5; // Replace this with your original number

// var roundedNumber = Math.floor(originalNumber);

// document.write(roundedNumber);





// CHAPTER NO :27





// var randamDecimal = Math.random();

// var randam = Math.floor(randamDecimal *50) +1;

// console.log(randam);





// var randomNumber = Math.random();

// console.log(randomNumber);





// var random = Math.random();



// var outcome = random < 0.5 ? "Heads" : "Tails";



// console.log("The coin landed on: " + outcome);



// var random  = Math.floor(Math.random() *6 )+1;

// console.log("You rolled " +random);







// // CHAPTER NO: 28,29





// var str=143;

// var integer=Number(str);

// console.log(integer);



// var str=3.145214;

// var float = Number(str);

// console.log(float);



// var str = "123";

// var intValue = parseInt(str);



// if (!isNaN(intValue)) {

//   console.log("Conversion to integer successful:", intValue);

// } else {

//   console.log("Conversion to integer failed.");

// }



// var num = 42;

// var str = num.toString(); 

// console.log("str");











// var str=3.14;

// var integer  = parseInt(str);

// console.log(integer);









// Chapter 30





// var num = 3.12512512125;

// var newNum = num.toFixed(4);

// console.log(newNum);





// var num=3.14514212151;

// var newNum = num.toFixed(4).toString();

// console.log(newNum);

// if (num.toFixed(2).toString().length > 4) {

//     // Your code here if the string representation has more than 4 characters

//   }



// var num=3.124178142;

// var neNum = num.toFixed(2).toString();

// alert(neNum);

for (var run=0; run<100; run++){
    console.log("Fassat",run)
}


var counter = 10; 
const numLoops = 3;
for (var i = 0; i < numLoops; i++) {
  console.log("Counter:", counter);
  counter--;
}

var myArray = [1, 2, 3, 4, 5,6,7,8,9,10];
var arrayLength = myArray.length;
console.log("Number of elements in the array:", arrayLength);


var flag = true;


const pets = ["dog", "cat", "fish", "rabbit"]; 
for (let i = 0; i < pets.length; i++) {
  console.log("Pet:", pets[i]);
}

for (let i = 1; i <= 10; i++) {
    if (i === 2) {
      alert("Counter: " + (i - 1));
      break; 
    }
  }


var userNames =[ "Alia", "Amjad", "Aslam", "irfan"];
var firstName = prompt("enter your first name");
var nameFound = false ;
for( var i=0; i < userNames.length; i++){
    if(firstName === userNames[i]){
        nameFound=true ;
       break;
    }
}
if(nameFound){
    alert("welcome" + firstName);
} else{
    alert("pleae enter correct name");
}



    var list =["aslam","akram", "amjad"];
    var userInput=prompt("enter your name");
    var matchFound = false;
 for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
     break;
    }
    }


var firstArr =["a","b","c","d","e","f"];
var secondArr =[1,2,3,4,5,6];
for( var i=0; i<firstArr.length; i++){
    for (var j=0; j<secondArr.length; j++){
        var concatenatedValue = firstArr[i] + secondArr[j];
        console.log(concatenatedValue);
    }
 }