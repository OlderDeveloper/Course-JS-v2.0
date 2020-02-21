// task 1 --------------------
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!

const a1 = {
  3: "hello",
  one: "hi"
};

function f1() {
  let out1 = "";
  for (let key in a1) {
    out1 += `${key}: ${a1[key]} <br>`;
  }
  document.querySelector(".out-1").innerHTML = out1;
}

f1();

// task 2 --------------------
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.

const a2 = {
  3: "hello",
  one: "hi",
  testt: "vodoley",
  ivan: "ivanov"
};

function f2() {
  let out2 = "";
  for (let key in a2) {
    if (a2[key].length > 4) {
      out2 += a2[key] + " ";
    }
  }
  document.querySelector(".out-2").innerHTML = out2;
}

f2();

// task 3 --------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

const a3 = {
  3: "hello",
  one: "hi",
  testt: "vodoley",
  ivan: "ivanov"
};

function f3() {
  let out3 = "";
  for (let key in a3) {
    if (key.length > 4) {
      out3 += key + " ";
    }
  }
  document.querySelector(".out-3").innerHTML = out3;
}

f3();

// task 4 --------------------
// Выведите на страницу элементы из масиива a4 у которых значение - число.

const a4 = {
  3: "hello",
  one: 4,
  testt: "vodoley",
  ivan: 6
};

function f4() {
  let out4 = "";
  for (let key in a4) {
    if (typeof a4[key] == "number") {
      out4 += a4[key] + " ";
    }
  }
  document.querySelector(".out-4").innerHTML = out4;
}

f4();

// task 5 --------------------
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

const a5 = {
  a: 7,
  z: 4,
  45: 12,
  f: 6
};

function f5() {
  let sum = 0;
  for (let key in a5) {
    if (typeof a5[key] == 'number') {
      sum = sum + a5[key]
    }
  }
  document.querySelector(".out-5").innerHTML = sum;
}

f5();

// task 6 --------------------
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

const a6 = {
  name: "Igor",
  age: 29,
  sex: "man",
  height: 185
};

function f6() {
  let out6 = "";
  for (let key in a6) {
    out6 += `${key}: ${a6[key]} <br>`;
  }
  document.querySelector(".out-6").innerHTML = out6;
}

f6();

// task 7 --------------------
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

let a7 = {};

function f7() {
  let out7 = '';
  let uKey = +document.querySelector(".u7-key__input").value;
  let uValue = document.querySelector(".u7-value__input").value;
  a7[uKey] = uValue;

  for (let uKey in a7) {
    out7 += `${uKey}: ${a7[uKey]}<br>`;
  }
  document.querySelector(".out-7").innerHTML = out7;
  console.log(a7);
}

document.querySelector(".btn6").onclick = f7

// task 8 --------------------
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.

function f8() {
  let out8 = '';
  let keyDell = document.querySelector(".u8-key__input").value;

  delete a7[keyDell];

  for (let keyDell in a7) {
    out8 += `${keyDell}: ${a7[keyDell]}<br>`;
  }
  document.querySelector(".out-8").innerHTML = out8;
  console.log(a7);
}

document.querySelector(".btn8").onclick = f8;

// task 9 --------------------
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.

function f9() {
  let out9 = '';

  let keyDell = document.querySelector(".u9-delete-value__input").value;

  for (let key in a7) {
    if (a7[key] == keyDell) {
      delete a7[key];
    }
  }
  console.log(a7)
  out9 = JSON.stringify(a7)
  document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector(".btn9").onclick = f9;

// task 10 --------------------
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.

function f10() {
  let out10 = '';
  let hasKey = +document.querySelector(".u10-has-key__input").value;

  for (let key in a7) {
    if (key == hasKey) {
      out10 = true;
      break;
    } else {
      out10 = false;
    }
  }
  document.querySelector(".out-10").innerHTML = out10;
}


document.querySelector(".btn10").onclick = f10;