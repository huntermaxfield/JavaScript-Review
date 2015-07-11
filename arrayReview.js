var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

var last = function(arr) {
    console.log(arr[arr.length - 1]);
};

last(threeItems);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

var oddRemv = function(evnArr) {
    for(var i = evnArr.length - 1; i >= 0; i--) {
        if(evnArr[i] % 2 != 0 || evnArr[i] === 3) {
            evnArr.splice(i, 1);
        }
    }
    console.log(evnArr);
};

oddRemv(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

var randChecker = function(rand, arr) {
    console.log(rand);
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] === rand) {
            return true;
        }
        }
        return false;
    };


console.log(randChecker(getRandomArbitrary(), randomArray));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

second = first.slice(0);
second.push(6, 7);

console.log(first) //[1,2,3,4,5];
console.log(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

var longest = function(sen) {
    sen = sen.split(' ');
    var long = sen[0];
    for (var i = 0; i < sen.length; i++) {
        //console.log(sen[i].length);
        if(sen[i].length > long.length) {
            long = sen[i];
        }
    }
    return long;
}

console.log(longest(sentence));
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

function capitalize(sent) {
    return sent.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

console.log(capitalize(myPoem));
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdd = "aaa bbb eee uuu";
var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(str) {
    vowels = ['a','e','i','o','u'];
    counter = 0;
    for(var i = 0; i < vowels.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if(str[j] === vowels[i]) {
                counter++;
            }
        }
        }
        console.log(counter);
}

vowelCounter(theOdyssey);