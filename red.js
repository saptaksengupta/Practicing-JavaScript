// n = 4

// var m = [
//     [1, 0, 0, 0],
//     [1, 1, 0, 1],
//     [1, 1, 0, 0],
//     [0, 1, 1, 1]
// ];


// function isReachable (arr, i, j) {
//     if (i == n -1 && j == n - 1) {
//         return true;
//     }

//     if (arr[i+1] === 1 && isReachable(arr, i++, j)) {
//         return true;
//     }  

//     if (arr[j+1] === 1 && isReachable(arr, i, j++)) {
//         return true;
//     }

//     // return isReachable(arr, i++, j) || isReachable(arr, i, j++);
// }

async function mockApi() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        },1);
    })
}

var n = 100;
var batchSize = 10;

var div = n / batchSize;

await makeRest();

async function makeRest() {
    for (var i = 0; i < div; i++) {
        await executeBtch();
    }
}

var executeBtch = new Promise((rsolve, reject) => {
    var counter = 0;
    for(var j = 0; j < batchSize; j++) {
        mockApi().then(() => {
            counter += 1;
            if (counter == batchSize) {
                resolve();
            }
        })    
    }
});
