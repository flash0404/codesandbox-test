/**
 * const letの変数宣言
 *
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let上書き";
// console.log(val2);

// //再宣言不可能
// let val2 = "再宣言" ;

// const val4 = {
//   name: "a",
//   age: 28,
// };
// val4.name = "b";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "a";
// const age = 28;

// const message1 = "私の名前は" + name + "です。" + age + "歳です";
// console.log(message1);

// //テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str){
//   return str;
// }

// const func = function(str){
//   return str;
// }
// console.log(func("funcです"));

//アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1,2));

//分割代入

// const myProfile = {
//   name: "a",
//   age: "28"
// };

// const {name, age} = myProfile;

// const message3 = `名前は${name}です。年齢は${age}です`;
// console.log(message3);

// const myProfile2 = ["a", 28];

// const message3 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile2;

// const message3 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト値
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレット構文
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピー

// const arr4 = [10, 20];
// // const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(...arr6);
// console.log(...arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(...arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;

// console.log(arr4[0]);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "佐藤"];
//  for (let index = 0; index < nameArr.length; index ++){
//    console.log(`${index + 1}番目は${nameArr[index]}です`);
//  }

// const nameArr1 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr1);

// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です`));

/**
 * filter 配列に対してある条件だけ
 */

// const numArr =[1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name === "佐藤"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件を書いて、？を書いて条件がtrueの時?以降が返却される。falseの時、:以降が返却される
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatedNum.toLocaleString());

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' :'許容範囲内です';
// }

// console.log(checkSum(60,50));

/**
 * 論理演算子の本当の意味を知ろう
 */

//  const flag1 = true;
//  const flag2 = false;

//  if(flag1 || flag2){
//    console.log("1か２はtrueになる");
//  }

//  if(flag1 && flag2){
//   console.log("1と２もtrueになる");
// }

// ||は、左側がfalseとなる時に右を返す処理となる。
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は、左側がtrueなら、右側を返す。
// const num2 = 100;
// const fee2 = num2 && "何か追加されました";
// console.log(fee2);
