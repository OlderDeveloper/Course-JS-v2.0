//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let out1 = document.querySelector(".out-1");

function t1() {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      out1.textContent += "*";
    }
    out1.textContent += "_";
  }
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
let out2 = document.querySelector(".out-2");

function t2() {
  for (let i = 1; i <= 3; i++) {
    out2.innerHTML += `<br>${i}<br>`;
    for (let k = 0; k < 3; k++) {
      out2.innerHTML += "*" + "_";
    }
  }
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

let out3 = document.querySelector(".out-3");

function t3() {
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 3; k++) {
      out3.innerHTML += "*" + "_";
    }
    out3.innerHTML += "<br>";
  }
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>

const out4 = document.querySelector(".out-4");

function t4() {
  let k = 11;
  for (let i = 0; i <= 10; i++) {
    out4.textContent += i + "_";
    k--;
    for (; k >= 0; k--) {
      out4.textContent += k + "_";
      break;
    }
  }
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

const out5 = document.querySelector(".out-5");

function t5() {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
      out5.innerHTML += `${(k + 1) % 2}`;
    }
    out5.innerHTML += "<br>";
  }
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

const out6 = document.querySelector(".out-6");

function t6() {
  for (let i = 0; i < 18; i += 6) {
    for (let k = 0; k < 6; k++) {
      if (k == 0 || k == 4) {
        out6.innerHTML += 1;
      } else if (k == 1 || k == 3) {
        out6.innerHTML += 0;
      } else {
        out6.innerHTML += "x";
      }
    }
    out6.innerHTML += "<br>";
  }
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

const out7 = document.querySelector(".out-7");

function t7() {
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i; k++) {
      out7.innerHTML += "*";
    }
    out7.innerHTML += "<br>";
  }
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

const out8 = document.querySelector(".out-8");

function t8() {
  for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
      out8.innerHTML += "*";
    }
    out8.innerHTML += "<br>";
  }
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

const out9 = document.querySelector(".out-9");

function t9() {
  for (let i = 0; i < 6; i++) {
    for (let k = 0; k < i; k++) {
      out9.innerHTML += k + 1 + " ";
    }
    out9.innerHTML += "<br>";
  }
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

const out10 = document.querySelector(".out-10");

function t10() {
  for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
      if (i == 0 && k < 10) {
        out10.innerHTML += "0";
      }
      out10.innerHTML += (i * 10) + k + " ";
    }
    out10.innerHTML += "<br>";
  }
}

document.querySelector(".b-10").onclick = t10;