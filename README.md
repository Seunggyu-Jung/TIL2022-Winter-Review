# TIL2022-Winter-Review
Repository for Review in 2022 Winter

## 2023 - 2 - 19
1. [pg369게임]()

- filter() 메서드를 표현할 때

```
filter(x => x) 
filter((el) => (el))
```

- include() 메서드는 배열과 문자열에서 사용하는 메서드

2. [pg진료순서 구하기]()

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






