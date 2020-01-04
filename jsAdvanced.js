var products = [
    { amount: 200 },
    { amount: 400 },
    { amount: 500 },
    { amount: 600 },
    { amount: 100 },
]

var totAmount = products.reduce((sum, elem) => sum + elem.amount, 0);
// console.log(totAmount); 

// simple clouser example

var makeAdder = function (x) {
    return function (y) {
        return x + y;
    }
}

var add5 = makeAdder(5);

console.log(add5(2));


// clouser implementation using module pattern 

var counter = (function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        decrement: function () {
            changeBy(-1);
        },

        displayVal: function () {
            return privateCounter;
        }
    }
})();


console.log(counter.displayVal());
counter.increment();
console.log(counter.displayVal());

// some functors trick

function incrementByTwo(val) {
    return val + 2;
}

function isEven(val) {
    return val % 2 === 0;
}

let onlyEven = [5, 6, 8].filter(isEven);
let newArr = [5, 6].map(incrementByTwo);

console.log(newArr);
console.log(onlyEven);


/*
var sampleString = '[[{[}]]';
        var sampleHash = {
            '[': 0,
            '{': 0,
            '(': 0
        };

        function checkValidity(stringTocheck) {
            for (var i = 0; i < stringTocheck.length; i++){
                if(stringTocheck[i] === '['  || stringTocheck[i] === '{' || stringTocheck[i] === '(') {
                    sampleHash[stringTocheck[i]] = sampleHash[stringTocheck[i]] += 1;
                } else if(stringTocheck[i] === ']') {
                    sampleHash['['] = sampleHash['['] -= 1;
                } else if(stringTocheck[i] === '}') {
                    sampleHash['{'] = sampleHash['{'] -= 1;
                } else if(stringTocheck[i] === ')') {
                    sampleHash['('] = sampleHash['('] -= 1;
                }
            }

            if(sampleHash['['] === 0 && sampleHash['{'] === 0 && sampleHash['('] === 0){
                return true;
            }

            return false;
        }

        var res = checkValidity(sampleString);
        console.log(res);
*/


// Debouncing practicing ...
let searchCounter = 0;
const getData = () => {
    console.log(`Fetch Data Called ${searchCounter++}`);
}


const doSomeMagic = (fn, d) => {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, d);
    }
}


const onSearch = doSomeMagic(getData, 300);


let sum = a => b => b ? sum (a + b) : a; 

console.log(sum(1)(2)(3)(4)());

// curring funciton using bind method

let multiply = (x, y) => x * y;

let multipliedByTwo = multiply.bind(this, 2);

let multipliedByThree = multiply.bind(this, 3);
console.log(multipliedByThree(4));
