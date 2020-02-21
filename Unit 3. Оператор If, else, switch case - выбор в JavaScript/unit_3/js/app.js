// Task 1 --------------------
/* Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль. */

const a = 4;

if (a == 4) {
  console.log("Верно!");
}

// Task 2 --------------------
/* Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше. */

const b = 8;
const c = 10;

if (b > c) {
  console.log("переменная b больше");
} else {
  console.log("переменная c больше");
}

// Task 3 --------------------
// Используя else if добавьте в предыдущую задачу проверку на равенство.

if (b > c) {
  console.log("переменная b больше");
} else if (b === c) {
  console.log("переменные равны");
} else {
  console.log("переменная c больше");
}

// Task 4 --------------------
/* Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны". */

const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const btn = document.querySelector(".btn");
const res = document.querySelector(".res");

btn.onclick = () => {
  let num = +inp1.value;
  let num2 = +inp2.value;
  if (num > num2) {
    res.innerHTML = inp1.value;
  } else if (num2 > num) {
    res.innerHTML = inp2.value;
  } else if (num2 === num) {
    res.innerHTML = "Равны";
  }
};

// Task 5 --------------------
/* Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя. */

const inp3 = document.querySelector(".inp3");
const btn2 = document.querySelector(".btn2");
const res2 = document.querySelector(".res2");

btn2.onclick = () => {
  let birth = parseInt(inp3.value);
  let takeAge = 2019 - birth;
  if (birth < 2000) {
    res2.innerHTML = takeAge;
  } else if (birth > 2000 || birth == 2000) {
    res2.innerHTML = takeAge;
  }
};

// Task 6 --------------------
/* Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует. */

const inp4 = document.querySelector(".inp4");
const btn3 = document.querySelector(".btn3");
const res3 = document.querySelector(".res3");

btn3.onclick = () => {
  let room = parseInt(inp4.value);
  if (room >= 1 && room <= 32) {
    res3.innerHTML = "Такая квартира есть";
  } else {
    res3.innerHTML = "Квартира не существует";
  }
};

// Task 7 --------------------
/* Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число. */

const inp5 = document.querySelector(".inp5");
const btn4 = document.querySelector(".btn4");
const res4 = document.querySelector(".res4");

btn4.onclick = () => {
  let num3 = +inp5.value;
  if (num3 > null) {
    res4.innerHTML = "Число больше нуля";
  } else if (num3 < null) {
    res4.innerHTML = "Число меньше нуля";
  }
};



// Task 8 --------------------
/* Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное. */

const inp6 = document.querySelector(".inp6");
const btn5 = document.querySelector(".btn5");
const res5 = document.querySelector(".res5");

btn5.onclick = () => {
  let num4 = +inp6.value;
  if (num4 % 2 == 0) {
    res5.innerHTML = "Число четное";
  } else if (num4 % 2 != 0) {
    res5.innerHTML = "Число не четное";
  }
};

// Task 9 --------------------
/* Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем! */

const inp7 = document.querySelector(".inp7");
const inp8 = document.querySelector(".inp8");
const btn6 = document.querySelector(".btn6");
const res6 = document.querySelector(".res6");

btn6.onclick = () => {
  let num5 = +inp7.value;
  let num6 = +inp8.value;
  let result = num5 ** num6;
  if (num5 != "" && num6 != "") {
    res6.innerHTML = result;
  }
};

// Task 10 --------------------
/* Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello... */

const inp9 = document.querySelector(".inp9");
const btn7 = document.querySelector(".btn7");

btn7.onclick = () => {
  let str1 = inp9.value;
  if (str1 == "" || str1 == " ") {
    alert("Заполните поле");
  } else {
    alert(`Hello ${str1}`);
  }
};

// Task 11 --------------------
/* Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input. */

const inp10 = document.querySelector(".inp10");
const btn8 = document.querySelector(".btn8");

btn8.onclick = () => {
  let a = inp10.value;
  a = a.trim();
  if (a == "") {
    alert("Ошибка");
  } else {
    alert(`Hello ${a}`);
  }
};

// Task 12 --------------------
/* Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch. */

const inp11 = document.querySelector(".inp11");
const btn9 = document.querySelector(".btn9");

btn9.onclick = () => {
  let num7 = +inp11.value;
  switch (num7) {
    case 1:
      console.log("Один");
      break;
    case 2:
      console.log("Два");
      break;
    case 3:
      console.log("Три");
      break;
  }
};

// Task 13 --------------------
/* Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома. */

const inp12 = document.querySelector(".inp12");
const btn10 = document.querySelector(".btn10");
const res7 = document.querySelector(".res7");

btn10.onclick = () => {
  num8 = +inp12.value;
  if (num8 >= 1 && num8 <= 5) {
    res7.innerHTML = "улица 1";
  } else if (num8 >= 6 && num8 < 11) {
    res7.innerHTML = "улица 2";
  } else if (num8 >= 11 && num8 <= 20) {
    res7.innerHTML = "улица 3";
  }
};

// Task 14 --------------------
/* Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу. */

const inp13 = document.querySelector(".inp13");
const btn11 = document.querySelector(".btn11");
const res8 = document.querySelector(".res8");

btn11.onclick = () => {
  let num9 = +inp13.value;
  if (num9 >= 0 && num9 <= 25) {
    res8.innerHTML = 'Не обнаружено';
  } else if (num9 <= 50) {
    res8.innerHTML = 'Снижение числа лимфоцитов';
  } else if (num9 <= 100) {
    res8.innerHTML = 'вялость, рвота';
  } else if (num9 <= 150) {
    res8.innerHTML = 'смертность 5%';
  } else if (num9 <= 350) {
    res8.innerHTML = 'смертность 50% за 30 суток';
  } else if (num9 <= 600) {
    res8.innerHTML = '90% смертность за 2 недели';
  } else if (num9 > 600 && num9 <= 1000) {
    res8.innerHTML = 'смертность 100%';
  }
};

// Task 15 --------------------
/* Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат. */

const x = 1;
const y = 0;

console.log(x && y);
console.log(x || y);

// Task 16 --------------------
/*В Казахстане, налог на объем двигателя составляет:

от 0 до 499 кубов - 2525 тенге
от 500 до 1199 кубов - 5050 тенге
от 1200 до 1599 кубов - 8275 тенге
от 1600 до 1899 кубов - 9675 тенге
от 1900 до 1999 кубов - 11075тенге
от 2000 и выше кубов - 15000 тенге

Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель. */

const inp14 = document.querySelector(".inp14");
const btn12 = document.querySelector(".btn12");
const res9 = document.querySelector(".res9");

btn12.onclick = () => {
  let num10 = inp14.value;
  if (num10 >= 0 && num10 <= 499) {
    res9.innerHTML = 'налог 2525 тенге';
  } else if (num10 >= 500 && num10 <= 1199) {
    res9.innerHTML = 'налог 5050 тенге';
  } else if (num10 >= 1200 && num10 <= 1599) {
    res9.innerHTML = 'налог 8275 тенге';
  } else if (num10 >= 1600 && num10 <= 1899) {
    res9.innerHTML = 'налог 9675 тенге';
  } else if (num10 >= 1900 && num10 <= 1999) {
    res9.innerHTML = 'налог 11075 тенге';
  } else if (num10 >= 2000) {
    res9.innerHTML = 'налог 15000 тенге';
  }
};

// Task 17 --------------------
/* Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет. */

const inp15 = document.querySelector(".inp15");
const inp16 = document.querySelector(".inp16");
const btn13 = document.querySelector(".btn13");
const res10 = document.querySelector(".res10");

// euro = 0.91;
// rub = 64.48;
// uah = 24.7;

btn13.onclick = () => {
  let num11 = +inp15.value;
  let text = inp16.value;
  if (text == 'euro') {
    res10.innerHTML = num11 * 0.91;
  } else if (text == 'rub') {
    res10.innerHTML = num11 * 64.48;
  } else if (text == 'uah') {
    res10.innerHTML = num11 * 24.7;
  }
};

// Task 18 --------------------
// Проделайте предыдущую задачу с помощью switch case.

const inp17 = document.querySelector(".inp17");
const inp18 = document.querySelector(".inp18");
const btn14 = document.querySelector(".btn14");
const res11 = document.querySelector(".res11");

btn14.onclick = () => {
  let num12 = +inp17.value;
  let text1 = inp18.value;
  switch (text1) {
    case 'euro':
      res11.innerHTML = num12 * 0.91;
      break;
    case 'rub':
      res11.innerHTML = num12 * 64.48;
      break;
    case 'uah':
      res11.innerHTML = num12 * 24.7
      break;
  }
};

// Task 19 --------------------
/* Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу. */

const inp19 = document.querySelector(".inp19");
const inp20 = document.querySelector(".inp20");
const inp21 = document.querySelector(".inp21");
const btn15 = document.querySelector(".btn15");
const res12 = document.querySelector(".res12");

btn15.onclick = () => {
  let num13 = +inp19.value;
  let num14 = +inp20.value;
  let text2 = inp21.value;
  if (text2 == "-") {
    res12.innerHTML = num13 - num14;
  } else if (text2 == "+") {
    res12.innerHTML = num13 + num14;
  } else if (text2 == "*") {
    res12.innerHTML = num13 * num14;
  } else if (text2 == "/") {
    res12.innerHTML = num13 / num14;
  }
};

// Task 20 --------------------
// Проделайте предыдущую задачу с помощью switch case.

const inp22 = document.querySelector(".inp22");
const inp23 = document.querySelector(".inp23");
const inp24 = document.querySelector(".inp24");
const btn16 = document.querySelector(".btn16");
const res17 = document.querySelector(".res17");

btn16.onclick = () => {
  let num15 = +inp22.value;
  let num16 = +inp23.value;
  let text3 = inp24.value;
  switch (text3) {
    case '-':
        res17.innerHTML = num15 - num16;
        break;
    case '+':
        res17.innerHTML = num15 + num16;
        break;
    case '*':
      res17.innerHTML = num15 * num16;
      break;
    case '/':
      res17.innerHTML = num15 / num16;
      break
  }
};



