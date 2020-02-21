// task 1 --------------------
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.

const u1 = document.querySelector(".u-1");
const push = document.querySelector(".u-2__push");
const out1 = document.querySelector(".out-1");

const arr1 = [];

push.onclick = function t1() {
  if (u1.value === "") {
    alert("Введите данные!");
  } else {
    arr1.push(u1.value);
    out1.innerHTML = arr1.join(" ");
    u1.value = " ";
  }
};

// task 2 --------------------
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1

const pop = document.querySelector(".u-4__pop");

pop.onclick = function t2() {
  arr1.pop();
  out1.innerHTML = arr1.join(" ");
  u1.value = " ";
};

// task 3 --------------------
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.

const shift = document.querySelector(".u-3__shift");

shift.onclick = function t3() {
  arr1.shift();
  out1.innerHTML = arr1.join(" ");
  u1.value = " ";
};

// task 4 --------------------
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?

const unshift = document.querySelector(".u-4__unshift");

unshift.onclick = function t4() {
  if (u1.value === "") {
    alert("Введите данные!");
  } else {
    arr1.unshift(u1.value);
    out1.innerHTML = arr1.join(" ");
    u1.value = " ";
  }
};

// task 5 --------------------
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. Результат применения выводите в div.out-5.

const out5 = document.querySelector(".out-5");

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, "hello"];

function t5(arr) {
  const index = +document.querySelector(".u-2").value;
  const quantity = +document.querySelector(".u-3").value;
  if (index && quantity !== "undefined") {
    let b = arr.splice(index, quantity);
    out5.innerHTML = b.join(" ");
  } else {
    alert("введите данные!");
  }
}

document.querySelector(".u-5__splice").onclick = function() {
  t5(arr5);
};

// task 6 --------------------
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// 1. читает содержимое input в переменную
// 2. вычисляет длину массива
// 3. присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".u-6__funcpush");

let arr6 = [];

function funcPush() {
  const u4 = +document.querySelector(".u-4").value;
  arr6[arr6.length] = u4;
}

btn6.onclick = () => {
  funcPush();
  out6.innerHTML = arr6.join(" ");
};

// task 7 --------------------
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// 1. удаляет последний элемент массива
// Выводит массив на страницу

const out7 = document.querySelector(".out-7");

let arr7 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, "hello"];

function funcPop(arr) {
  console.log(arr);
  if (arr.length > 0) {
    arr.length--;
  }
}

document.querySelector(".u-7__funcpop").onclick = function() {
  funcPop(arr7);
  out7.innerHTML = arr7.join(" ");
};

// task 8 --------------------
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// 1. Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу

const out8 = document.querySelector(".out-8");

let arr8 = [3, 14, 15];
let arr20 = [];

// const funcShift = () => {
//     const [firstNumber, ...numbersWithoutOne] = arr8;
//     out8.innerHTML = numbersWithoutOne.join(" ");
// }

function funcShift() {
  for (let i = 0; i < arr8.length - 1; i++) {
    arr20[i] = arr8[i + 1];
  }
}

document.querySelector(".u-8__funcshift").onclick = function() {
  funcShift();
  out8.innerHTML = arr20.join(" ");
};

// task 9 --------------------
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// 1. читает содержимое input в переменную
// 2/ создает новый массив где нулевым элементов задает считанную из input строку
// 2. дописывает остальные значения старого массива в новый
// Выводит массив на страницу

let arr21 = [1, 2, 3, 4];

const out9 = document.querySelector(".out-9");

function funcUnShift() {
  const u9 = document.querySelector(".u-9").value;
  let arr9 = [];
  arr9[0] = u9;
  for (let i = 0; i < arr21.length; i++) {
    arr9.push(arr21[i]);
  }

  arr21 = arr9;

  document.querySelector(".out-9").innerHTML = arr9;
}

document.querySelector(".u-9__funcunshift").onclick = funcUnShift;

// task 10 --------------------
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.

const out10 = document.querySelector(".out-10");
const u10 = document.querySelector(".u-10__reverse");

let arr10 = [2, 4, 6, 8, 10, "hello"];

const funcReverse = arr => arr10.reverse();

u10.onclick = () => {
  funcReverse(arr10);
  out10.innerHTML = arr10;
};

// task 11 --------------------
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

let out11 = document.querySelector(".out-11");

let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector(".u-11__button").onclick = function() {
  let u11 = +document.querySelector(".u-11__input").value;
  let index = arr11.indexOf(u11);
  out11.innerHTML = index;
};

// task 12 --------------------
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// 1. читает содержимое input в переменную
// 2. Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// 3. Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// 4. Если совпадения нет выводить -1.

let arr12 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90];

function funcIndexOf() {
  let index = -1;
  const u12 = +document.querySelector(".u-12").value;
  for (i = 0; i < arr12.length; i++) {
    if (arr12[i] == u12) {
      index = i;
      return i;
    }
  }
  return -1;
}

document.querySelector(".u-12__button").onclick = function() {
  document.querySelector(".out-12").textContent = funcIndexOf();
};

// task 13 --------------------
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// 1. Создать новый пустой массив
// 2. Перебирать старый массив с конца (массив создайте сами)
// 3. По очереди по элементу присвоить значения в новый массив.
// 4. Вывести новый массив.

let arr13 = [1, 2, 3, 4];

function funcReverse2(array) {
  let newArr = [];
  inArr = array.slice();

  while (inArr.length) {
    newArr.push(inArr.pop());
  }
  return newArr;
}

document.querySelector(".u-13__button").onclick = function() {
  document.querySelector(".out-13").textContent = funcReverse2(arr13);
};

// task 14 --------------------
// Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.

function randomArray() {
  const u14 = document.querySelector(".length").value;
  let rand = [];
  for (let i = 0, j = u14; i < j; i++) {
    rand.push(Math.round(Math.random() * j));
  }
  return rand;
}

document.querySelector(".u-14__button").onclick = function() {
  document.querySelector(".out-14").innerHTML = randomArray();
};

// task 15 --------------------
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.

const arr15 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90];

function funcEvenNum() {
  let result = [];
  for (let i = 0; i < arr15.length; i += 2) {
    result.push(arr15[i]);
  }
  return result;
}

document.querySelector(".u-15__button").onclick = function() {
  document.querySelector(".out-15").innerHTML = funcEvenNum();
};

// task 16 --------------------
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.

let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

const out16 = document.querySelector(".out-16");

document.querySelector(".u-16__button").onclick = function() {
  const array3 = arr16_1.concat(arr16_2);
  out16.textContent = array3;
};

// task 17 --------------------
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
// 1. Перебирает второй массив и его элементы добавляет в первый массив.
// 2. Выводит массив на страницу.

function funcConcat() {
  for (let i = 0; i < arr16_2.length; i++) {
    arr16_1.push(arr16_2[i]);
  }
  return arr16_1;
}

document.querySelector(".u-17__button").onclick = function() {
  document.querySelector(".out-17").innerHTML = funcConcat();
};

// task 18 --------------------
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите на страницу в div.out-18.

let arr18 = [3, 5, 7, 11, 12, 13, 14];

const out18 = document.querySelector(".out-18");

document.querySelector(".u-18__button").onclick = () => {
  const u18 = +document.querySelector(".u-18__input").value;
  let b = arr18.includes(u18);
  out18.textContent = b;
};

// task 19 --------------------
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// 1. Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// 2. Если совпадений нет - false.

let arr19 = [3, 5, 7, 11, 12, 13, 14];

function funcIncludes() {
  const u19 = +document.querySelector(".u-19__input").value;
  for (i = 0; i < arr19.length; i++) {
    if (arr19[i] == u19) {
      return true;
    }
  }
  return false;
}

document.querySelector(".u-19__button").onclick = () => {
  document.querySelector(".out-19").textContent = funcIncludes();
};

// task 20 --------------------
// Объявите массив arr22. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). Результа выведите на страницу.

let arr22 = [3, 5, 7, 11, 12, 13, 14];

let out20 = document.querySelector(".out-20");

document.querySelector(".u-20__button").onclick = () => {
  out20.textContent = arr22.join(" ");
};
