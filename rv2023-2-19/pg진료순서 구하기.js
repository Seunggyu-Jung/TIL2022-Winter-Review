/*
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(emergency) {
    var answer = new Array(emergency.length);
    let NewEmergency = [];
    for (let i = 0; i <= emergency.length - 1; i++)   {
        NewEmergency.push({value :emergency[i], idx : i})
    };
    
    NewEmergency.sort(function(a,b){
        return b.value - a.value
    });
    
    for (let j = 0; j <= NewEmergency.length - 1; j++){
        let item = NewEmergency[j];
        answer[item.idx] = j + 1;
    }
    
    return answer;
}

console.log(solution([3, 76, 24]))  // [ 3, 1, 2 ]