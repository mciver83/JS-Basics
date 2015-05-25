//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  var callJake = callFriend();

  callJake('435-215-9248');



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  var makeCounter = function(){
      var number = 1;
      return function(){
          return number++;
      }
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  var someFunction = function(anotherFunction){
    var count = 0;
    var newFunction = function(){
      if (count < 1) {
        count++;
        return anotherFunction();
      } else {
        return 'you have already invoked the function';
      }
    }
    return newFunction; 
  }



//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. 
  After it's been invoked 'N' number of times, return 'STOP'.
*/

var fnCounter = function(anonymousFunction, N){
  var count = 0;
  return function(){
    if (count < N) {
      count++;
      return anonymousFunction();
    } else {
      return 'STOP'
    }
  }
}

//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect 
  to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number
   of milliseconds.

    //I would expect the function to log the numbers 1 - 5 1 second apart


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //My answer was wrong


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/


  var counter = function(){
    for (i=1; i<=5; i++){
      (function(x){setTimeout(function time(){
        console.log(x);
      }, x*1000);
      })(i)
    }
  }



//Next Problem

/*
var someFunction = function(num){
  return function(){
    return num;
  }
}

var funcArray = [someFunction(0), someFunction(1), someFunction(2), someFunction(3), someFunction(4), someFunction(5)];
*/

var funcArray = [];

for (var i = 0; i < 6; i++){
  (function(x){
    funcArray.push(function(){
    return x;
    })
  })(i);
}

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


