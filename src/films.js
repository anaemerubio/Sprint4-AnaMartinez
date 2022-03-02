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

  let averageScore = 0;

  let result = array.reduce((previousValue, currentValue) => {

    if (currentValue.director === director) {
      previousValue ++;
      averageScore += currentValue.score;
    }

    return previousValue;

  }, 0 );

  result = Number((averageScore/result).toFixed(2));
/*   console.log("EXERCICE 3 ->", result); */
  return result;

}
 
function orderAlphabetically(array) {
  
  let title = array.map((film) => film.title);
  let result = title.sort().slice(0, 20);

/*   console.log("EXERCICE 4 ->", result); */
  return result;

}

function orderByYear(array) {

  // spread
  let filmsToOrder = [...array];

  let result = filmsToOrder.sort((yearA, yearB) => {

    // Order by year
    if (yearA.year < yearB.year) {
        return -1;

    } else if (yearA.year > yearB.year) {
        return 1;

    // If year ==, compare title
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

function hoursToMinutes(array, duration) {

/*     let filmsDuration = array.filter((film) => film.duration === duration);

    let result = filmsDuration.reduce((acc, cur) => {
      return;
    })

    console.log("EXERCICE 7 ->", result);
    return result; 
 */
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

    // code

/*     console.log("EXERCICE 8 ->", result);
    return result;  */
  
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
