// Задание 1
let num1 = Number(10);
alert(num1);
let num2 = Number(20);
alert(num2);
// Задание 2
const date = new Date(2007,5,29,12,0,0);
alert(`Год выпуска iPhone: ${date}`);
// Задание 3
const name = ('Brendan Eich');
alert(`Создатель языка Java Script: ${name}`);
// Задание 4
let x = Number(10);
let y = Number(2);
alert(`Сумма ${x+y}. Разность ${x-y} Произведение ${x*y} Частное ${x/y}`);
// Задание 5
let result = y**5
alert(result);
//Задание 6
let a = 9;
let b = 2;
alert(`Отстаток от деления: ${a%b}`);
//Задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);
//Задание 8
let age1 = prompt('Сколько вам лет?');
alert(`You are ${age1} y. o.`);
//Задание 9.0
const user = {
    name: String('Gazim'), 
    age: Number(23),
    isAdmin: Boolean(1)
}

user.CityOfResidence = true;  //Задание 9.1

user.age = 24;  //Задание 9.2

delete user.CityOfResidence;  //Задание 9.3

let info = prompt('Какую информацию хотите узнать o пользователе?', "name", "age", "isAdmin");  //Задание 9.4
alert(user[info]);
//Задание 10
let nameuser = prompt('Как тебя зовут?');
alert(`Привет ${nameuser}!`);