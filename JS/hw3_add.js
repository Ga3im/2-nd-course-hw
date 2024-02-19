//Задание 7
let snum = prompt ('Введите любое число');
num = snum % 2;
if (num === 1 ) {
   alert('Число нечетное');
}
else if (num === 0) {
   alert('Число четное');
}
else{
    alert('Это не число');
}

//Задание 8
let clientOS = prompt('Если iOS то нажми на 0, если Android то нажми на 1');
switch (clientOS) {
    case '0':
        alert('Установите версию приложения для iOS по ссылке');
        break;

        case '1':
            alert('Установите версию приложения для Android по ссылке');
            break;

    default:
        alert('Нет такого');
        break;
}