// Задание 1
let userstrinh = prompt(`Введите слово: ${String()}`);
let upper = userstrinh.toUpperCase();
console.log(`Задание 1: ${upper}`);

// Задание 2
const arrt2 = ["Кошка", "Корова", "Коза", "Курица", "Баран"];
let str = 'Ко';
// function task2() {
//     arrt2.forEach((newarr) => {
//         if (newarr.toLowerCase().includes(str.toLowerCase())) {
//            console.log(`Задание 2: ${newarr}`);
//         }
//      });
// }
// task2();
function poiskpoarr() {
    const result = arrt2.filter((arrt2) => arrt2.includes(str));
    console.log(`Задание 2: ${result}`);
}
poiskpoarr();

// Зада0ние 3
let number = 32.58884;
console.log(`Задание 3: Округление до меньшего целого ${Math.floor(number)}`);
console.log(`Округление до большего целого ${Math.ceil(number)}`);
console.log(`Округление до ближайщего целого ${Math.round(number)}`);

// Задание 4
console.log(`Минимальное число: ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`Максимальное число: ${Math.max(52, 53, 49, 77, 21, 32)}`);

// Задание 5
function random10() {
    console.log(`Задание 5: Случайное число: ${Math.floor(Math.random() * 10)}`);
}
random10();

// Задание 6
function randomuser() {
    let usernum = prompt('Введите число: ');
    console.log(`Задание 6: Случайное число: ${Math.floor(Math.random() * usernum)}`);
}
randomuser();

// Задание 7

function randomuser2(min, max) {
    console.log(`Задание 7: Случайное число: ${Math.floor(Math.random() * (max - min) + min )}`);
}
let num1 = prompt('Введите 1-ое число: ');
let num2 = prompt('Введите 2-ое число: ');
randomuser2(num1, num2);

// Задание 8
let data = new Date;
console.log(`Задание 8: ${data}`);

// Задание 9
// let currentDate = new Date;
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let dat = +currentDate;
// let after73 = dat + days73;
// let daysnext73 = new Date(after73);
// console.log(`Задание 9: ${daysnext73}`);

let currentDate = new Date;
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Задание 9: ${currentDate}`);


// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
function dateRus() {
    let Rdata = new Date;
    let fullDate = "Задание 10: Сегодня: " + Rdata.getDate() + " " + months[Rdata.getMonth()] +  " " + Rdata.getFullYear() + ", " + days[Rdata.getDay()]; 
    console.log(fullDate); 
}
dateRus();
function hourRus() {
    let rusdate = new Date;
    console.log(`Время: ${rusdate.toLocaleTimeString('ru-RU')}`);
}
hourRus();
