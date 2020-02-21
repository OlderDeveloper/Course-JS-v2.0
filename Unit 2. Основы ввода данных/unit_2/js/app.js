// task 1 --------------------
/* Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b. */

let a = 7;
let b = 9;

console.log(a * b);

// task 2 --------------------
/* Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d. */

let c = 7;
let d = 9;

document.querySelector('.divide').innerHTML = c / d;

// task 3 --------------------
/* Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f. */

let e = 3;
let f = 5;

document.querySelector('.summation').innerHTML = e + f;

// task 4 --------------------
/* Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу. */

let e1 = '3';
let f1 = 5;

document.querySelector('.concatenation').innerHTML = e1 + f1;

/*  Если одно из слагаемых является строкой, тогда и все остальные приводятся к строкам. Тогда они конкатенируются (присоединяются) друг к другу. */

// task 5 --------------------
/* Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2. */

let e2 = 3;
let f2 = 0;

document.querySelector('.infinity').innerHTML = e2 / f2;

// task 6 --------------------
/* Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных. */

let e3 = 3;
let f3 = 'Hello';

document.querySelector('.concatenation2').innerHTML = e3 + f3;

// task 7 --------------------
/* Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных. */

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.not-number').innerHTML = e4 * f4;

// task 8 --------------------
/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input. */

let inp1 = document.querySelector('.inp1');
let button = document.querySelector('button');

button.onclick = function () {
    let d = inp1.value;
    console.log(d);
}

// task 9 --------------------
/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки. */

let inp2 = document.querySelector('.inp2');
let btn = document.querySelector('.btn');
let output = document.querySelector('.output');

btn.onclick = function () {
    let d = inp2.value;
    output.innerHTML = d;
    inp2.value = '';
}

// task 10 --------------------
/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10. */

let inp3 = document.querySelector('.inp3');
let btn2 = document.querySelector('.btn2');
let res = document.querySelector('.res');

btn2.onclick = function () {
    let y = inp3.value;
    res.innerHTML = y * 10;
    inp3.value = '';
}

// task 11 --------------------
/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10. */

let inp4 = document.querySelector('.inp4');
let btn3 = document.querySelector('.btn3');
let res2 = document.querySelector('.res2');

btn3.onclick = function () {
    let z = inp4.value;
    res2.innerHTML = z + 10;
    inp4.value = '';
}

// task 12 --------------------
/* Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. */

let inp5 = document.querySelector('.inp5');
let inp6 = document.querySelector('.inp6');
let btn4 = document.querySelector('.btn4');

btn4.onclick = function () {
    let x = inp5.value;
    let m = inp6.value;
    console.log(`Hello ${x} ${m}`);
    inp5.value = '';
    inp6.value = '';
}

// task 13 --------------------
/* Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу. */

let inp7 = document.querySelector('.inp7');
let inp8 = document.querySelector('.inp8');
let btn5 = document.querySelector('.btn5');
let res3 = document.querySelector('.res3');

btn5.onclick = function () {
    let j = Number(inp7.value);
    let k = Number(inp8.value);
    res3.innerHTML = j + k;
}

// task 14 --------------------
/* Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'. */

let inp9 = document.querySelector('.inp9');

inp9.value = 'Hello';

// task 15 --------------------
/* Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции. */

let y = document.querySelector('.inp10');

y.style.border = '2px solid red';

// task 16 --------------------
/* Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел. */

let inp11 = document.querySelector('.inp11');
let inp12 = document.querySelector('.inp12');
let btn6 = document.querySelector('.btn6');
let res4 = document.querySelector('.res4');

btn6.onclick = function () {

    let a = inp11.value;
    let b = inp12.value;

    res4.innerHTML = parseInt(a) + parseInt(b)

}

// task 17 --------------------
/* Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод. */

let inp13 = document.querySelector('.inp13');
let btn7 = document.querySelector('.btn7');

btn7.onclick = function () {

    let t = inp13.value;

    t = parseInt(t);

    console.log(t);

    inp13.value = '';

}


// task 18 --------------------
/* Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод. */

let inp14 = document.querySelector('.inp14');
let btn8 = document.querySelector('.btn8');

btn8.onclick = function () {

    let t = inp14.value;

    t = parseFloat(t);

    console.log(t);

    inp14.value = '';
}

// task 19 --------------------
/* Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!! */

let inp15 = document.querySelector('.inp15');
let inp16 = document.querySelector('.inp16');
let btn9 = document.querySelector('.btn9');
let res5 = document.querySelector('.res5');

btn9.onclick = function () {

    let a = inp15.value;
    let b = inp16.value;

    res5.innerHTML = parseInt(a) + parseInt(b)

}

// task 20 --------------------
/* Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов. */


let btn10 = document.querySelector('.btn10');
let res6 = document.querySelector('.res6');

btn10.onclick = function () {

    let inp17 = document.querySelector('.inp17').value;
    let inp18 = document.querySelector('.inp18').value;
    let inp19 = document.querySelector('.inp19').value;
    let inp20 = document.querySelector('.inp20').value;

    res6.innerHTML = `Уважаемый ${inp17} ${inp18}, ваш возраст ${inp19}, по профессии вы ${inp20}`;
}

