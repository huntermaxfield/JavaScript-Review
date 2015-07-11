var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
var callJake = callFriend();
console.log(callJake('4352159248'));


/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.


Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

function one(function two(){ }, num) {
  counter = 0;
  if(counter < num) {
    //something
  } else {
    console.log('stahhhhp');
  }
}

/*
var executed = false;

return function three() {
  if(!excuted) {
    two();
    executed = true;
  }

}
*/
