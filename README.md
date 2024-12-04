# fool number
Parody of a Japanese comedian's material
```ts
const dict = CreateFoolNumDic((n)=>
{n = Number(n);return n % 2 === 0;},
{maxNum:9})//generate dictionary!!
IsFoolNum(2,dict) //output true
```