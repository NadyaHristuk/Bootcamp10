// // 'use strict'


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
// let inp = document.querySelector('input');
// let button = document.querySelector('button');
// let enteredButton = () => {  
//   alert(inp.value);
// }
// button.addEventListener('click', enteredButton)


//Задача №5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:

// let buttonClick = document.querySelector('button');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');

// let funkButn = () => {
//   let buf = input1.value;
//   input1.value = input2.value;
//   input2.value = buf;
// }

// buttonClick.addEventListener('click', funkButn);


//Задача №6
// Задача. При нажатии на кнопку - поменяется ее текст:


//Задача №8
// Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
// let ul = document.querySelector('.sss');
// let li = document.querySelector('.qqq');
// let ul2 = document.querySelectorAll('.rrr');
// let ul2 = document.querySelectorAll('.rrr1');
// let ul2 = document.querySelectorAll('.rrr2');
// let a = document.querySelector('.zzz'); 

// function al_ert () {alert ('main ul')};
// function al_ert1 () {alert ('child ul')};
// function al_ert2 () {alert ('ul in li')};
// function al_ert3 () {alert ('href')};

// ul.addEventListener('click',al_ert);
// li.addEventListener('click',al_ert1);
// ul2.addEventListener('click',al_ert2);
// a.addEventListener('click',al_ert3);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Если все ок, то вызываем resolve и передаем данные
    resolve("Data passed into resolve function :)");

    // Если что-то не так, вызваем reject и передаем ошибку
    // reject("Error passed into reject function :(")
  }, 2000);
});

// выполнится мгновенно
console.log("BEFORE promise.then");

const onResolve = data => {
  console.log("INSIDE promise.then - onResolve");
  console.log(data); // "Data passed into resolve function :)"
};

const onReject = error => {
  console.log("INSIDE promise.then - onReject");
  console.log(error); // "Error passed into reject function :("
};

promise.then(
  // будет вызвана через 2 секунды, если обещание выполнится успешно
  onResolve,
  // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
  onReject
);

// выполнится мгновенно
console.log("AFTER promise.then");
