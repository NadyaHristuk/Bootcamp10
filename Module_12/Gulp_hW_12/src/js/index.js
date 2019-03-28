// /*
//   Напишите приложение для хранения url веб-страниц в виде карточек-закладок.

//   Реализуйте следующий функционал:
//     - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы

//     - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"

//     - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой

//     - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
//       создания списка карточек. Форма уже есть в HTML при загрузке страницы.

//     - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
//         * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
//           всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
//         * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
//           добавляется в коллекцию.

//     - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.

//     - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике
//       на кнопку происходит удаление.

//     - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
//       все карточки-закладки которые были во время последнего его посещения. Используйте localStorage

let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('input');
let add = document.querySelector('.add');




let cardTemplate = document.querySelector('.cardTemplate').innerHTML.trim();

let template = Handlebars.compile(cardTemplate);

let addSite = function(e) {
e.preventDefault();

  let objSite = { title: input.value };
console.log(objSite)
  let markup = template(objSite);
  wrapper.insertAdjacentHTML('afterbegin', markup);
  
  let del = document.querySelector('.del');
  del.addEventListener('click', delSite);
  let delSite = function (e){
    e.preventDefault();
    console.log(e)
e.target.parentNode.remove();

}

};



add.addEventListener('click', addSite);


