// Задание 1
let password = String('пароль');
let userpassport = prompt('Введите пароль');
if (userpassport === password) { 
    console.log('Пароль введен верно');
}
else 
console.log('Пароль введен неправильно');

//Задание 2
let c = prompt('Введите число');
if (c > 0 && c < 10) {
    console.log('Это число в пределах от 0 до 10');
}
else{
    console.log('Это число не в пределах от 0 до 10');
}

// Задание 3
let e = prompt('Введите первое число');
let d = prompt('Введите второе число');
if(e >= 100 || d>=100 ){
console.log('Один из чисел больше 100');
}
else {
    console.log('Ни один из чисел не больше 100');
}

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже: 
let a1 = Number(a); 
let b1 = Number(b);
alert (a1 + b1);

//Задание 5
let monthNumber = prompt('Введите число месяца')

switch (monthNumber) {
    case '1': 
        console.log('Январь, Зима')
        break;
    case '2': 
        console.log('Февраль, Зима')
        break;
    case '3': 
        console.log('Март, Весна')
        break; 
    case '4': 
        console.log('Апрель, Весна')
        break; 
    case '5': 
        console.log('Май, Весна')
        break; 
    case '6': 
        console.log('Июнь, Лето')
        break; 
    case '7': 
        console.log('Июль, Лето')
        break; 
    case '8': 
        console.log('Август, Лето')
        break; 
    case '9': 
        console.log('Сентябрь, Осень')
        break; 
    case '10': 
        console.log('Октябрь, Осень')
        break; 
    case '11': 
        console.log('Ноябрь, ОСень')
        break; 
    case '12': 
        console.log('Декабрь, Зима')
        break; 

    default: 
    console.log('Нет такого месяца')
        break;
}