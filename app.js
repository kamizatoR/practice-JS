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

// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// let alertString;

// alertString = addString("WebCamp");

// alert(addString("Dmm"));

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')


// while ((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)){
//   alert('グー・チョキ・パーのいずれかを入力してください');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
// }


// let js_hand = getJShand();

// let judge = winLose(user_hand, js_hand);

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else{
//   alert('またチャレンジしてね');
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random() * 3);
//   let hand_name;

//   if (js_hand_num == 0){
//     hand_name = 'グー';
//   } else if (js_hand_num == 1){
//     hand_name = 'チョキ';
//   } else if (js_hand_num == 2){
//     hand_name = 'パー';
//   }

//   return hand_name;
// }

// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }

// let fizzbuzz = function (num){

//     if (num % 3 == 0){
//       return 'fizz';
//     } else if (num % 5 == 0){
//       return 'buzz';
//     } else if (num % 15 == 0){
//       return 'fizzbuzz';
//     } else {
//       return num;
//     }
// }

// for(let i = 1; i <= 30; i++){
//   console.log(fizzbuzz(i));
// }

$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});