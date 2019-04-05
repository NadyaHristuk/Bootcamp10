"use strict";
// function menu
document.querySelector('main').addEventListener('click', () => {menuBtn.className = menuIconClosed;
  menuContainer.className = menuContClosed;});
const menuBtn = document.getElementById('js-menuBtn');
const menuContainer = document.getElementById('js-menuContainer');

const menuIconClosed = "menu-icon closed"; 
const menuIconOpened = "menu-icon opened"; 
const menuContClosed = "menu-container closed"; 
const menuContOpened = "menu-container opened"; 

menuBtn.addEventListener('click', function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
  })



// ========= serials Nata Chasovskikh ============

//=========== popular ======

let apiSerialsPopular =
  "https://api.themoviedb.org/3/tv/popular?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsPopular = document.querySelectorAll(".js-bgSerialsPopular");
let textSerialsPopular = document.querySelectorAll(".textSerialsPopular");

fetch(apiSerialsPopular)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);
    console.log(res);

    let i = 0;
    bgSerialsPopular.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
  // ----------------------------- Juli Modal ------------------------//

    ;(function() {
      function isValue(el, arr) {
          for (let i = 0; i < arr.length; i++) {
                  if (el.value) {
                  el.classList.add("active");
              } else {
                  el.classList.remove("active");
              }
          }
      }
      
      let inputs = document.querySelectorAll(".js_input");
      let newArr = Array.from(inputs);
      let close = document.querySelector('.js_close_icon');
      let form = document.querySelector('.js_form');
      let formWrapper = document.querySelector('.js_container_wrapper');
      let thanksMessageModal = document.querySelector('.js_thanks_message_modal');
      let openModal = document.querySelectorAll('.js-open_modal');
      let bntOkModal = document.querySelector('.js_submit_ok');
  
      let formContent = document.querySelector('.js_form__content');
  
      newArr.forEach(element => element.addEventListener("change", () => isValue(element, newArr)));
  
      function sendForm() {
          event.preventDefault();
          showThanksMessage();
      }
  
      close.addEventListener('click', function() {
          formWrapper.classList.add('close_modal');
      });
      bntOkModal.addEventListener('click', function() {
          formWrapper.classList.add('close_modal');
      });
      
      function showThanksMessage() {
          thanksMessageModal.classList.add('active');
          formContent.classList.add('hide');
      }
      
      openModal.forEach(element => element.addEventListener('click', function() {
          formWrapper.classList.remove('close_modal');
          thanksMessageModal.classList.remove('active');
          formContent.classList.remove('hide');
          newArr.forEach(element => element.value = '');
      }));
  
      form.addEventListener('submit', sendForm);
  
    })();
  });

// =========== TopRated ======

let apiSerialsTopRated =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsTopRated = document.querySelectorAll(".js-bgSerialsTopRated");
let textSerialsTopRated = document.querySelectorAll(".textSerialsTopRated");

fetch(apiSerialsTopRated)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);

    let i = 0;
    bgSerialsTopRated.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
    console.log(res);
  });

//=========== OnTheAir ======

let apiSerialsOnTheAir =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsOnTheAir = document.querySelectorAll(".js-bgSerialsOnTheAir");
let textSerialsOnTheAir = document.querySelectorAll(".textSerialsOnTheAir");

fetch(apiSerialsOnTheAir)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);

    let i = 0;
    bgSerialsOnTheAir.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
    console.log(res);
  });


