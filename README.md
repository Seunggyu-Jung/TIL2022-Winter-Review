# TIL2022-Winter-Review
Repository for Review in 2022 Winter

## 2023 - 2 - 19
1. [pg369게임](https://github.com/ThovenhairWorrior/TIL2022-Winter-Review/blob/main/rv2023-2-19/pg369%EA%B2%8C%EC%9E%84.js)

- filter() 메서드를 표현할 때

```
filter(x => x) 
filter((el) => (el))
```

- include() 메서드는 배열과 문자열에서 사용하는 메서드
```
let Three = ["3" , "6" , "9"];
Three.includes("3");
```


2. [pg진료순서 구하기](https://github.com/ThovenhairWorrior/TIL2022-Winter-Review/blob/main/rv2023-2-19/pg%EC%A7%84%EB%A3%8C%EC%88%9C%EC%84%9C%20%EA%B5%AC%ED%95%98%EA%B8%B0.js)

- 배열내에 객체를 생성하는 방법
```
let NewEmergency = [];
    for (let i = 0; i <= emergency.length - 1; i++)   {
        NewEmergency.push({value :emergency[i], idx : i})
    };
```

- 객체를 대상으로 베열에 메서드를 적용할 경우 ".key값"을 사용
```
NewEmergency.sort(function(a,b){
        return b.value - a.value
    });
```

- 객체의 value 값을 호출하고 싶은 경우 ".value"를 사용
```
answer[item.idx] = j + 1;
```
----------------

## 2023 - 2 -26
1. [pg인덱스 바꾸기.js]()


- arr.splice(start, count, item) : arr의 start번째 인덱스에 있는 객체부터 count 개수 만큼 item으로 바꾼다.

```
function solution(my_string, num1, num2) {
    let result = [...my_string] 
    result.splice(num1, 1, my_string[num2])
    let answer = result.join("");
    return answer;
    }

    console.log(solution("hello", 2 ,4)) // heooo
```


2. [pg중복된 문자 제거]()


- [...new Set(arr)] : 배열에서 중복된 문자를 제거하고 다시 배열로 변환하는 방식


3. [pg가까운 수]()


- 배열에서 객체를 호출하는 순서 이해할 것. 

```
function solution(array, n) {
    var answer = 0;
    let Cha = array.sort(function(a,b){
        return a - b
    }).map(x => Math.abs(x - n))
    answer = array[Cha.indexOf(Math.min(...Cha))]  // 이 부분의 결과 매일 한 번씩 보며 예측할 것
    return answer;
}
```


4. [배열 회전시키기]()


- arr.slice(a, b) : 배열에서 a번째 인덱스부터 b 바로 앞 인덱스까지 잘라냄






