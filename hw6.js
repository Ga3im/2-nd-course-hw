//Задание 1
const hw1 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < hw1.length; index++) {
   const element = hw1[index];  
   if (element == 10) {
    console.log(`Задание 1: ${hw1[index]}`);
    break;
   }
}

// Задание 2
const hw2 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < hw2.length; index++) {
    const element = hw2[index];  
    if (element == 4) {
     console.log(`Задание 2: ${index}`);
     break;
    }
 }

 // Задание 3
const hw3 = [1, 3, 5, 10, 20];
const home3 = hw3.join(' ');
console.log(`Задание 3: ${home3}`);

// Задание 4
const hw4 = [1];
for (let i = 0; i < 3; i++) {
	hw4[i] = [1]; 
	for (let j = 0; j < 2; j++) {
		hw4[i].push(1); 
	}
}
console.log(`Задание 4: ${hw4}`);

// Задание 5
const hw5 = [1, 1, 1];
hw5.push(2, 2, 2);
console.log(`Задание 5: ${hw5}`);

// Задание 6
const hw6 =  [9, 8, 7, 'a', 6, 5];
const home6 = hw6.sort();
const hom = home6.pop();
console.log(`Задание 6: ${home6}`);

//Задание 7 
 const hw7 = [9, 8, 7, 6, 5];

 if (hw7.includes(Number(prompt(`Угадай число`)))) {
     alert(`Угадал`)
 } else {
     alert(`Не угадал`)
 }

//Задание 8
// Дан массив
const hw8 = ['abcdef'];
const h8 = hw8.join("");
const ho8 = h8.split("");
const hom8 = ho8.reverse();
const home8 = hom8.join("");
console.log(`Задание 8: ${home8}`);
  
 // дана строка
const h = 'abcdef';
const le = h.split("");
const hoe8 = le.reverse();
const h88 = hoe8.join("");
console.log(`Задание 8: ${h88}`);

// Задание 9 
const hw9 = [[1, 2, 3],[4, 5, 6]];
const home9 = [...hw9];
console.log(`Задание 9: ${home9}`);

//Задание 10
function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
const hw10 = [];
for (let index = 0; index < 5; index++) {
  hw10[index] = Random(1, 10);
}
const home10 = hw10;
console.log(`Задание 10: ${home10}`);
for (let index = 0; index < home10.length; index += 2 ) {
  console.log(home10[index] + home10[index + 1]);
}

// Задание 11
const hw11 = [];
for (let index = 0; index < 5; index++) {
  hw11[index] = Random(1, 20);
}
console.log(hw11);
const home11 = hw11.map(hw11 => hw11**2);
console.log(`Задание 11: ${home11}`);

// Задание 12
 const hw12 = ['helloworld'];
 const ho12 = hw12.join("");
 const hh12 = ho12.split("");
 console.log(`Задание 12: ${hh12.length}`);

 // Задание 13
 const hw13 = [];
 for (let index = 0; index < 4; index++) {
  hw13[index] = Random(1, 15);
}
console.log(hw13);
for (let index = 0; index < hw13.length; index++) {
  if (hw13[index] != 0) {
    hw13[index] = hw13[index] * -1;
  } 
}
console.log(`Задание 13: ${hw13}`);

// Задание 14
const hw14 = [];
for (let index = 0; index < 10; index++) {
  hw14[index] = Random(1, 10);}
  const home14 = hw14.filter(index => index %  2 == 0);
  const h14 = hw14.filter(index => index %  2 == 1);
 
 console.log(`Задание 14: ${hw14}`);
 console.log(`Четный массив: ${home14}`);
 console.log(`Нечетный массив: ${h14}`);

// Задание 15
const hw15 = [];
for (let index = 0; index < 6; index++) {
  hw15[index] = Random(1, 10);}
  const sum = hw15.reduce((total, number) => total + number, 0);
  console.log(`Задание 15: ${hw15}`);
  console.log(`Сумма: ${sum}`);
