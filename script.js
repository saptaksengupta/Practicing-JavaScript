// var throttled = function(fn, delay) {
//     let last;
//     return function(...args) {
//         let now = new Date().getTime();
//         if (now - last < delay) {
//             return false;
//         }
//         last = now;
//         fn(...args);
//     }
// }

// var doSomeMagic = function(fn, delay) {
//     let timer;
//     return function () {
//         var context = this;
//         var args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             fn.apply(context, [...args]);
//         }, delay);
//     }
// }

// var doSearch = function () {
//     var query = inputBox.value;
//     console.log('Searched for', query);
// }

// var betterFunc = doSomeMagic(doSearch, 1000);

// var inputBox = document.getElementById('search-box');

// for (var i = 0; i < 10; i++) {
//     function close(i) {
//         setTimeout(function () {
//             console.log(i);
//         });
//     };
//     close(i);
// }


// function sum () {
//     console.log(a);
// }


// const a = 10;

// sum();
// let name = {
//     firstName: 'Saptak',
//     lastName: 'Sengupta'
// };

// let fullName = function(location, age) {
//     console.log(this.firstName + ' ' + this.lastName + ' ' + location + age);   
// }



// fullName.call(name, 'chinsurah', 26);
// fullName.apply(name, ['chinsurah', 26], 'asdsda');
// let binded = fullName.bind(name, 'chinsurah', 26);
// console.log(binded());



// Function.prototype.myBind = function(...args) {
//     let self = this;
//     let params = args.slice(1);
//     return function (...args2) {
//         self.apply(args[0], [...params, ...args2]);
//     }    
// }

// let myBinded = fullName.myBind(name);
// console.log(myBinded('chinsurah', 26));


// // let sum = function(x) {
// //     return function(y) {
// //         if (y) return sum(x + y);
// //         return x;
// //     }
// // }

// // console.log(sum(2)(3)(4)());



// var a = 1000;
// (function () {
//     console.log(a);
//     var a  = 2000;
// })();

// console.log(a);


// async function getSlots(...districts) {
//     const baseApi = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict';
//     const date = new Date().toLocaleDateString().replaceAll('/', '-');


//     const requests = districts.map(district => {
//         const apiUrl = `${baseApi}?district_id=${district}&date=${date}`;
//         return fetch(apiUrl);
//     });


//     const resultsReducer = async (availableSlots, res) => {
//        const slots = await availableSlots;  
//        const {centers} = await res.json();
//        centers.forEach(({name, block_name, lat, long, sessions}) => {
//             sessions.forEach(({available_capacity}) => {
//                 available_capacity > 0 && slots.push({
//                     name,
//                     block_name,
//                     lat, long
//                 });
//             });       
//        });
//        return slots;
//     };

//     const notify = (slots) => {
//         var text = `You have slots available at ${slots.length} places. ${slots.map(({name, block_name}) => (`${name} at ${block_name}`)).join(',')}`;
//         console.log(text);
//         var notification = new Notification('Vaccine slots for Kolkata and hooghly', { body: text, icon: 'https://prod-cdn.preprod.co-vin.in/assets/images/covid19logo.jpg' });
//     };

//     Promise.all(requests).then(async results => {
//         const districtSlots = await results.reduce(resultsReducer, []);
//         districtSlots.length > 0 && notify(districtSlots);
//     });
// }


// Notification.requestPermission().then(function(result) {
//   getSlots(720,725);
// });

function outer() {
    var counter = 0;
    return function () {
        return counter++;
    }
}

const generatedFunc = outer();
const test = outer();
console.log(generatedFunc()); // 0
console.log(generatedFunc()); // 1
console.log(test()); // 0
console.log(test()); // 1

// var getName = (person) => person.name;
// var uppercase = (string) => string.toUpperCase();
// var reverse = (string) => string.split('').reverse().join('');

// console.log(pipe(
//     getName,
//     uppercase,
//     reverse
// )({ name: 'Prashant' }));


var salary = "1000";
(function () {
    console.log("Original salary was " + salary);
    var salary = "5000";
    console.log("My New Salary " + salary);
})();

console.log(salary);

Array.prototype.add = function (sum) {
    return this.map(elem => elem += sum);
}

let finalValue = [2, 3, 4, 5].add(2);
console.log(finalValue);  // [2, 3, 4, 5] => [4, 5, 6, 7] => [8, 10, 12, 14]

function count(counter) {
    this.counter = counter;
    this.outer = function()  {
        function inner() {
            console.log("Inner", this.counter);
        }
        inner();
    };
}
var count = new count(4);
count.outer();


// Understanding `New` Operater 


// Arrow Function VS Regular functions
function regular() {
    return 2;
}

// No parameters...
() => 2; // valid syntax
_ => 2; // valid syntax

// Single param 
a => a + 2;
(...a) => a.length; // valid for spread syntax 

// default Params
(x = 12) => x + 2;

// Multi Param
(a, b, c) => a + b +c;

// concise js expression body (not statement);
(a, b) => {}