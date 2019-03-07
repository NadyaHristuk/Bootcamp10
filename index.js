'use strict';

// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.

// let a = 2;
// let pow = Math.pow(a,10);

// console.log('pow =', pow);




// 31) Найдите квадратный корень из 245.

// let b;
// b = Math.sqrt(245);
// console.log('b:',b);

// 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// let c;
// c = Math.sqrt(379);
// console.log(c.toFixed(0))
// console.log(c.toFixed(1))
// console.log(c.toFixed(2) )

// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны

// let numb = 587;

// let sqrt = Math.sqrt(numb);

// console.log(Math.ceil(sqrt));
// console.log(Math.floor(sqrt));

// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// let a = 5;
// let b = 3;
// let c = a % b;
// if(c === 0) {
//     alert('delitsa')
// }
// else{

//    alert('delitsa s ostatkom -' +c) 
// }


// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.


// let nmbrs = [4, -2, 5, 19, -130, 0, 10];
// let sorted = nmbrs.sort();
// // console.log(sorted)
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10))

// let lowest = 0;
// let biggest = 0;
// for(const index of nmbrs){
//     if(index <lowest){
//         lowest = index;
//     } else if (biggest < index) {
//         biggest = index;
//     }
   
// }
// console.log(lowest);
// console.log(biggest)

// 35) Выведите на экран случайное целое число от 1 до 100.

// let num;
// num =Math.ceil((Math.random()*100)).toFixed(0)
// console.log(num);

// let num;
// num =Math.floor(Math.random()*100)+1
// console.log(num);


// let min;
// let max
// let random = min+Math.random()*(max+1-min);
// random = Math.floor(random);

// 36) Необходимо написать программу, где бы пользователю предлагалось
//  ввести число на выбор: 1, 2 или 3, а программа должна сказать,
//  какое число ввёл пользователь: 1, 2, или 3.
// let number = Number(prompt('vvedite chislo ot 1 do 3'));
// alert(`введено ${number}`);

// 37 ) Необходимо написать программу, 
// где бы пользователю предлагалось ввести число  1. 
// Если пользователь ввёл число 1, программа должна вывести 
// сообщение: "Вы ввели число 1". Если пользователь ввёл другое число,
//  программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// const num = Number(prompt('Введите число 1'));
// if(num === 1) {
//     alert(`Вы ввели число ${num}`)
// } else {alert("Вы ввели число не равное 1")
// }
// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.

// let num = Number(prompt("Введыть число"));
// num % 2 === 0? console.log("Chet") : console.log("NeChet");
// ;




// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// let arr = [88.88, 76.76, 77.77, 66.66]
// let sum = 0;
// for (let i = 0; i< arr.length; i++){
//     sum += arr[i]
// }
// console.log(parseInt(sum));
// console.log(parseFloat(sum));
// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let i = prompt('Enter your number');
// switch (Number(i)) {
//     case 1: 
//         alert('Winter');
//         break;
//      case 2: 
//         alert('Spring');
//         break;
//      case 3: 
//         alert('Summer');
//         break;
//      case 4: 
//         alert('Autumn');
//         break;
//      default: 
//      alert('Not a season');
//     } 
// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = prompt('Enter number')
// if (a <= 0 && a > 5){
//     alert('True')
// }else{
//     alert('false')
// }

// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const a = -3;
// let result;
// if(a === 0 || a === 2) {
//     result = a + 7;
// } else {
//     result = a / 10;
// }
// alert(result);


// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.



// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).


// *На цикл в цикле.* 
// 12) Выведите на экран таблицу умножения (как в школьной тетради).

// for(let i = 1; i<= 9; i++) {
//     for(let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// 13) Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Показать решение.


// const b = [];
// for(let i = 1; i <= 10; i++) {
//     let a = '';
//     for(let j = 1; j <= i; j++) {
//         a = a + String(i);
//     }
//     b.push(a);
// }
// console.log(b);

// 14) Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const str = [];
// for(let i = 1; i <= 5; i++ ){
//     let string = '';
//     for( let j = 1; j <= i; j++){
//         string = string + 'x';       
//         }
//         str.push(string);
// }
// console.log(str);        


// *Многомерные массивы*
// 15) Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr=[[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for(let i of arr){
//     for(let j of i){
//         sum += j
//     }
// }
// console.log(sum)
// 16) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. /////Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for(let i of arr){
//     for(let j of i){
//         for(let g of j){
//             sum = sum + g;
//         }
//     }
// }
// // console.log(sum);
// const hotel = {  
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name = "Resort Hotel", stars = 5, status = "empty" } = {
//                                                             name : "Resort Hotel",
//                                                             stars: 5,
//                                                             capacity: 100,
//                                                           }

//                                 A = A+1

  //  const name = "Resort Hotel", 
  //  const stars = 5, 
  //  const status = "empty"
  //==========================================
  
//   let Kate = {
//     name: 'Kate',
//     surname: 'Hrybkova',
//     age: '24',
//  }
 let Lora = {
    name: 'Lora',
    surname: 'Plushkina',
    age: '28',
 }
//  let Richard = {
//     name: 'Richard',
//     surname: 'Robinson',
//     age: '50',
//     }

//  function DoubleTrable(){
//   console.log(`${this.surname} ${this.name} is: ${this.age} HO-HO`)};

// const t = DoubleTrable.bind(Richard);
// t();

// const Manager = function(name = "manager", sales = 0) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager(undefined, 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave'));  // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave'));  // Manager Poly sold Microwave
// console.log(Lora); // 12

// const user = {
//   name: 'Mango',
//   age: 2
// };

// const animal = Object.create(user)

// console.log(animal); // function
//=============================================================================

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// function Account (login, email){
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function(){
//   console.log(`login: ${this.login}, Email: ${this.email}`);
  
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// console.log(Account);

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

const builder = new StringBuilder('.');

builder.append('^'); 
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value; // '^.^'

builder.pad('='); 
console.log(builder.value; // '=^.^='
