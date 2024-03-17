function gameMonth() {
    monthNumber = prompt('Введите номер месяца')
           if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
              alert('Зима');
           } else if (monthNumber >= 3 && monthNumber <= 5) {
              alert('Весна');
           } else if (monthNumber >= 6 && monthNumber <= 8) {
              alert('Лето');
           } else if (monthNumber >= 9 && monthNumber <= 11) {
              alert('Осень');
           }
             else {
                alert('Нет такого месяца');
             }
        }


function gameRemember() {
   const game2 = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
   game2.sort(() => Math.random() - 0.5);
   let gamestr = game2.join(" ");
   alert(`Запомни следущие слова: ${gamestr}`);
   let useranswer = prompt('Введите слова по порядку');
   if (useranswer.toLowerCase() === gamestr.toLowerCase()) {
      alert('Молодец, Ты угадал');
   }
   else{
      alert('Не угадал, Попробуйте еще раз');
   }
}
