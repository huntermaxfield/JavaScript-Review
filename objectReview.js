//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  //Your code here

var favoriteThings = {
    band: 'blink 182',
    food: 'sushi',
    person: 'sierra',
    book: 'freakonomics',
    movie: 'that one movie',
    holiday: 'christmas'
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here

favoriteThings.car = 'saab';
favoriteThings.brand = 'new balance';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here

favoriteThings.food = 'Lettuce';

//Now, alert your favorite person, then alert your favorite book.

  //Your code here

console.log(favoriteThings.person);
console.log(favoriteThings.book);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here

for(key in user) {
    if(!user[key]) {
        delete user[key];
    }
}


//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here

user.name = 'hunter maxfield';
user.pwHash = 'i dunno';
user.username = 'hmaxfield';

//Now console.log your object and make sure it looks right.

  //Your code here

console.log(user);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here

methodCollection.alertHello = function() {
    console.log('hello');
}

methodCollection.logHello = function() {
    console.log('hello');
}
//Now call your alertHello and logHello methods. 

  //Your code here

methodCollection.alertHello();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(str) {
    var counter = 0;
    vowels = ['a','e','i','o','u'];
    newObject = {

    };
    for(var i = 0; i < vowels.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if(str[j] === vowels[i]) {
                counter++;
            }
        }
        console.log(vowels[i], counter)
        newObject[vowels[i]] = counter;
        counter = 0;
    }
    return newObject;
}

voweler("This is a test");
