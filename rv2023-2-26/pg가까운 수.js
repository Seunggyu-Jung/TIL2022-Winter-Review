/*
정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(array, n) {
    var answer = 0;
    let Cha = array.sort(function(a,b){
        return a - b
    }).map(x => Math.abs(x - n))
    answer = array[Cha.indexOf(Math.min(...Cha))]  // 배열에서 객체를 호출하는 순서 이해할 것.
    return answer;
}

console.log(solution([3, 10, 28], 18))  // 10