//Задание 1
const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(peoples.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  }));

//Задание 2
function isPositive(arr) {
    // писать код 
    if (arr > 0) {
        return arr;
    }
    }
    function isMale(arr) {
    // писать код тут
    
    if (arr.gender === 'male')
        return arr;
    }
    function filter(array, ruleFunction) {
    // писать код тут
    const arr = [];
    for (let index = 0; index < array.length; index++) {
        if (ruleFunction(array[index])) {
             arr.push((array[index])); 
        }
         
    }
    return arr;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));
    

//Задание 3
  let timer30 = setInterval(() => console.log(new Date), 3000);
setTimeout(() => { clearInterval(timer30); console.log('30 секунд прошло'); }, 30000);

// Задание 4
function delayForSecond(callback) {
    // Код писать можно только внутри этой функ
    setTimeout( callback, 1000)
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

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
delayForSecond(() => sayHi('Глеб'));

