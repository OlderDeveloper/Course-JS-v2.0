// task 1 --------------------
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.

let array1 = [1, 2, 3, "hello world", 4.12, true];

console.log(array1);

// task 2 --------------------
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.

const out = document.querySelector(".out");

let array2 = [1, 2, 3, "hello world", 4.12, true];

out.innerHTML = array2.join(" ");

// task 3 --------------------
// Создайте массив a. Выведите длину массива a.

const a = [2, "hello", 17, 34, "privet"];

console.log(a.length);

// task 4 --------------------
// Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. Сделайте вывод о 8-м элементе.

const a2 = [2, "hello", 17, 34, "privet"];

console.log(a2[0]);
console.log(a2[3]);
console.log(a2[8]);

// task 5 --------------------
// Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.

const a3 = [2, "hello", 17, 34, "privet"];

console.log(a3[0] + a3[2] + a3[3]);

// task 6 --------------------
// Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.

const out2 = document.querySelector(".out2");

let array3 = ["Igor", "близнецы", 22.05];

out2.innerHTML = array3.join(" ");

// task 7 --------------------
// Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. Вывести массив на страницу в элемент div.

const out3 = document.querySelector(".out3");

let b = ["one", 1, 2, "two"];

b.push("hi", "foo", "bar");

out3.innerHTML = b.join(" ");

// task 8 --------------------
// Создайте массив b. Добавьте в него третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. Выведите массив и в консоль и на страницу. Обратите внимание, как выводятся элементы значения которых не заданы. Также выведите значение длины массива.

const out4 = document.querySelector(".out4");

let b2 = ["one", 1, 2, "two"];

b2[3] = 3.14;
b2[4] = 17;
b2[6] = 5;

console.log(b2);
console.log(b2.length);

out4.innerHTML = b2.join(" ");

// task 9 --------------------
// Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.

const array4 = [1, 2, 3, "hello world", 4.12, true, false, "js", "basic", 5.16];

console.log(array4[2], array4[6]);
console.log(array4);

// task 10 --------------------
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.

let array5 = [];

array5[1] = 1;
array5[5] = 5;
array5[10] = 10;

console.log(array5);
console.log(array5.length);

const out5 = document.querySelector(".out5");
out5.innerHTML = array5.join(" ");

// task 11 --------------------
// Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.

const c = [77, 88, 99, 66];

function t1() {
    const out6 = document.querySelector(".out6");
    [c[0], c[3]] = [c[3], c[0]];
    out6.innerHTML = c.join(" ");
}

document.querySelector(".btn").onclick = t1;

// task 12 --------------------
// Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. После чего выводит массив в консоль. Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}

console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));

// task 13 --------------------
// Используя цикл выведите элементы массива d на страницу. Разделитель - пробел.

function showArray() {
    let d = ["y", 4, 22, "o"];
    let printThis = "";
    for (let i = 0; i < d.length; i++) {
        printThis += d[i] + " ";
    }
    return printThis;
}

document.querySelector(".out7").innerHTML = showArray();

// task 14 --------------------
// Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.

function reverseArray() {
    let e = [1, 2, 3, "hello", 66];
    let printThis2 = "";
    for (let i = e.length - 1; i >= 0; i--) {
        printThis2 += e[i] + " ";
    }

    return printThis2;
}

document.querySelector(".out8").innerHTML = reverseArray();

// task 15 --------------------
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.

function moreZeroArr() {
    let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let printThis3 = "";
    for (let i = 0; i < d.length; i++) {
        if (d[i] > 0) {
            printThis3 += d[i] + " ";
        }
    }
    return printThis3;
}

document.querySelector(".out9").innerHTML = moreZeroArr();

// task 16 --------------------
// Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.

function evenOddArr() {
    const d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let a1 = [];
    let a2 = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i] % 2 === 0) {
            a1.push(d[i]);
        } else {
            a2.push(d[i]);
        }
    }
    document.querySelector(".out10").innerHTML += a1 + "<br>" + a2;
}

evenOddArr();

// task 17 --------------------
// Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.

let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let count = 0;

for (let i = 0; i < e.length; i++) {
    if (e[i] === 0) {
        count++;
    };
};

console.log("Mumber of elements = 0: " + count);

// task 18 --------------------
// Используя предыдущий массив e и цикл - выведите максимальное значение из массива.

// let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let max = e[0];

for (let k = 0; k < e.length; k++) {
    if (e[k] > max) {
        max = e[k];
    }
}

console.log("Max is: " + max);

// task 19 --------------------
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.

let f = [-3, 0, 45, 22, 123, -485, 98, 34];

function largestIndex(array) {
    let counter = 1;
    let max = 0;

    for (counter; counter < array.length; counter++) {
        if (array[max] < array[counter]) {
            max = counter;
        }
    }
    return max;
}

console.log("index with largest value is: " + largestIndex(f));

// task 20 --------------------
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.

let f2 = [-3, 0, 45, 22, 123, -485, 98, 34];
let sum = 0;

for (let i = 0; i < f2.length; i++) {
    sum = sum + parseInt(f2[i]);
}

console.log(sum);