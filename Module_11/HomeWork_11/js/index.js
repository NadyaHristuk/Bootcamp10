'use strict'

/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

let btnFilter = document.querySelector('#sub')
let btnReset = document.querySelector('#res') // двойное нажатие активирует функцию создания галереи заново, после фильтрации.
console.log(btnReset);
let container = document.querySelector('.wrapper')

// Функция создает галерею ноутбуков
function createLaptopsGallery () {
  event.preventDefault()
  container.innerHTML = '';
  let data = {
    data: laptops,
  }
  const source = document.querySelector('#laptops-temp').innerHTML.trim()
  const template = Handlebars.compile(source);
  const mark = template(data);
  container.insertAdjacentHTML('afterbegin', mark);
}

// Функция создает галерею ноутбуков после фильтрации
function createFilteredGallery (arrfilt) {
  let data2 = {
    data: arrfilt,
  }
  const source2 = document.querySelector('#laptops-temp').innerHTML.trim()
  const template2 = Handlebars.compile(source2);
  const mark2 = template2(data2);
  container.insertAdjacentHTML('afterbegin', mark2);
  }

// Функция неудачи, в случае если ноутбука с параметрами фильтрации в списке нет.
function sorry () {
  let p = document.createElement('p');
  p.textContent = "Извините, ноутбука с такими параметрами в списке товаров нет."
  p.classList.add('sorry')
  container.append(p)
}


// Функция фильтрации ноутбуков. 
  function filteredLaptops () {
    event.preventDefault()
    container.innerHTML = '';
    let inputs =[...document.querySelectorAll('.form > section > ul > li > label > input')] 
    
    const filter = { size: [], color: [], release_date: [] }
    
      for (let el of inputs) {
        if (el.name === 'size'&& el.checked){
          filter.size.push(+el.value) 
        } else if (el.name === 'color'&& el.checked) {
          filter.color.push(el.value) 
        } else if (el.name === 'release_date'&& el.checked){
          filter.release_date.push(+el.value)
        }
      }
  if (filter.size.length > 0 || filter.color.length > 0 || filter.release_date.length > 0) {
            if (filter.size.length !== 0 && filter.color.length !==0 && filter.release_date.length !==0) {
                let arr1 = [];
                for (let el of filter.size) {
                  for (let ad of laptops)
                  if (el === ad.size)
                  arr1.push(ad)
                }
                let arr2 =[];
                for (let el of filter.color) {
                  for (let ad of arr1)
                  if (el === ad.color)
                  arr2.push(ad)
                }
                let arr3 =[];
                for (let el of filter.release_date) {
                  for (let ad of arr2)
                  if (el === ad.release_date)
                  arr3.push(ad)
                }
                  if (arr3.length > 0) {
                    createFilteredGallery(arr3)
                  } else {
                    sorry()
                }
            } else if (filter.size.length !== 0 && filter.color.length !==0 && filter.release_date.length === 0) {
              let arr1 = [];
              for (let el of filter.size) {
                for (let ad of laptops)
                if (el === ad.size)
                arr1.push(ad)
              }
              let arr2 =[];
              for (let el of filter.color) {
                for (let ad of arr1)
                if (el === ad.color)
                arr2.push(ad)
              }  
                if (arr2.length > 0) {
                  createFilteredGallery(arr2);
                } else {
                  sorry()
                }  
            } else if (filter.size.length !== 0 && filter.color.length === 0 && filter.release_date.length !== 0) {
              let arr1 = [];
              for (let el of filter.size) {
                for (let ad of laptops)
                if (el === ad.size)
                arr1.push(ad)
              }
              let arr3 =[];
              for (let el of filter.release_date) {
                for (let ad of arr1)
                if (el === ad.release_date)
                arr3.push(ad)
              } 
                if (arr3.length > 0) {
                  createFilteredGallery(arr3);
                } else {
                  sorry()
                }  
            } else if (filter.size.length === 0 && filter.color.length !== 0 && filter.release_date.length !== 0) {
              let arr2 =[];
              for (let el of filter.color) {
                for (let ad of laptops)
                if (el === ad.color)
                arr2.push(ad)
              }
              let arr3 =[];
              for (let el of filter.release_date) {
                for (let ad of arr2)
                if (el === ad.release_date)
                arr3.push(ad)
              }
                if (arr3.length > 0) {
                  createFilteredGallery(arr3);
                } else {
                  sorry()
                }  
            } else if (filter.size.length !== 0 && filter.color.length === 0 && filter.release_date.length === 0){
              let arr1 = [];
              for (let el of filter.size) {
                for (let ad of laptops)
                if (el === ad.size)
                arr1.push(ad)
              } 
                if (arr1.length > 0) {
                  createFilteredGallery(arr1);
                } else {
                  sorry()
                }  
            } else if (filter.size.length === 0 && filter.color.length !== 0 && filter.release_date.length === 0){
              let arr2 =[];
              for (let el of filter.color) {
                for (let ad of laptops)
                if (el === ad.color)
                arr2.push(ad)
              }
                if (arr2.length > 0) {
                  createFilteredGallery(arr2);
                } else {
                  sorry()
                }  
            } else if (filter.size.length === 0 && filter.color.length === 0 && filter.release_date.length !== 0){
            let arr3 =[];
              for (let el of filter.release_date) {
                for (let ad of laptops)
                if (el === ad.release_date)
                arr3.push(ad)
              }
                if (arr3.length > 0) {
                  createFilteredGallery(arr3);
                } else {
                  sorry()
                }  
            } 
          }
  } // да, я понимаю, что написано очень длинно. Сокращу/минимизирую со временем.
  
  window.addEventListener('DOMContentLoaded', createLaptopsGallery)
  btnFilter.addEventListener('click', filteredLaptops)
  btnReset.addEventListener('dblclick', createLaptopsGallery)







  