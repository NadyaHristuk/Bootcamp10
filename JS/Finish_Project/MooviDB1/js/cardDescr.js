"use strict";

let title = document.querySelector(".card-descr_title");
let titleDesktop = document.querySelector(".card-descr_titleDesktop");
let description = document.querySelector(".card-descr_aboutfilm");
let dateRelease = document.querySelector(".card-descr_date");
let country = document.querySelector(".js-country");
let tagline = document.querySelector(".js-tagline");
let director = document.querySelector(".js-director");
let scenario = document.querySelector(".js-scenario");
let genres = document.querySelector(".js-genres");
let runtime = document.querySelector(".js-runtime");
let cover = document.querySelector(".js-cover");
let id = localStorage.getItem('id');

function getFilmByIdNataTs(id) {

  let API = `https://api.themoviedb.org/3/movie/${id}?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;

  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);
      cover.style.background = `
      url(https://image.tmdb.org/t/p/w185/${data.poster_path})`;
      cover.style.backgroundSize = "cover";
      cover.style.backgroundPosition = "center";
      cover.style.backgroundRepeat = "no-repeat";
      title.textContent = `${data.title} (${data.release_date.slice(0, 4)})`;
      titleDesktop.textContent = data.title;
      description.textContent = data.overview;
      dateRelease.textContent = data.release_date;
      let countryName = data.production_countries.reduce((acc, element) => {
        return (acc = acc + ` ${element.name},`);
      }, "");
      country.textContent = countryName.slice(0, -1);
      tagline.textContent = data.tagline;
      let genresArr = data.genres.reduce((acc, element) => {
        return (acc = acc + ` ${element.name},`);
      }, "");
      genres.textContent = genresArr.slice(0, -1);
      runtime.textContent = data.runtime;

      let APIdirector = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;
      fetch(APIdirector)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error fetching data");
        })
        .then(dataDirector => {
          console.log(dataDirector);
          let resultDirector = dataDirector.crew.find(item => item.job === "Director");
          director.textContent = resultDirector.name;
          let resultScenario = dataDirector.crew.find(item => item.job === "Screenplay");
          scenario.textContent = resultScenario.name;
        });

//         let APIimage = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;
//         fetch(APIimage)
//         .then(response => {
//           if (response.ok) return response.json();
//           throw new Error("Error fetching data");
//         })
//         .then(dataImage => {
          
//           console.log(dataImage.posters[0].file_path)
//           cover.style.background = `url(https://image.tmdb.org/t/p/w185/${dataImage.posters[0].file_path})`;
// cover.style.backgroundSize = "cover";
//       cover.style.backgroundPosition = "center";
//       cover.style.backgroundRepeat = "no-repeat";

//         })

      // cover.style.backgroundSize = "cover";
      // cover.style.backgroundPosition = "center";
      // cover.style.backgroundRepeat = "no-repeat";
        
    })
    .catch(err => console.error("Error:", err));
}

getFilmByIdNataTs(id);
// const returTop = document.querySelector('.menuTitle');
// function returnToTop (even){
//     even.preventDefault();
//     window.open("../index.html");
// }
// returTop.addEventListener('click', returnToTop)

// ======================== JS Viktor ===================================
let overview = document.querySelector('.review');
let name = document.querySelector('.name');
let setUsers = document.querySelector('.box_user');

function getFilmById(movie_id) {
  let API = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=adf30a859a361376a6b096834a0ecfd0&language=en-ru&page=1`;

  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);


 
     setUsers.innerHTML = data.results.reduce((acc , i) => acc + `<div class="box_user"><div class="user_Victor"><img class="icon_Victor" src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png">
     <p class=".name_Victor">${i.author}</p></div>
     <p class="review_Victor">${i.content}</p><div> `, '' );

      console.log(data.production_countries);



      }, "");
    }

getFilmById(id);

// ========================== Natalia Verb js ===============================//
// функция слайдера для актёров и кадров из фильма

// let arrowRight = document.querySelector(".left-actors");
let btnsActors = document.querySelectorAll(".btn-js");
let actorsList = document.querySelector(".actors-list");
let framesList = document.querySelector(".frame-list");
let btnsFrames = document.querySelectorAll(".btns-js");
let filmFrame = document.querySelector(".film-frame");


///класс для слайдера актеров и постов фильма

class Slider {

  constructor(actors, onChange) {
    this.actors = actors;
    this.actorsLength = this.actors.length - 1;
    this.activeIndexes = {
      min: 0,
      max: 3,
    };
    this.onChange = onChange;
    this.activeActors = [];
    this.setActiveActors();
  }

  setActiveActors() {
    this.activeActors = this.actors.filter((_, i) => {
      return i >= this.activeIndexes.min && i <= this.activeIndexes.max;
    });
    this.onChange(this.activeActors);
  }

  moveRight() {
    const {min, max} = this.activeIndexes;
    const incrementedMax = max + 1;
    if (incrementedMax > this.actorsLength) return;

    this.activeIndexes = {
      min: min + 1,
      max: max + 1,
    };
    this.setActiveActors();
  }

  moveLeft() {
    const {min, max} = this.activeIndexes;
    const decrementedMin = min - 1;
    if (decrementedMin < 0) return;

    this.activeIndexes = {
      min: min - 1,
      max: max - 1,
    };
    this.setActiveActors();
  }
}

///слайдер актеров

function renderActors(actors) {
  actorsList.innerHTML = '';
  actors.forEach(actor => {
    actorsList.innerHTML += getActorMarkup(actor);
  });
}

function getActorMarkup(actor) {
  return (
    `<div class="actor-item">
      <div class="photo-wrapper">
        <img src="https://image.tmdb.org/t/p/w185/${actor.profile_path}" alt="" class="actor-photo">
      </div>
      <p class="actor-name">${actor.name}</p>
    </div>`
  )
}

fetch(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=c2b5de19f08adc486af54dcc0c9946be`)
  .then(response => response.json())
  .then(data => {
    const actors = data.cast;
    const slider = new Slider(actors, renderActors);

    let moveActors = (event) => {
      const dataType = event.target.getAttribute('data-type');
      if (dataType === "right") {
        slider.moveRight()
      } else {
        slider.moveLeft();
      }
    };
    [...btnsActors].forEach(actor => actor.addEventListener('click', moveActors));
  });

///кадры из фильма

function renderFrame(frames) {
  console.log(frames);
  framesList.innerHTML = '';
  frames.forEach(frame => {
    framesList.innerHTML += getFrameMarkup(frame);
  });
}

function getFrameMarkup(frame) {
  return (
    `<div class="frame-item">
  <img src="https://image.tmdb.org/t/p/w185/${frame.file_path}" alt="" class="frame">
  </div>`
  )
}

fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const frames = data.posters;
    if (frames.length == 0) {
      filmFrame.style.display = 'none';
    }
    const sliderFrames = new Slider(frames, renderFrame);

    let moveFrames = (event) => {
      const dataType = event.target.getAttribute('data-typeFrame');
      if (dataType === "right") {
        sliderFrames.moveRight()
      } else {
        sliderFrames.moveLeft();
      }
    };
    [...btnsFrames].forEach(frame => frame.addEventListener('click', moveFrames));
  });


//// trailer

let trailer = document.querySelector(".wrapper-video");

let APItrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c2b5de19f08adc486af54dcc0c9946be&language=en-US`;
fetch(APItrailer)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  })
  .then(dataTrailer => {
    console.log(dataTrailer);
    console.log(dataTrailer.results[0].key);
    trailer.innerHTML = `<iframe class="trailer-video"
 src="https://www.youtube.com/embed/${dataTrailer.results[0].key}" frameborder="0" allowfullscreen class="video"></iframe>`


  });


