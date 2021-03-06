// ++++++++++++++++++++++++++
// 関数・アロー関数
// ++++++++++++++++++++++++++

// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// const func3 = (str) => {
//   return str;
// };

// const func4 = (str) => str;

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };

// const func6 = (num1, num2) => num1 + num2;

// console.log(func1("Yes"));
// console.log(func2("No"));
// console.log(func3("YesNo"));
// console.log(func4("YesNoYes"));
// console.log(func5(10, 20));
// console.log(func6(10, 30));

// ++++++++++++++++++++++++++
// 分割代入
// ++++++++++++++++++++++++++
// const profile = {
//   name: "たくろう",
//   age: 28,
// };

// const { name, age } = profile

// const message = `私の名前は${profile.name}です。年齢は${profile.age}歳です`;
// const message = `私の名前は${name}です。年齢は${age}歳です`;

// console.log(profile);
// console.log(message);

// const profile2 = ["たくろう", 28];
// const [name, age] = profile2;
// const message2 = `私の名前は${name}です。年齢は${age}歳です`;

// console.log(profile2);
// console.log(message2);

// ++++++++++++++++++++++++++
// デフォルト値
// ++++++++++++++++++++++++++

// const func1 = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// func1();

// スプレッド構文

// const arr = [10, 20];
// const func = (num1, num2) => console.log(num1 + num2);
// func(arr[0], arr[1]);
// func(...arr);

// const arr1 = [10, 20];
// const arr2 = [30, 40];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr4 = [10, 20, 30, 40, 50];
// const arr5 = [...arr4];

// console.log(arr5);

// ++++++++++++++++++++++++++
// mapメソッド、filterメソッド
// ++++++++++++++++++++++++++

// const arr = ["たくろう", "たなか", "たんじろう"];

// arr.map((name)=> {
//   console.log(`${name}さん`)
// });

// const newArr = arr.map((name)=>`${name}さん`);
// const newArr = arr.map((name)=>{
//   return `${name}さん`
// });

// console.log(newArr)

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });

// console.log(newNumArr)

// ++++++++++++++++++++++++++
// 三項演算子
// ++++++++++++++++++++++++++

// const val = 2 > 100 ? "ok" : "no";
// console.log(val);

// const num = 1200

// const numType = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(numType);

// const checkedNum = ((num1, num2)=> {
//   return num1 + num2 > 100 ? "100超えてる" : "100以下";
// });

// console.log(checkedNum(100, 200));