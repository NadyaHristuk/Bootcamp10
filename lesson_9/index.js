/* =================================9==================================== */
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];

// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');
// start.addEventListener('click', changColor);
// stop.addEventListener('click', stopColor);
// let inter;

// function changColor(){
//   inter = setInterval(() => {
//     let rand = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[rand];
//     console.log(rand);    
//   }, 1000);
//   start.disabled = true;
  
// };

//   function stopColor(){
//     clearInterval(inter);
//     start.disabled = false;
//   }

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
// let date = new Date (time)
//  let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// if(seconds < 10){
//   seconds = '0' + seconds;
// }
// let milisec = parseInt((date.getMilliseconds()) / 100);

//   return `${minutes} : ${seconds}. ${milisec}`;
// }
// console.log(getFormattedTime(Date.now()))
// console.log(
//   getFormattedTime(1523621052858)
// ); // 04:12.8

// console.log(
//   getFormattedTime(1523621161159)
// ); // 06:01.1

// console.log(
//   getFormattedTime(1523621244239)
// ); // 07:24.2

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };
/*
* Вспомогательные функции
*/
/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
// let date = 0;
// let timer1 = 0;
// function updateClockface(elem, time) {
//   console.log(`tttttttttttt:${elem}`)
//   // timer.startTime = date - timer.deltaTime;
//   // Используйте функцию getFormattedTime из задания #1
//   timer1 +=100;
//   elem.textContent = getFormattedTime(timer1);
// };
// function getFormattedTime (dater){
//   date = new Date (dater);
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if(seconds < 10){
//     seconds = '0' + seconds;
//   }
//   let milisec = parseInt((date.getMilliseconds()) / 100);
//   return `${minutes} : ${seconds}. ${milisec}`;
//   // console.log(`${minutes} : ${seconds}. ${milisec}`);
// };
// function startTimer() {
//   // timer.startTime = date;
//   console.log(`qqq:${date}`);
//   setInterval(() => {updateClockface(clockface,date);
//   }, 1000)
// };
// function stopTimer() {

// };
// startBtn.addEventListener('click', startTimer);
// stopTimer.addEventListener('click', stopTimer)
/*
* Подсветка активной кнопки
*/
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }

 /*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

// const DELAY = 1000;
// const quantity = 100;

// function processOrder(order){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!isNaN(order)){
//         if(order <= quantity){          
//           resolve("Ваш заказ готов!")
//         }else resolve("К сожалению на складе не достаточно товаров!");
//       }else reject("Некорректный ввод!");
//     },DELAY/2)
//   }) 
// };

// Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!


/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/
// let startBtn = document.querySelector('.js-start');

class Stopwatch {
  constructor (elem) {
    this.elem = elem;
    this.button = null;
    this.startTime = null;
    this.deltaTime = null;
    this.intervalFunction = null; 
  }

  get createTimer() {
    this.elem.innerHTML = '<div class="stopwatch"><p class="time js-time">00:00.0</p><button class="btn js-start">Start</button><button class="btn js-take-lap">Lap</button><button class="btn js-reset">Reset</button></div><ul class="laps js-laps"></ul>';
    this.button = document.querySelector('.js-start');
  }

  get startTimer() {
    this.button.addEventListener('click',() => clickButton(this.startTime, this.button, this.intervalFunction, this.deltaTime, this.startTime));

    function clickButton (start, button, interval, deltaTime, startTime) {
      start === null ? start = Date.now() : start = (Date.now() - start);
  
      function toogleAttr(elem) {
        if(elem.dataset.action === 'true') {
          elem.dataset.action = !elem.dataset.action
        } else {
          elem.setAttribute("data-action", true);
        }
        elem.innerHTML = elem.dataset.action === 'true' ? "Pause" : "Continue";
      }
  
      function myTimer(elem, delta, start) {
        if(!elem) {
          elem = setInterval(function() {
            delta = (Date.now() - start);
          }, 100);
        }
      }
  
      function pauseMyTimer() {
        if(interval) {
          clearInterval(interval);
        }
        interval = null;
      }
  
      toogleAttr(button);
  
      button.dataset.action === 'true' ? myTimer(interval, deltaTime, startTime) : pauseMyTimer(interval);
    }

  }

}


let test = document.querySelector('.timer');
let test2 = new Stopwatch(test);


test2.createTimer;
// let listener = document.querySelector(".js-start");
// listener.addEventListener('click', test2.startTime);
test2.startTimer;
