// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    const u1 = document.querySelector(".u-1");
    u1.style.width = "200px";
    u1.style.height = "100px";
}

func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    const u2 = document.querySelector(".u-2");
    u2.classList.add("css-1");
}

func_2();

// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let u3 = document.querySelectorAll(".u-3");
    for (let i = 0; i < u3.length; i++) {
        u3[i].onclick = function () {
            this.style.background = "red";
        };
    }
}

func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let u4 = document.querySelectorAll(".u-4");
    for (let i = 0; i < u4.length; i++) {
        u4[i].onclick = function () {
            this.classList.add("css-2");
        };
    }
}

func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let u5 = document.querySelectorAll(".u-5");
    for (let i = 0; i < u5.length; i++) {
        u5[i].onclick = function () {
            this.classList.remove("css-3");
        };
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

function func_6() {
    let u6 = document.querySelector(".u-6");
    u6.onclick = function () {
        this.classList.toggle("active");
    };
}

func_6();

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    let elem = document.querySelectorAll(".css-3");

    return elem.length;
}

console.log(func_7());

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let u1 = document.querySelector(".u-1");
    u1.setAttribute("title", "test-data");
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

function func_9() {
    let u9 = document.querySelectorAll(".u-9");
    for (let i = 0; i < u9.length; i++) {
        u9[i].onclick = function () {
            console.log(this.getAttribute("data"));
        };
    }
}

func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

function func_10() {
    let money = document.querySelectorAll(".u-10__button");
    for (i = 0; i < money.length; i++) {
        money[i].onclick = function () {
            let usd = this.getAttribute("data-currency");
            document.querySelector(".u-10__out").textContent = usd;
        };
    }
}

func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах.

function func_11() {
    let money = document.querySelectorAll(".u-11__button");
    for (i = 0; i < money.length; i++) {
        money[i].onclick = function () {
            let quantity = +document.querySelector(".u-11__input").value;
            let amount = this.getAttribute("data-currency");
            let exchange = quantity * amount;
            document.querySelector(".u-11_out").value = exchange;
        };
    }
}

func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("css-4");

    return newDiv;
}

func_12();

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let element = document.createElement("span-13");
    element.innerText = "13";
    document.querySelector(".u-13").append(element);
}

func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let element = document.createElement("span-14");
    element.innerText = "14";
    document.querySelector(".u-14").prepend(element);
}

func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let element = document.createElement("span-15");
    element.innerText = "15";
    document.querySelector(".u-15").before(element);
}

func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let element = document.createElement("button");
    element.classList.add("u-16");
    element.innerText = "Push";
    element.onclick = () => {
        console.log("u-16");
    };

    document.querySelector(".u-16__out").append(element);
}

func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let elem = document.createElement("p");
    elem.innerText = "17";
    document.querySelector(".u-17").replaceWith(elem);
}

func_17();

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

function func_18() {
    let elem = document.querySelectorAll(".out-18");
    for (let i = 0; i < elem.length; i++) {
        elem[i].onclick = function () {
            this.remove();
        };
    };
};

func_18();

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let elem = document.createElement("li");
    elem.innerHTML = text;
    document.querySelector(".u-19").append(elem);

}

func_19("Конец списка");


// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

const tasksList = document.querySelector(".tasks-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const important = document.querySelector(".important");

addListBtn.addEventListener("click", function () {
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    tasksList.appendChild(newLi);
    if (important.checked) {
        newLi.classList.add("css-5");
    };
});