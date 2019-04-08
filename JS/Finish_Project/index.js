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


// 
//========================= Natalia Chas =================
//======== now playing =========

let apiNew = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU';
let bgNew = document.querySelectorAll('.js-bgNew');
let textNew = document.querySelectorAll('.textNew');

fetch(apiNew)
.then(response => response.json())
.then(data => {
   let res = data.results.slice(0,4);
   let i = 0;
   bgNew.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
   console.log(res);
   
}
);

//===== top 100 ======

let apiTop = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1';

let bgTop = document.querySelectorAll('.js-bgTop');
let textTop = document.querySelectorAll('.textTop');

fetch(apiTop)
.then(responce => responce.json())

.then(data => {
   let res = data.results.slice(0,4);
   let i = 0;
   bgTop.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
});

//========= upcoming ============

let apiUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1';

let bgUpcoming = document.querySelectorAll('.js-bgUpcoming');
let textUpcoming = document.querySelectorAll('.textUpcoming');

fetch(apiUpcoming)
.then(responce => responce.json())

.then(data => {
   let res = data.results.slice(0,4480);
   
   let i = 0;
   bgUpcoming.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
   console.log(res);
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



// ================================ Andrii LocalStorage =========================
let getableMainPoster = document.querySelectorAll('.js-favorite'),
    newGetableMainPoster = Array.from(getableMainPoster),
    setableSVG = document.querySelectorAll('.iconStarTrue'),
    newSetableSVG = Array.from(setableSVG),
    wiewSelectedFavorites = document.querySelector('#idishka3'),
    resultArr = [],
    filteredArr = [];

window.addEventListener("load", function () {
    if (localStorage.getItem('Favorite', resultArr) === null) {localStorage.setItem('Favorite', 'Name:');}
    if (localStorage.key !== null) {
        filteredArr = localStorage.getItem('Favorite', resultArr).split(',');
        newSetableSVG.forEach((element) => {
            if (filteredArr.includes(element.parentElement.parentElement.id)) {
                element.style.fill = 'yellow';
            }
        });
    }
});

function setFavorite(event) {
    event.preventDefault();
    resultArr = filteredArr;
    setableSVG.forEach(function (element) {
        if ((event.target === element) && (!resultArr.includes(event.target.parentElement.parentElement.id))) {
            element.style.fill = 'yellow';
            resultArr.push(event.target.parentElement.parentElement.id);
            localStorage.setItem('Favorite', resultArr)
        } else if ((event.target === element) && (resultArr.includes(event.target.parentElement.parentElement.id))) {
            resultArr.splice(resultArr.indexOf(event.target.parentElement.parentElement.id), 1);
            localStorage.setItem('Favorite', resultArr);
            element.style.fill = 'white';
        }
    });
}

function filterByFavorite() {
    filteredArr = localStorage.getItem('Favorite', resultArr).split(',');
    newSetableSVG.forEach((element) => {
        if (!filteredArr.includes(element.parentElement.parentElement.id)) {
            element.parentElement.parentElement.style.display = 'none';
        }
    })
}

newGetableMainPoster.forEach(elem => elem.addEventListener('click', setFavorite));
wiewSelectedFavorites.addEventListener('click', filterByFavorite);


// ================================ Natalia Ts ===============

// document.querySelector('.js-openFilm').addEventListener('click', getId);
newGetableMainPoster.forEach(elem => elem.addEventListener('click', getId));
function getId(event) {


    let target = event.target; 
    if (target.hasAttribute('id')) {
        let filmId = target.getAttribute('id');
        
        localStorage.setItem('id', filmId);
        window.open("./MooviDB1/cardDescr.html");

        // getFilmById(filmId);
        // console.log(filmId);
// myWindow.document.write("<p>This window's name is: " + filmId + "</p>");
}}

// ================================ Natalia Ts (search) ===============
//добавить тег form в html
//добавить css

let headerInput = document.querySelector(".headerInput");
let headerInputForm = document.querySelector("#headerInputForm");
let topFilms = document.querySelector(".topFilms");
let mainPage = document.querySelector(".main_wrapper--relative");
let inputValue;
let filmOfSerch;

function searchfilm() {
  event.preventDefault();
  inputValue = headerInput.value;
  if(inputValue) {
  console.log(inputValue);
  topFilms.innerHTML = "";
  let API = `https://api.themoviedb.org/3/search/multi?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&query=${inputValue}&page=1&include_adult=false`;
  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);
      if (data.results.length !== 0) {
        for (let el of data.results) {
          let img = "../images/bigCow.png";
          if (el.media_type === "movie" || el.media_type === "tv") {
            if (el.poster_path !== null) {
              img = `https://image.tmdb.org/t/p/w185/${el.poster_path}`;
              mainPage.style.display = "none";
              topFilms.innerHTML += `
                 <div class="pictureCard ">
                 <div class="pictureCover js-filmOfSearch" id="${el.id}"></div>
                 <img width="100%" src='${img}'></img>
                 <svg class="iconStarCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="20px" height="20px" ><g><g>
                 <g>
                    <path class="iconTop" width="20px" height="20px" d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" data-old_color="#9BFF00" fill="#FEFFFD"/>
                 </g>
              </g><g>
                 <g>
                    <path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" data-old_color="#9BFF00" fill="#FEFFFD"/>
                 </g>
              </g></g> </svg>
  
  
              <svg class="iconBellCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px"  viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g><g>
              <g>
                 <polygon class="iconTop" points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125     94.35,187.425 58.65,299.625   " data-original="#000000" data-old_color="#FCF9F9" fill="#FFFDFD"/>
              </g>
           </g></g> </svg> 
                    <p class="textCard">${el.title || el.name}</p>
                 </div>
             `;
            } else {
              mainPage.style.display = "none";
              topFilms.innerHTML += `
                 <div class="pictureCard">
                 <div class="pictureCover js-filmOfSearch" id="${el.id}"></div>
                 <img width="100%" src='${img}'></img>
                 <svg class="iconStarCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="20px" height="20px" ><g><g>
                 <g>
                    <path class="iconTop" width="20px" height="20px" d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" data-old_color="#9BFF00" fill="#FEFFFD"/>
                 </g>
              </g><g>
                 <g>
                    <path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" data-old_color="#9BFF00" fill="#FEFFFD"/>
                 </g>
              </g></g> </svg>
  
  
              <svg class="iconBellCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px"  viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g><g>
              <g>
                 <polygon class="iconTop" points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125     94.35,187.425 58.65,299.625   " data-original="#000000" data-old_color="#FCF9F9" fill="#FFFDFD"/>
              </g>
           </g></g> </svg> 
                    <p class="textCard">${el.title || el.name}</p>
                 </div>
             `;
            }
          }
        }
      } else {
        mainPage.style.display = "none";
        topFilms.innerHTML = `<div class="requestNotFound" height="200px" background-color="blue" ><p>По Вашему запросу ничего не найдено!</p></div>`;
      }
      //=========слушатель для отрисовки карточки фильма из списка выведенных при поиске
      filmOfSerch = Array.from(document.querySelectorAll(".js-filmOfSearch"));
      filmOfSerch.forEach(elem => elem.addEventListener("click", getId));
    });} else {mainPage.style.display = "block"}
}

function clearHeaderInput() {
  if (headerInput.value) {
    headerInput.value = "";
  }
}

headerInput.addEventListener("click", clearHeaderInput);
headerInputForm.addEventListener("submit", searchfilm);