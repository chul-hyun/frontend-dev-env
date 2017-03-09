// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)

    for(let i = 1; i <= N ; i++){
        i++;
    }
    function mem(){
        const MAX = 100000;
        for(let i = 1 ; i <= MAX ; i++){
            (i+'').match(/1/g).length
        }
    }
}

console.log(solution([1,3,-3]));
