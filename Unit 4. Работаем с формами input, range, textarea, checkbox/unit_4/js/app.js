// Task 1 --------------------
// Создайте button - при нажатии на него выводите alert с номером задачи.

document.querySelector("#btn1").onclick = () => {
  alert("Task 1");
};

// Task 1 --------------------
// Создайте button - при нажатии на него выводите alert с номером задачи.

document.querySelector("#inp").onclick = () => {
  alert("Task 2");
};

// Task 3 --------------------
// Создайте p - при нажатии на него выводите alert с номером задачи.

document.querySelector("#paragraph").onclick = () => {
  alert("Task 3");
};

// Task 4 --------------------
/* Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет. */

document.querySelector("#btn2").onclick = () => {
  let chbox = document.querySelector("#inp2");
  console.log(chbox.checked);
  if (chbox.checked) {
    alert("Выбран");
  } else {
    alert("Не выбран");
  }
};

// Task 5 --------------------
/* Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет. */

document.querySelector("#btn3").onclick = () => {
  let chbox = document.querySelector("#inp3");
  console.log(chbox.checked);
  if (chbox.checked) {
    alert(chbox.value);
  } else {
    alert("Не выбран");
  }
};

// Task 6 --------------------
/* Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input. */

document.querySelector("#btn4").onclick = () => {
  let inp4 = document.querySelector("#inp4");
  alert(inp4.value);
};

// Task 7 --------------------
/* Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов. */

document.querySelector("#btn5").onclick = () => {
  let inp5 = document.querySelector("#inp5");
  if (inp5.value.length < 6) {
    console.log("Минимум шесть знаков");
  } else {
    alert(inp5.value);
  }
};

// Task 8 --------------------
/* Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input. */

document.querySelector("#btn6").onclick = () => {
  let content = document.querySelector("#inp6");
  content.innerHTML +=
    '<input id="inp7"></input><button id="btn7">Получить</button>';
  console.log(content);

  document.querySelector("#btn7").onclick = () => {
    let content2 = document.querySelector("#inp7");
    alert(content2.value);
  };
};

// Task 9 --------------------
/* Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton. */

document.querySelector("#btn7").onclick = () => {
  let inp7 = document.querySelector("#inp7");
  if (inp7.checked) {
    alert(inp7.value);
  } else {
    alert("false");
  }
};

// Task 10 --------------------
/* Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом. */

document.querySelector("#btn8").onclick = () => {
  let inp8 = document.querySelector("#inp8").value;
  let square = document.querySelector(".square");
  square.style.backgroundColor = inp8;
};

// Task 11 --------------------
/* Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго. */

document.querySelector("#btn9").onclick = () => {
  const color1 = document.querySelector("#inp9");
  const color2 = document.querySelector("#inp10");
  color2.value = color1.value;
};

// Task 12 --------------------
/* Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату. */

document.querySelector("#btn10").onclick = () => {
  let inp11 = document.querySelector("#inp11").value;
  let res = document.querySelector(".res");
  res.innerHTML = inp11;
};

// Task 13 --------------------
/* Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу. */

document.querySelector("#btn11").onclick = () => {
  let inp12 = document.querySelector("#inp12").value;
  let res2 = document.querySelector(".res2");
  res2.innerHTML = inp12;
};

document.querySelector("#inp12").oninput = () => {
  let inp12 = document.querySelector("#inp12").value;
  let res3 = document.querySelector(".res3");
  res3.innerHTML = inp12;
};

// Task 14 --------------------
/* Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea. */

document.querySelector("#btn12").onclick = () => {
  let inp13 = document.querySelector("#inp13").value;
  let res4 = document.querySelector(".res4");
  res4.innerHTML = inp13;
};

// Task 15 --------------------
/* Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу. */

document.querySelector("#btn13").onclick = () => {
  let inp15 = document.querySelector("#inp15").value;
  let text = document.querySelector("#text");
  let res5 = document.querySelector(".res5");
  text.value = inp15;
  res5.innerHTML = inp15;
};

// Task 16 --------------------
/* Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option */

document.querySelector("#btn14").onclick = () => {
  let phone = document.querySelector("#phone").value;
  let res6 = document.querySelector("#res6");
  res6.innerHTML = phone;
};

// Task 17 --------------------
// Эту задачу пока не делаем!!!!!

// Task 18 --------------------
/* Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу. */

document.querySelector("#phone2").onchange = () => {
  let res7 = document.querySelector("#res7");
  res7.innerHTML = phone2.value;
};

// Task 19 --------------------
/* Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!. */

document.querySelector("#btn15").onclick = event => {
  event.preventDefault();
  let inp16 = document.querySelector("#inp16").value;
  let inp17 = document.querySelector("#inp17").value;
  console.log(inp16);
  console.log(inp17);
};

// Task 20 --------------------
/* Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать) */

document.querySelector("#btn16").onclick = event => {
  event.preventDefault();
  let form = document.querySelector("#form");
  console.log(form.elements.inp18.value);
  console.log(form.elements.inp19.value);
};
