// const name = "たくろう";
// const age = 28;
// const message = `私の名前は${name}です。年齢は${age}歳です`;

// console.log(message);

function func1(str) {
  return str;
}

const func2 = function (str) {
  return str;
};

const func3 = (str) => {
  return str;
};

const func4 = (str) => str;

const func5 = (num1, num2) => {
  return num1 + num2;
};

const func6 = (num1, num2) => num1 + num2;

console.log(func1("Yes"));
console.log(func2("No"));
console.log(func3("YesNo"));
console.log(func4("YesNoYes"));
console.log(func5(10, 20));
console.log(func6(10, 30));
