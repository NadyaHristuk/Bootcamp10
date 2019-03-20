// // 'use strict'
// // let body = document.body;
// // body.style.textAlign = 'center';
// // let title = document.createElement('h2');
// // title.classList.add('red-text');
// // title.textContent = 'Hello';
// // title.style.textAlign='center'
// // let div = document.querySelector('.first');
// // div.append(title);
// // div.innerHTML += '<ul class="myList"><li><p>end endOchen</p></li><li><p>stranno</p></li></ul>'
// // let myList = document.querySelector('.myList');
// // myList.style.listStyle = 'none';
// // myList.style.color = 'blue';

// // div.insertAdjacentHTML('beforebegin', '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis.</p>')
// // let text = document.lastElementChild;
// // text.classList.add('green');
// // let textGreen = document.querySelector('.green');
// // textGreen.style.color = 'green';

// // let image = document.createElement('img');
// // image.src='https://i.ytimg.com/vi/5530I_pYjbo/maxresdefault.jpg';
// // div.append(image);
// // image.classList.add('img-style');
// // image.style.display = 'block';
// // image.style.margin = 'auto';
// // image.style.backgroundColor='aqua';
// // image.style.padding = '20px';

// /*
//   Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */
// // let list = document.querySelector('.list');
// // list.firstElementChild.style.color = 'red';
// // list.lastElementChild.style.color = 'blue';

// /*
//   Есть список с классом .size-filter из произвольного 
//   количества чекбоксов, каждый из которых содержит 
//   размер одежды в фильтре.
  
//   Напишите функцию collectInputData(inputs), которая
//   принимает 1 параметр inputs - массив тех инпутов
//   у которых состояние checked.
  
//   Возвращает массив значений атрибута value.
// */
// // let arrInput = document.querySelectorAll('input[checked]');
// // console.log(arrInput);

// // function collectInputData(inputs){
// //    return Array.from(inputs).map(element => element.value);  
// // }
// // console.log(collectInputData(arrInput));

// // <div class="movie">
// //   <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
  
// //   <div class="movie__body">
// //     <h2 class="movie__title">The Godfather</h2>
// //     <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
// //       would-be killers, launching a campaign of bloody revenge.</p>

// //     <p class="movie__date">Released: 1972-03-14</p>
// //     <p class="movie__rating">Rating: 8.6</p>
// //   </div>
// // </div>

// /*
//   Создайте функцию createMovieCard(), которая 
//   создает и возвращает DOM-узел карточки кинофильма.
  
//   Разметка с классами есть на вкладке HTML.
//   Стили на вкладке CSS.
  
//   Используйте createElement для создания узлов.
//   Добавьте классы и атрибуты.
// */

// // function createMovieCard() {
// //     let movie = document.querySelector('.movie');
// //     movie.innerHTML = `<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
  
// //   <div class="movie__body">    
// //   <h2 class="movie__title">The Godfather</h2>
// //   <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
// //     would-be killers, launching a campaign of bloody revenge.</p>
    
// //      <p class="movie__date">Released: 1972-03-14</p>
// //      <p class="movie__rating">Rating: 8.6</p>
// //       </div>`
//     // let elem = document.createElement('img');
//     // elem.classList.add('movie__image');
//     // elem.src='http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//     // elem.alt='movie image';
    
//     // let elemTextContainer = document.createElement('div');
//     // let textMain = document.createElement('h2');
//     // textMain.classList.add('movie__title')
//     // let textP1 = document.createElement('p');
//     // textP1.classList.add('movie__description')
//     // let textP2 = document.createElement('p');
//     // textP2.classList.add('movie__date')
//     // let textP3 = document.createElement('p');
//     // textP3.classList.add('movie__rating');
    
//     // textMain.textContent = 'The Godfather';
//     // textP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     // textP2.textContent = 'Released: 1972-03-14';
//     // textP3.textContent = 'Rating: 8.6';
//     // elemTextContainer.append(textMain,textP1,textP2,textP3);
//     // movie.append(elem, elemTextContainer);
    
// // }
// // createMovieCard(); 

// /*
//   В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
//   Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
//   Функция создает столько div, сколько указано в num и возвращает их в одном
//   общем контейнере. После чего необходимо повесить результат работы функции
//   в div с id="#root"
  
//   Каждый div:
//     - Имеет случайный rgb цвет фона
//     - Размеры самого первого div - 30px на 30px.
//     - Каждый следующий div после первого, должен быть шире и выше предыдущего
//       на 10px
// */

// // function randomColor() {
// //     let result = '';
// //     let max = 255;
// //     let a = Math.floor(Math.random() * (255 + 1) );
// //     let b = Math.floor(Math.random() * (255 + 1) );
// //     let c = Math.floor(Math.random() * (255 + 1) );
// //     return result = `rgb(${a}, ${b}, ${c})`;
// // }
// // console.log(randomColor());

// // let userInput = +prompt("Enter a number");

// // function randomColor() {
// //     let result = '';
// //     let max = 255;
// //     return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
// // }
// // console.log(randomColor());

// // function createBoxes(num) {
// //     let container = document.createElement('div');
// //     let mainDiv = document.querySelector('#root');
// //     let i = 1;
// //     let width = 30;
// //     let height = 30;

// //     do {
// //         // let divs = document.createElement("div");
// //         // divs.style.backgroundColor = randomColor();

// //         // divs.style.width = width +"px";
// //         // divs.style.height = height + "px" ;

// //         container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
// //         i++;
// //         width += 10;
// //         height += 10;

// //     } while (i <= num);

// //     mainDiv.append(container);
// // }

// // createBoxes(userInput);


// // let root = document.querySelector('#root');
// // root.setAttribute('style', ' display: grid; grid-template-columns: repeat(4, 1fr)');
// // function createBoxes(mun, color) {
// //     for (let i = 0; max = mun, i < max; i++){
// //         let dIv = document.createElement('div');
// //         let size = 30 + i* 10;
// //         let red = color(0, 255);
// //         let green = color(0, 255);
// //         let blue = color(0, 255);
// //         dIv.setAttribute('style', `background-color: rgb(${red},${green},${blue}); height: ${size}px; width: ${size}px`);
// //         root.append(dIv);
// //     }
// //     console.log(root);
// // }

// // function randomColor(min, max) {
// //     const minValue = min;
// //     let maxValue = max;
// //     return Math.floor(Math.random()* (maxValue - minValue + 1)) + minValue;
// // }


// /*
//   1. Модифицируйте готовую функцию createPostCard() из задания 
//     номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
//     чтобы она принимала объект post с данными для заполнения полей 
//     в карточке.
      
//   2. Создайте функцию createCards(posts), которая принимает массив
//     объектов-карточек, вызывает функцию createPostCard(post) столько
//     раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
//     массив DOM-элементов всех постов.
    
//   3. Повесьте все посты в какой-то уже существующий DOM-узел.
// */


// const posts = [
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-1.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/nature",
//       title: "Post title 2",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-2.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 3",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-3.com'
//     }
//   ];

// //   function createCard(array){
// //     for(let item of array){
// //         createPostCard(item);
// //         console.log(item)
// //     }
// // }
// // function createPostCard(post){
// //     let card = document.querySelector('#root');
// //     card.innerHTML += `<img src = '${post.img}'> <h2 class='title'>${post.title}</h2> <p>${post.text}</p><a href = '${post.link}'>${post.link}</a>`;
// // }
// // createCard(posts);

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector('.images')

// function srcAlert (event) {
//         const target = event.target;
//         alert(target.src);
//         console.log(event);
// }

// images.addEventListener('click', srcAlert);

// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> target.nodeName === "IMG"? alert(target.src):null);

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list');

// function deleteUl(event){
//     event.preventDefault();
//     let target = event.target;
//     if(target.nodeName !=='BUTTON')return;
//     target.parentNode.remove();
// }
// list.addEventListener('click', deleteUl);

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const inputList = document.querySelector('.input-list');
//   const inputs = document.querySelectorAll('input');

//   let inputType = () => {


//     inputs.forEach(el => {
//       if(el.value.length > 0){
//         if (Number(el.dataset.length) === el.value.length){
//           el.classList.add('valid');
//         }else
//           el.classList.add('invalid');
//       }
//       })

//   };



//   inputList.addEventListener('focusout', inputType);
  

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const mess = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.addEventListener('focus', render);
// function render(){
//     mess.textContent = "Input is in focus!";
// };

// function textInput(){
//     text.textContent = `Current input value:${input.value}`;
// };
// input.addEventListener('input', textInput);

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// // let modalHiden = document.querySelector('.modal-hidden');
// let clouse = document.querySelector('[data-action="close-modal"]');

// modal.addEventListener('click',clous);
// openModal.addEventListener('click',open);

// function open (){
//     modal.classList.remove('modal-hidden');
// }

// function clous (event){
//     if(event.target === clouse || event.target === modal){
//         modal.classList.add('modal-hidden')
//     }
// }

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

// const galleryItems = [
//     { preview: './img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
//     { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
//     { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
//     { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
//     { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
//     { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
//   ];
  
  
  /*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
    чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
    аналогичный заданию выше.
    
    При создании экземпляра конструктор получает:
      - items - список элементов для preview
      - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
      - defaultActiveItem - номер активного элемента preview по умолчанию
      
    Тогда создание экземпляра будет выглядеть следующим образом.
  */
  
//   new Gallery({
//     items: galleryItems,
//     parentNode: document.querySelector('.image-gallery'),
//     defaultActiveItem: 1
//   });
  
  /* Далее плагин работает в автономном режиме */
  // - При клике в элемент preview, необходимо подменить src тега img внутри fullview
    // на url из data-атрибута выбраного элемента.


// class Gallery {
//     constructor (items, parentNode, defaultActiveItem){
//         this.items = items;
//         this.parentNode = parentNode;
//         this.defaultActiveItem = defaultActiveItem;
//     }  
        
//     get insertGallery (){
//         let i = document.createElement('ul');
//         i.classList.add('preview');   
      
//        let addImage = this.items.reduce((pic,i) => pic + `<li><img src = ${i.preview}></li>`, "");
//        i.innerHTML = addImage; 
//         this.parentNode.appendChild(i);

//     }
// }

//   let imgIt = new Gallery(galleryItems,document.querySelector('.image-gallery'),1);

//   imgIt.insertGallery;




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
