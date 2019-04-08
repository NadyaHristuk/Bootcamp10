'use strict';


/*
  К pen уже подключен Handlebars.
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 },
];

const source = document.querySelector('.items-template').innerHTML.trim();
const tamplate = Handlebars.compile(source);
const markup = tamplate(listItems);

const list = document.querySelector('.list');

list.insertAdjacentHTML('beforeend', markup);














































// console.log(Handlebars);


// const poly = {
//     name: 'Poly',
//     age: 2,
//     img: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
// };

// const source = document.querySelector('#cat-card').innerHTML.trim();

// const tamplate = Handlebars.compile(source);

// const markup = tamplate(poly);

// const root = document.querySelector('#root');

// root.insertAdjacentHTML('afterbegin', markup)


// const catList = document.querySelector('.cats-list');




// const cats = [
//     {name: 'Polly', age: 4, joyful: true, traits: ['fuzzy', 'cute']},
//     {name: 'Spot', age: 2, joyful: true, traits: ['fuzzy', 'cute']},
//     {name: 'Frisky', age: 3, joyful: false, traits: ['fuzzy', 'cute']},
//     {name: 'Biscuite', age: 3, joyful: true, traits: ['fuzzy', 'cute']},
//     {name: 'Polly', age: 5, joyful: false, traits: ['fuzzy', 'cute']},
// ]


// const source = document.querySelector('.cat-list-tamplate').innerHTML.trim(); // 


// const tamplate = Handlebars.compile(source); // передаем в функция для компилирования

// const markup = tamplate(cats);

// catList.insertAdjacentHTML('beforeend', markup);

// console.log(markup);



