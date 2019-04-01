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

function getFilmById(id) {
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

getFilmById(163);
