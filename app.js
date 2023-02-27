// alert('jsファイルから記述してます')

// let test = "変数テスト";

// alert(test)

// let calc = 1 + 4

// let string = "文字列" + "を連結してます"

// alert(calc)

// alert(string + calc)

// let orange = 1000;
// let apple = 1000;

// if (orange < apple){
//   alert("orangeよりappleのほうが高いです");
// } else if(orange == apple) {
//   alert("orangeとappleは同じ料金です");
// } else {
//   alert("appleよりorangeのほうが高いです");
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count += 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do {
//   num = num * 2;
//   count += 1;

// } while (num > max);

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// var nickname = "taro"
// console.log(nickname)
// nickname = "giro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)

// function foo() {
//   var x = "webcamp"
//   {
//     var y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()