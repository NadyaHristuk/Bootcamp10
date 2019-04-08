// // function menu

const menuBtn = document.getElementById('js-menuBtn');
const menuContainer = document.getElementById('js-menuContainer');

const menuIconClosed = "menu-icon closed";
const menuIconOpened = "menu-icon opened";
const menuContClosed = "menu-container closed";
const menuContOpened = "menu-container opened";

menuBtn.addEventListener('click', function () {
   if (menuBtn.className == menuIconClosed) {
      menuBtn.className = menuIconOpened;
      menuContainer.className = menuContOpened;
   } else if (menuBtn.className == menuIconOpened) {
      menuBtn.className = menuIconClosed;
      menuContainer.className = menuContClosed;
   }
});


// --------------------------- New Kate -------------------------//
let arrowLinkLeft = document.querySelector('[data-action=left]');
let arrowLinkRight = document.querySelector('[data-action=right]');
let seialsOnTheAir = document.querySelector('.seialsOnTheAir');
let pagesLinkOnTheAir = document.querySelectorAll('.pagesLink');



let actPageOnTheAir = 1;




let getPageSerials = function(evt){
   let event = evt.preventDefault();
 
   if(evt.currentTarget.dataset.action === 'right'){
      actPage =  Number(actPage)+1;
      getFilmCards(actPage);
   } else if(evt.currentTarget.dataset.action === 'left'){
      actPage =  Number(actPage)-1;
      getFilmCards(actPage);
   } 
   else if(evt.target.textContent){
      actPage = Number(evt.target.textContent);
      getFilmCards(actPage);
   } 
   

}
let getFilmCards = function(i){
   let apiseialsOnTheAir = `https://api.themoviedb.org/3/tv/on_the_air?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=${i}`;
   seialsOnTheAir.innerHTML = '';
   fetch(apiseialsOnTheAir)
   .then(response => response.json())
   .then(data => {
      for (let el of data.results) {
         // console.log(el);

         seialsOnTheAir.innerHTML += `
               <div class="pictureCard">
               <div class="pictureCover"></div>
               <img width="100%" src='https://image.tmdb.org/t/p/w185/${el.poster_path}'></img>
               <svg class="iconStarCard js-open_modal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="20px" height="20px" ><g><g>
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
         



                  <p class="textCard">${el.name} (${el.first_air_date.slice(0, 4)})</p>
               </div>
           `;
      }
    // ----------------------------- Juli Modal ------------------------//
         ;
         (function () {
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

            close.addEventListener('click', function () {
               formWrapper.classList.add('close_modal');
            });
            bntOkModal.addEventListener('click', function () {
               formWrapper.classList.add('close_modal');
            });

            function showThanksMessage() {
               thanksMessageModal.classList.add('active');
               formContent.classList.add('hide');
            }

            openModal.forEach(element => element.addEventListener('click', function () {
               formWrapper.classList.remove('close_modal');
               thanksMessageModal.classList.remove('active');
               formContent.classList.remove('hide');
               newArr.forEach(element => element.value = '');
            }));

            form.addEventListener('submit', sendForm);

         })();
   });

}



for(let el of pagesLinkOnTheAir){
   el.addEventListener('click', getPageSerials);
}
arrowLinkLeft.addEventListener('click', getPageSerials);
arrowLinkRight.addEventListener('click', getPageSerials);
window.addEventListener('load', getFilmCards(actPageOnTheAir));