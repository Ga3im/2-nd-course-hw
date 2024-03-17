//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  }));

//Задание 3
  let timer30 = setInterval(() => console.log(new Date), 3000);
setTimeout(() => { clearInterval(timer30); console.log('30 секунд прошло'); }, 30000);

// Задание 4
function delayForSecond(callback) {
   callback();
   setTimeout(() => {callback}, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'));