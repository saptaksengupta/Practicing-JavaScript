// // ASC 

// [5, 3, 7, 1];

// [3, 5, 1, 7];

// [3, 1, 5, 7];

// [1, 3, 5, 7];

//  bubbleSort(arr) {

//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // swap that eleme
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     // consol

// }

// swap(arr, a, b){
//     var temp = arr[b];
//     arr[b] = arr[a];
//     arr[a] = temp;
// }

// mul(3)(3)(3); // 27

// function mul(a) {
//     return function(b) {
//         return function(c) {
//             return a * b * c;
//         }
//     }
// }




// Test MMT

// 1. convert es6 to es5
// class Shape {
//     constructor( color ) {
//         this.color = color;
//     }
//     getColor() {
//         return this.color;
//     }
// }
// class Rectangle extends Shape {
//     constructor( color, width, height ) {
//         super( color );
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }

// var Shape = function (color) {
//     this.color = color;

//     this.getColor = function () {
//         return this.color;
//     }
// }

// var Rectangle = function (color, height, width) {
//     this.color = color;
//     this.height = height;
//     this.width = width;

//     this.getColor(this.color);

//     this.getArea = function () {
//         return this.width * this.height;
//     }
// }

// Rectangle.prototype.getColor = function () {

// }


// Object.assign(Rectangle, Shape);

// var r1 = new Rectangle('red', 5, 8);

// // let rectangle = new Rectangle( 'red', 5, 8 );
// console.log("Area:\t\t" + rectangle.getArea());
// console.log("Color:\t\t" + rectangle.getColor())

// function isValidParen(str) {

//     var openSamples = ['[','{','('];
//     var stack = [];
//     for( var i = 0; i < str.length; i++) {

//         if( openSamples.includes(str[i])) {
//             stack.push(str[i]);
//         } else {
//             var lastElem = stack[stack.length - 1];
//             if(lastElem == '[' && str[i] != ']') {
//                    return false;
//             } else if(lastElem == '{' && str[i] != '}') {
//                    return false;
//             } else if(lastElem == '(' && str[i] != ')' ) {
//                    return false;
//             }
//             stack.pop();
//         }
//     }

//     if (stack.length > 0) {
//         return false;
//     } 

//     return true;
// }

// console.log(isValidParen("[()]{}{[()()]()}"));
// console.log(isValidParen("[()"));

// function some() {
//     console.log(this);
// }

// var myObj = function() {
//     this.inner = function () {
//         console.log(this);
//         function innerMost() {
//             console.log(this);
//         }
//         innerMost();
//     }
// }

// var a = new myObj();
// console.log(a.inner());


// var a = (function() {
//     var count = 1;
//     return {
//         counter: function () {
//             console.log(count++);
//         }
//     }
// })();

// a.counter();
// a.counter();
// a.counter();

function counter() {
    var counter = 1;
    return function () {
        console.log(counter++);
    }
}

var a = counter();
a();
a();


// Event Capturing 
document.getElementById("main").addEventListener('click', function () {
    console.log("grand parent clicked");
}, true);

document.getElementById("parent").addEventListener('click', function () {
    console.log("parent clicked");
}, true);

document.getElementById("child").addEventListener('click', function () {
    console.log("child clicked");
}, true);


//Event Bubbling which is by default but capturing happens at first in almost every browsers.
// document.getElementById("main").addEventListener('click', function(){
//     console.log("grand parent clicked");   
// });

// document.getElementById("parent").addEventListener('click', function(){
//     console.log("parent clicked");   
// });

// document.getElementById("child").addEventListener('click', function(){
//     console.log("child clicked");   
// });


function Person(name) {
    this.name = name;

    return [2, 3];
}

var p = new Person('Saptak');
console.log(p);


// Prototype Inheritence
var Job = function () {
    this.pays = true;
    this.jobs1 = 'abc';
}

Job.prototype.print = function () {
    console.log(this.pays ? 'please Hire me' : 'No thank you');
}

var TechJob = function (title, pays) {
    Job.call(this);
    this.title = title;
    this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

var softwareEngineerJob = new TechJob('JS Programmer', true);
var supportEngineer = new TechJob('Support Engineer', false);

console.log(softwareEngineerJob.print());

//Destructuring nested objects

const nest = {
    start: { x: 4, y: 5 },
    end: { x: 8, y: -9 }
}

const { start: { x: startX, y: startY }, end: { x: endX, y: endY } } = nest;

console.log(startX);
console.log(endY);

const [q, r, ...rest] = [1, 2, 3, 4, 5];

console.log(rest);


const x = {
    val: 2
}

const newObj = Object.assign({}, x, { val: x.val + 2 });

console.log(newObj);


var tp = new Promise((resolve, reject) => {
    if (true) {
        console.log('resolve');
        resolve(1);
    }
    console.log('reject');
    reject(2);
});

tp.then(resp => {
    console.log(resp);
    console.log('success');
}).catch(e => {
    console.log('erroe');
});

const throttled = function (func, delay) {
    let last = 0;
    return function (...args) {
        setTimeout(function () {
            const now = new Date().getTime();
            if (now - last < delay) {
                return false;
            }
            last = now;
            func(...args);
        }, delay);
    }
}

const promise2 = Promise.resolve(3);
const promise1 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

Promise.all([promise3, promise2, promise1]).then((values) => {
    console.log(values);
});

function Person(name) {
    this.name = name;

    var person = {
        name: 'Ajay'
    };

    function person() {
        return {
            name: 'Prithvi'
        };
    }

    return person;
}

var yomesh = new Person('Yomesh');
console.log(yomesh);

var loadSripts = function (src) {

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


function promisify(func) {
    var self = this;
    return function(...args) {
        return new Promise((resolve, reject) => {
            var cb = function(success, error) {
                if (success) {
                    resolve(success);
                } else {
                    reject(error);
                }
            }
            args.push(cb);
            func.apply(self, args);
        });
    }
}

const promisified = promisify(asyncFunction);

promisified(1, 2).then((resp) => {
    console.log("Promisified Success", resp);
}).catch(err => {
    console.log("Promisified Error: ", err);
});