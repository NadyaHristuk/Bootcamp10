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

// // const addBtn = document.querySelector('button[data-action="add"]');
// // const removeBtn = document.querySelector('button[data-action="remove"]');
// // const btn = document.querySelector("#btn");

// // const handleClick = () => {
// //   alert("CLICK EVENT LISTENER ALERT!");
// // };

// // const handleAdd = 

// // addBtn.addEventListener("click", handleAdd);


// // removeBtn.addEventListener("click", () => {
// //   btn.removeEventListener("click", handleClick);
// // });

// // const user = {
// //   name: 'Mango',
// //   showName() {
// //     console.log(this);
// //     // this будет ссылаться на button
// //     // если использовать showName как callback
// //     // console.log(`My name is: ${this.name}`);
// //     // тут undefined так как поля name нету у button
// //   }
// // }

// // Представим что у нас есть кнопка с классом js-btn
// // Выберем ее и повесим на нее слушатель клика
// // const btn = document.querySelector('.js-btn');

// // user.showName(); //работает
// // btn.addEventListener('click', user.showName); // не работает
// // btn.addEventListener('click', user.showName.bind(user)); // работает

// const btn = document.querySelector("#btn");

// // event - это и есть обьект события который автоматически 
// // передается первым аргументом, мы можем называть его как угодно, 
// // хоть qwerty, но чаще всего он называется или e, evt или event

// const handleClick = event => {
//   console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

//   console.log("event type: ", event.type); // event type:  click

//   // будет window, так как мы используем стрелочную функцию, 
//   // которая использует внешний контекст 
//   // Если использовать обычную функцию то this будет самим элементом 
//   // button и равен currentTarget
//   console.log("this: ", this); 
//   console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
// };

// btn.addEventListener("click", handleClick);

// ------------------------ 8-1 ---------------------------//
// /Задача №1
// //Алерт по нажатию на кнопку.
// //При нажатии на кнопку "Нажми на меня"
// //выводиться сообщение 'Привет!
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
//  <button >Нажми на меня!</button>
// </body>
// </html>
// const x = document.querySelector('button');
// const handClick = () => alert ('Привет!');
// x.addEventListener('click', handClick);
//---------------------
let inp = document.querySelector('input');
let button = document.querySelector('button');
let enteredButton = () => {  
  alert(inp.value);
}
button.addEventListener('click', enteredButton)