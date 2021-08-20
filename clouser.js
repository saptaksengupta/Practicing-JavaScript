// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//     console.log(b);
//     return (function immetiateC(c) {
//       console.log(b);
//       console.log(c); // What is logged?
//     })(3);
//   })(1);
// })(0);

// for (var i = 0; i < 9; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// let x = 1;
// (function () {
//   x = 2; 
//   console.log(x);
// })();


// // Array length has a special property
// // Reducing the value of the length property has the side-effect of deleting 
// // own array elements whose array index is between the old and new length values.
// let array = ['re', 'rss', 'aaa'];
// array.length = 0;
// console.log(array[0]);

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }
// console.log(numbers);

// let k;
// for (k = 0; k < 3; k++) {
//   const log = () => {
//     console.log(k);
//   }
//   setTimeout(log, 100);
// }

// const object = {
//   message: 'Hello, World!',

//   logMessage: function () {
//     console.log(this.message); // What is logged?
//   }
// };

var aa = 10;
(function () {
  console.log(aa);
  var aa = 20;
})();



function memoized(fn) {
  var existingFuncParams = {};
  return function (...args) {
    var self = this;
    if (!existingFuncParams[args.join(',')]) {
      existingFuncParams[args.join(',')] = fn.apply(self, [...args]);
    } 
    return existingFuncParams[args.join(',')];
  };
}

function fun(a, b) {
  for (let i = 0; i < 10000; i++) { }
  return a + b;
}

let memoFun = memoized(fun);

memoFun(1, 2);
memoFun(1, 2);
memoFun(1, 3);

console.log("1st Call", logExecutionTime(memoFun, [1, 2]));
console.log("2nd call", logExecutionTime(memoFun, [1, 2]));
console.log("3rd call", logExecutionTime(memoFun, [1, 3]));


function logExecutionTime(fn, args) {
  const start = console.time('fn');
  const result = fn(...args);
  console.timeEnd('fn');
  return result;
}

function asyncFunction(a, b, callback) {
  const isError = Math.random() > 0.7;
  setTimeout(() => {
    if (isError) {
      callback(null, new Error("Something went wrong"));
      return;
    }
    callback(a + b, null);
  }, 3000);
}

function promisify(fn) {
  // Implement Code here
  var self = this;
  return function(...args) {
      return new Promise((resolve, reject) => {
        const cb = function (success, err) {
          if(err) {
            reject(err);
          } else {
            resolve(success);
          }
        }
        
        args.push(cb);
        fn.call(self, args);
      });
  }
}

asyncFunction(1, 2, function(result, err) {
  console.log(result, err);
});

// New Usage
const promisifiedFn = promisify(asyncFunction);
promisifiedFn(1, 2)
  .then((res) => {
    console.log("result", res);
  })
  .catch(console.log);