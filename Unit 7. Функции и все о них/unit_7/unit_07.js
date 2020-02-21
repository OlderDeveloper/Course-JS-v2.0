// Task 1
// Напишите функцию t1, которая при нажатии кнопки выводит в out - 1 переменную a1.

let out1 = document.querySelector(".out-1");

let a1 = 8;

function t1() {
  out1.textContent = a1;
}

document.querySelector(".b-1").onclick = t1;

// Task 2.

// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь функция t2 возвращает переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками(вызов функции) можно встраивать в выражения.Обратите внимание, как изменяется вызов функции теперь.

let a2 = 8;

function t2() {
  return a2;
}

document.querySelector(".b-2").onclick = function() {
  document.querySelector(".out-2").textContent = t2();
};

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра и выводит их произведение.Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.

function t3(a, b) {
  return a * b;
}

document.querySelector(".b-3-1").onclick = function() {
  document.querySelector(".out-3-1").textContent = t3(3, 4);
};
document.querySelector(".b-3-2").onclick = function() {
  document.querySelector(".out-3-2").textContent = t3(5, 6);
};

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет ваш возраст.

function t4(year) {
  return new Date().getFullYear() - year;
}

document.querySelector(".b-4").onclick = function() {
  document.querySelector(".out-4").textContent = t4(1991);
};

// Task 5
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.

function t5(yourName) {
  return "Hello " + yourName;
}

document.querySelector(".b-5").onclick = function() {
  document.querySelector(".out-5").textContent = t5("Alex");
};

// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.

function t6(a, b) {
  // let rand = a + Math.random() * (b + 1 - a);
  // return Math.floor(rand);
  return Math.floor(Math.random() * (b - a + 1) + a);
}

document.querySelector(".b-6").onclick = function() {
  document.querySelector(".out-6").textContent = t6(1, 7);
};

// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255].

function t7() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z})`;
}

document.querySelector(".b-7").onclick = function() {
  document.querySelector(".out-7").style.background = t7();
};

// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
  return str.trim();
}

document.querySelector(".b-8").onclick = function() {
  document.querySelector(".out-8").textContent = t8("  Hello  ");
};

// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное.

function t9(num) {
  return num % 2 === 0
    ? (() => {
        return true;
      })()
    : (() => {
        return false;
      })();
}

document.querySelector(".b-9").onclick = function() {
  document.querySelector(".out-9").textContent = t9(15);
};

// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

function t10(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return b;
  }
}

document.querySelector(".b-10").onclick = function() {
  document.querySelector(".out-10").textContent = t10(3, 9);
};

// ЗАДАЧИ НА ПРОКАЧКУ

// Task 11
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.

document.querySelector(".b-11").onclick = function t11() {
  console.log("Igor");
};

// Task 12
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.

function t12(name) {
  console.log(`Hello ${name}`);
}

t12("Sergey");

// Task 13
// Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль. Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром.

function t13(num) {
  console.log(num * 10);
}

document.querySelector(".b-12").onclick = function() {
  t13(22);
};

// Task 14
// Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.

const color = "red";

function t14(btn) {
  btn.style.background = color;
}

document.querySelector(".b-13").onclick = function() {
  t14(this);
};

// Task 15
// Создайте функцию, которая возвращает ваше имя. Имя вводится с input

document.querySelector(".b-14").onclick = function() {
  let inp1 = document.querySelector(".inp-1").value;
  document.getElementById("str").innerText = "Вы ввели:" + inp1;
};

// Task 16
// Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. В качестве первого параметра передайте f11().

function f11() {
  let x = 5;
  // console.log(x);
  return x;
}

function f12(num) {
  let x = 6 * num();
  console.log(x);
}

f12(f11);

// Task 17
// Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.

let b15 = document.querySelector(".b-15");

b15.onclick = emptyInput;

function emptyInput() {
  let str = document.querySelector(".inp-2").value;
  str = str.trim();
  if (str.trim() == "") {
    alert("false");
    return false;
  } else {
    alert(str);
  }
}

// Task 18
// Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.

function toNum(num) {
  const num5 = document.querySelector(".inp-3").value;
  const parsed = parseInt(num5);
  console.log(parsed)
  return parsed;
}

document.querySelector(".b-18").onclick = function() {
  document.querySelector(".out-11").textContent = toNum(this);
};
