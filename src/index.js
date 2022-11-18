/**
 * const, let
 */
const person = {
  name: "nishi",
  age: 30
};

person.mail = "aaa@bbb";

console.log(person);

/**
 * テンプレート文字列
 */
console.log(`${person.name}です。`);

/**
 * アロー関数
 */
const sayHello = (name = "名無し") => console.log(`こんにちは${name}さん`);
sayHello();
sayHello("たろう");

/**
 * 分割代入
 */
const { name, age } = person;
console.log(`${name} - ${age}`);

const arrA = [1, 2, 3, 4];
const [n1, n2] = arrA;
console.log(`${n1} , ${n2}`);

/**
 * スプレッド構文
 */
// 配列の展開
const arr1 = [1, 2];
console.log(...arr1);

const sum = (num1, num2) => console.log(num1 + num2);
sum(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [nn1, nn2, ...nn3] = arr2;
console.log(nn1);
console.log(nn3);

// コピー結合
const arr3 = [...arr1, ...arr2];
console.log(arr3);

/**
 * map, filter
 */
arr3.map((nnn, index) => console.log(`${index}:${nnn}`));
arr3.filter((nnn) => {
  if (nnn % 2 === 0) {
    console.log(`${nnn}`);
  }
});
