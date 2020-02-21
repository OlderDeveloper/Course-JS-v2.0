// task 1 --------------------
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!

const a = [
  [1, 2, 3],
  ["a", "b", "c"],
  [4, 5, 6],
  ["d", "e", "f"],
  [7, 8, 9]
];

// console.log(a);

function f1() {
  let out1 = "";
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      out1 += a[i][k] + " ";
    }
    out1 += "<br>";
  }
  document.querySelector(".out-1").innerHTML = out1;
}

f1();

// task 2 --------------------
// Выведите на страницу символ 3 из массива a.

document.querySelector(".out-2").innerHTML = a[0][2];

// task 3 --------------------
// Выведите на страницу символ e из массива a.

document.querySelector(".out-3").innerHTML = a[3][1];

// task 4 --------------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

document.querySelector(".out-4").innerHTML = a[3];

// task 5 --------------------
// Выведите на страницу только первые элементы вложенных массивов массива a.

const out5 = document.querySelector(".out-5");

function f5() {
  for (let i = 0; i < a.length; i++) {
    out5.innerHTML += a[i][0];
  }
}

f5();

// task 6 --------------------
// Выведите на страницу только четные вложенные массивы массива a.

const out6 = document.querySelector(".out-6");

function f6() {
  let res = "";
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      if (a[i][k] % 2 == 0) {
        res += a[i][k];
      }
    }
  }
  out6.innerHTML += res;
}

f6();

// task 7 --------------------
// Выведите на страницу только числа из массива a.

const out7 = document.querySelector(".out-7");

function f7() {
  let res2 = "";
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      if (typeof a[i][k] == "number") {
        res2 += a[i][k] + " ";
      }
    }
  }
  out7.innerHTML += res2;
}

f7();

// task 8 --------------------
// Выведите на страницу длины вложенных массивов в массив a.

const out8 = document.querySelector(".out-8");

function f8() {
  for (let i = 0; i < a.length; i++) {
    out8.innerHTML += a[i].length + "<br>";
  }
}

f8();

// task 9 --------------------
// Выведите на страницу элементы массива a в обратном порядке т.е.
// 9 8 7 f e ...

const out9 = document.querySelector(".out-9");

function f9() {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      out9.innerHTML += a[i][k] + " ";
    }
    out9.innerHTML += "<br>";
  }
}

f9();

// task 10 --------------------
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
// 3 2 1
// c b a
// 6 5 4
// f e d
// 9 8 7

const out10 = document.querySelector(".out-10");

function f10() {
  for (let i = 0; i < a.length; i++) {
    let c = a[i];
    for (let k = c.length - 1; k >= 0; k--) {
      out10.innerHTML += c[k] + " ";
    }
    out10.innerHTML += "<br>";
  }
}

f10();

// task 11 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

const out11 = document.querySelector(".out-11");

function f11() {
  const arr = [];
  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
      if (!arr[i]) {
        arr[i] = [];
      }

      if (i % 2 === k % 2) {
        arr[i][k] = 0;
      } else {
        arr[i][k] = 1;
      }
    }
  }
  console.log(arr);
  for (let j = 0; j < arr.length; j++) {
    for (let r = 0; r < arr[j].length; r++) {
      out11.innerHTML += arr[j][r] + " ";
    }
    out11.innerHTML += "<br>";
  }
}

f11();

// function f11() {
//   let arr = [
//     []
//   ];
//   let j = 0;
//   for (let i = 0; i < 8; i++) {
//     for (let k = 0; k < 8; k++) {
//       if (!arr[i]) {
//         arr[i] = []
//       }

//       if (j % 2 == 0) {
//         arr[i][k] = 0;
//       } else {
//         arr[i][k] = 1;
//       }
//       j++;
//     }
//     out11.innerHTML += arr;
//   }
//   console.log(arr)
// }

// f11()


// task 12 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закрашенные цветом.

const chess = [
  [0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0]
];


function f12() {
  let out12 = document.querySelector(".out-12");
  out12.classList.add('chess-board')
  for (let i = 0; i < chess.length; i++) {
    for (let k = 0; k < chess[i].length; k++) {
      let chessItem = document.createElement("div");
      chessItem.classList.add("chess-element");
      out12.appendChild(chessItem);
      if (chess[i][k] == 0) {
        chessItem.classList.add('chess-white')
      } else if(chess[i][k] == 1){
        chessItem.classList.add('chess-black')
      }
    }
    out12.innerHTML += '<br>'
  }
}

f12();


// task 13 --------------------
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5

const b = [
  [0, 4, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 5]
];

// console.log(b);
console.log(b[0][1]);
console.log(b[3][2]);

// task 14 --------------------
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5

const c = [[0, 4], [0], [5]];

console.log(c[0][1]);
console.log(c[2]);
// console.log(c);

// task 15 --------------------
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

const d = [[0, 4], [], [0, 1, 2, 5], [], [], [], [4, 5]];

// console.log(d);
console.log(d[0][1]);
console.log(d[2][3]);
console.log(d[6]);

// task 16 --------------------
// Создайте массив, который подходит под следующие условия:
// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

const e = [[0, 4], [], [0, 1, 2, 5], [], [], [], [[0, 6]]];

console.log(e[0][1] == 4);
console.log(e[2][3] == 5);
console.log(e[6][0][1] == 6);

// task 17 --------------------
// Создайте массив, который подходит под следующие условия:
// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

const f = [[[], [0, 0, 0, 4]], [[]], [[], [0, 5]], [[]], [[]], [[]], [[0, 6]]];

console.log(f[0][1][3] == 4);
console.log(f[2][1][1] == 5);
console.log(f[6][0][1] == 6);

// task 18 --------------------
// Создайте массив, который подходит под следующие условия:
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

const g = [
  [[], [0, 0, 0, 4]], 
  [[],],
  [[], [0, 0, 0, 5]],
  [[4],],
  [[],],
  [[4],],
  [[0, 6]]
]

console.log(g[0][1][3] == 4);
console.log(g[2][1][3] == 5);
console.log(g[6][0][1] == 6);

// console.log(g[3]);
// console.log(g[5])
console.log(+g[3] == +g[5])

// task 19 --------------------
// Выведите на страницу сумму элементов массива a (только чисел).


const out19 = document.querySelector(".out-19");

function f19() {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      if (typeof a[i][k] == "number") {
        sum = sum + a[i][k];
      }
    }
  }
  out19.innerHTML += sum;
}

f19();


// task 20 --------------------
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.

let game = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
]

game[1][0], [1][1], [1][2];
game[2][0], [2][1], [2][2];
game[0][0], [1][0], [2][0];
game[0][1], [1][1], [2][1];
game[0][2], [1][2], [2][2];
game[0][0], [1][1], [2][2];
game[0][2], [1][1], [2][0];

