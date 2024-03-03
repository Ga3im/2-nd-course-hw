//Задание 1
function less (a, b) {
    if (a >= b) {
        console.log(`'Меньшее число ${b}'`);
    }
    else{
        console.log(`'Меньшее число ${a}'`);
    }
}
less(20, 2);

//Задание 2
function module () {
    let usernum = prompt("Введите число");
    if (usernum %  2 == 0) {
      return  console.log('Число четное');
    }
    else if (usernum %  2 == 1) { 
      return  console.log('Число нечетное');
    }
    else{
        return  console.log('Это не число');
    }
}
module();

//Задание 3

function square () {
   let sqr = prompt('Введите число');
   sqr = sqr**2;
   return console.log(sqr);
}
square();

//Задание 4
function userage() {
    age = prompt('Сколько тебе лет');
    if (age >= 13 ) {
        return  console.log('Добро пожаловать!');
      }
      else if (age < 0 ) { 
        return  console.log('Вы ввели неправильное значение');
      }
      else{
          return  console.log('Привет, друг!');
      }
}
userage();

//Задание 5
function task5 () {
    num1 = prompt();
    num2 = prompt();
    if (isNaN(num1) || isNaN(num2)  ) {
       return console.log('Одно или оба значения не являются числом');
    }
    else{
        mult = num1 * num2;
        return console.log(mult);
    }
}
task5();

//Задание 6
function cube() {
    n = prompt('Введите любое число');
    if (isNaN(n) ) {
        return console.log('Переданный параметр не является числом');
    }
    else{
        n = n ** 3;
        return console.log(`n в кубе равняется ${n} `);
    }
}
cube();

//Задание 7
const cricle1 = {
    radius : 5,
    area : getArea,
    perimeter : GetPerimeter
}
const cricle2 = {
    radius : 4,
    area : getArea,
    perimeter : GetPerimeter
}
const pi = 3.1415;

function getArea() {
    return pi * this.radius ** 2;
}

function GetPerimeter() {
    return 2 * this.radius * pi;
}

console.log(`Площадь круга: ${cricle1.area()}`);
console.log(`Периметер круга: ${cricle1.perimeter()}`);
console.log(`Площадь круга: ${cricle2.area()}`);
console.log(`Периметер круга: ${cricle2.perimeter()}`);


