var counter = (function (){
    var count = 0;
    function changeVal(val) {
        count += val;
    }

    return {
        doIncrement: function() {
            changeVal(+1);
        },

        doDecrement: function() {
            changeVal(-1);
        },

        displayVal: function() {
            return count;
        }
    }

})();


counter.doIncrement();
counter.changeVal();
console.log(counter.displayVal());
console.log(counter.count);


function someFunc() {
}

var someAFunc = () => {

}

someFunc.bind(this, asdsad);

// Final round
// Test Innovacer
// var buttonGroup = document.getElementsByClassName('button-group')[0];
// buttonGroup = buttonGroup.children;
// for (var i = 0; i < buttonGroup.length; i++) {
//     buttonGroup[i].addEventListener('click', function (e) {
//         alert(i);
//     });
// }

function mul(a, b, c) {
    return a * b * c;
}

function curryWrapper(func) {
    return function inner(...args) {
        if (args.length >= func.length) {
            return func(...args); // base case
        } else {
            return function (...args2) {
                return inner(...args, args2);
            }
        }
    }
}

mul(2, 3, 4); // 24

const curried = curryWrapper(mul);

// console.log(curried(1)(2)(3));
console.log(curried(1, 2)(3));
// console.log(curried(1, 2, 3));


function isEven(a, b) {
    var sum = a + b;
    return new Promise(function (resolve, reject) {
        if (sum % 2 === 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

/* isEven(2, 3).then(console.log).catch(console.log); */
/* isEven(2, 4).then(console.log).catch(console.log); */



let inputIds = [[1, 1], [2, 2], [4, 3]];


Promise.all(inputIds.map(elem => isEven(...elem).catch(e => e))).then(console.log).catch(console.log);