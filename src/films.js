function getAllDirectors(array) {

  let result = array.map((film) => film.director);
  
/*   console.log("EXERCICE 1 ->", result); */
  return result;

}

function getMoviesFromDirector(array, director) {

  let result = array.filter((film) => film.director === director);

/*   console.log("EXERCICE 2 ->", result); */
  return result;
  
}

function moviesAverageOfDirector(array, director) {

  let moviesDirector = array.filter((film) => film.director === director);

  let averageScore = moviesDirector.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0 );

  averageScore = Number(averageScore/moviesDirector.length.toFixed(2));
/*   console.log("EXERCICE 3 ->", averageScore); */
  return averageScore;

}

function orderAlphabetically(array) {
  
  let title = array.map((film) => film.title);

  let result = title.sort().slice(0, 20);

/*   console.log("EXERCICE 4 ->", result); */
  return result;

}

function orderByYear(array) {

  let filmsToOrder = [...array];

  let result = filmsToOrder.sort((yearA, yearB) => {

    if (yearA.year < yearB.year) {
        return -1;

    } else if (yearA.year > yearB.year) {
        return 1;

    } else {
        if (yearA.title < yearB.title){
            return -1;
        } else {
            return 1;
        }
    }
  });

/*   console.log("EXERCICE 5 ->", result); */
  return result; 

}

function moviesAverageByCategory(array, category) {

  let filmsCategory = array.filter((element) => {
    if(element.genre.includes(category) && element.score != false ){
      return element;
    }
  })

  let result = filmsCategory.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0 );
 
  result = result/filmsCategory.length;

/*   console.log("EXERCICE 6 ->", result); */
  return result;

}

function hoursToMinutes(array) {

  let films = array.map( element => {
    return {...element};
  });

  let result = films.map((film) => {
      film.duration = film.duration.replace(/[^0-9]+/g, '');
      film.duration = (film.duration.charAt(0)*60) + Number(film.duration.substr(1));
      return film;
  });

/*   console.log("EXERCICE 7 ->", result); */
  return result;

}

function bestFilmOfYear(array, year) {

  let films = [...array];
  let sameYearFilms = films.filter(element => element.year === year);

  let filmsClassed = sameYearFilms.sort((filmA, filmB) => {
      if (filmA.score < filmB.score) {
          return 1;
      } else if (filmA.score > filmB.score) {
          return -1;
      } else {
          return 0;
      }
  });

  let result = [];
  result.push(filmsClassed[0]);
  
/*   console.log("EXERCICE 8 ->", result); */
  return result;
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
