// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){  
    var largest = input[0];

    input.forEach(function(value) {
      if (value > largest) {
        largest = value;
      }
    });
    
    return largest;
  },
  
  reversed: function(input){  
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  },

  loudSnakeCase: function(input){
    var regex = /\w+/g;
    var result = "";
    input.replace(regex, function(str) {
      result = result + str.charAt(0).toUpperCase() + str.substr(1).toLowerCase() + "_";
    })
    result = result.slice(0, -1);
    //console.log(result);
    return result
  },

  compareArrays: function(startArr, diffArr){ 
    var result = true;
    startArr.forEach(function(value, index, array) {
      //console.log(array[index] + " " + diffArr[index]);
      if (array[index] !== diffArr[index]) {
        result = false;
      }
    });
    return result;
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(input){  
    var result = []    
    for (let i = 1; i <= input; i++) {
      if (i % 15 === 0) {
        result.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        result.push("FIZZ");
      } else if (i % 5 === 0) {
        result.push("BUZZ");
      } else {
        result.push(i);
      }
    }
    //console.log(result);
    return result;
  },

  myMap: function(inputArr, inputFunc){  
    var result = [];
    inputArr.forEach(function(value) {
      result.push(inputFunc(value));
    });
    console.log(result);
    return result;
  },

  primes: function(input){  
    let sieve = [];
    let primes = [];
    let i;
    let k;

    sieve[0] = false;
    sieve[1] = false;

    for (i = 2; i <= input; i++) {
      sieve[i] = true;
    }

    for (i = 2; i * i < input; i++) {
      if (sieve[i] === true) {
        for (k = i * i; k <= input; k += i) {
          sieve[k] = false;
        }
      }
    }

    sieve.forEach(function(value, key) {
      if (value === true) {
        primes.push(key);
      }
    });

    return primes;
  },
}