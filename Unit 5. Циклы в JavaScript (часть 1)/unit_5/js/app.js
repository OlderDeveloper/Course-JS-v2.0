// Task 1 --------------------
// Выведите в консоль с помощью цикла числа от 1 до 10.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Task 2 --------------------
// Выведите на страницу с помощью цикла числа от 1 до 10.

let out = "";
for (let i = 1; i < 10; i++) {
  out += i + " ";
}

document.querySelector("#out").innerHTML = out;

// Task 3 --------------------
// Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.

let out2 = "";
for (let i = 10; i >= 0; i--) {
  out2 += i + " ";
}

document.querySelector("#out2").innerHTML = out2;

// Task 4 --------------------
/* Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2. */

let out3 = "";
for (let i = 0; i < 10; i += 2) {
  out3 += i + " ";
}

document.querySelector("#out3").innerHTML = out3;

// Task 5 --------------------
/* Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3. */

let out4 = "";
for (let i = 21; i >= 0; i -= 3) {
  out4 += i + " ";
}

document.querySelector("#out4").innerHTML = out4;

// Task 6 --------------------
/* Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу. */

let out5 = document.querySelector('#out5');

for (let i = 0; i < 6; i++) {
  out5.innerHTML += '******' + "<br>";
}

// Task 7 --------------------
/* Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного пользователем в input до нуля. */

let res = document.querySelector(".res");

document.querySelector(".btn").onclick = () => {
  let inp = document.querySelector(".inp");
  let a = parseInt(inp.value);
  for (let i = a; i >= 0; i--) {
    res.innerHTML += i;
  }
};

// Task 8 --------------------
/* Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. Считаем что второе число всегда больше первого. */

let res1 = document.querySelector(".res1");

document.querySelector(".btn1").onclick = () => {
  let inp2 = document.querySelector(".inp2");
  let inp3 = document.querySelector(".inp3");
  let a2 = parseInt(inp2.value);
  let a3 = parseInt(inp3.value);
  for (let i = a3; i >= a2; i--) {
    res1.innerHTML += i + " ";
  }
};

// Task 9 --------------------
/* Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, если нет - выводим alert о ошибке. */

let res2 = document.querySelector(".res2");

document.querySelector(".btn2").onclick = () => {
  let inp4 = document.querySelector(".inp4");
  let inp5 = document.querySelector(".inp5");
  let a4 = parseInt(inp4.value);
  let a5 = parseInt(inp5.value);
  if (a4 < a5) {
    for (let i = a5; i >= a4; i--) {
      res2.innerHTML += i + " ";
    }
  } else {
    alert("ошибка");
  }
};

// Task 10 --------------------
// Выведите на страницу все четные годы в промежутке от 1901 до 1950.

let min = 1901;
let max = 1950;
let res4 = " ";

for (let i = min; i <= max; i++) {
  if (i % 2 == 0) {
    res4 += i + " ";
  }
}

document.querySelector(".res4").innerHTML = res4;

// Task 11 --------------------
/* Создайте несколько div.one. С помощью length выведите количество div.one на странице. */

let one = document.querySelectorAll(".one");
let res5 = "";

for (let i = 0; i < one.length; i++) {
  res5 += i + " ";
}

document.querySelector(".res5").innerHTML = res5;

// Task 12 --------------------
/* Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет. */

document.querySelector(".btn3").onclick = () => {
  let one2 = document.querySelectorAll(".one2");
  for (let i = 0; i < one2.length; i++) {
    one2[i].style.background = "orange";
  }
};

// Task 13 --------------------
/* Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one. */

document.querySelector(".btn4").onclick = () => {
  let one3 = document.getElementsByClassName("one3");
  for (let i = 0; i < one3.length; i++) {
    console.log(one3[i].innerHTML);
  }
};

// Task 14 --------------------
/* Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"] устанавливает свойство placeholder = 'Введите данные' */

document.querySelector(".btn5").onclick = () => {
  let inp6 = document.querySelectorAll('input[type="text"]');
  for (let i = 0; i < inp6.length; i++) {
    inp6[i].setAttribute("placeholder", "Введите данные");
  }
};

// Task 15 --------------------
/* Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"] */

document.querySelector(".btn6").onclick = () => {
  let inp7 = document.querySelectorAll(".inp7");
  for (let i = 0; i < inp7.length; i++) {
    console.log(inp7[i].innerHTML);
  }
};

// Task 16 --------------------
/* Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу value выбранного. */

let res6 = document.querySelector(".res6");

document.querySelector(".btn7").onclick = () => {
  let r = document.getElementsByName("p1");
  for (let i = 0; i < r.length; i++) {
    if (r[i].checked) {
      res6.innerHTML = r[i].value;
    }
  }
};

// Task 17 --------------------
/* Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked. */

document.querySelector(".btn8").onclick = () => {
  let r2 = document.getElementsByName("p1");
  r2[0].checked = true;
};

// Task 18 --------------------
/* Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу присвойте value = 0, второму value = 1 и т.д. */

let p1 = document.querySelectorAll('[name="p1"]');

for (let i = 0; i < p1.length; i++) {
  p1[i].value = i;
}

// Task 19 --------------------
/* Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии на котору проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true. */

let a = false;

document.querySelector(".btn9").onclick = () => {
  let p2 = document.getElementsByName("p2");
  for (let i = 0; i < p2.length; i++) {
    if (p2[i].checked && p2[i].value == 6) {
      a = true;
    } else {
      a = false;
    }
  }
  console.log(a);
};

// Task 20 --------------------
/* Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении состояния input - выводите в консоль текст "был изменен input" */

let p3 = document.querySelectorAll('[name="p3"]');

for (let i = 0; i < p3.length; i++) {
  p3[i].oninput = () => {
    console.log("был изменен input" + i);
  }
}