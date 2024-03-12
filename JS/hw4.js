//Задание 1
let i = 0
while (i < 2) {
    i++;
    console.log('Привет')
}

//Задание 2
let q = 1;
do {
    console.log(q);
    q++;
} while (q <= 5);

//Задание 3
let w = 7;
do {
    console.log(w);
    w++;
} while (w <= 22);

//Задание 4
let obj = {
    'Коля' :'200 $',
    "Вася" : '300 $',
    "Петя" : '400 $'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
//Задание 5
let num = 0;
for (let n = 1000; n >= 50  ; n = n / 2 ) {
    num++;
}
console.log(num);
//Задание 6

for (let weekday = 5; weekday <= 31; weekday += 7 ) {
    console.log(`'Сегодня пятница, ${weekday}-е число. Необходимо подготовить отчет.'`);
}
