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

