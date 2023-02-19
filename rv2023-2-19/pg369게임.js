/*
머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(order) {
    let Three = ["3" , "6" , "9"];
    var answer = (order + "").split("").filter((el) => Three.includes((el))).length
    
    return answer;
}

console.log(solution(548231618)); // 2

