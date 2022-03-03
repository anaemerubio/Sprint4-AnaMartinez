function getAllDirectors(array) {

  // Devuelve un array nuevo con los resultados de la llamada a la función indicada
  let result = array.map((film) => film.director);
  
/*   console.log("EXERCICE 1 ->", result); */
  return result;

}

function getMoviesFromDirector(array, director) {

  // Nuevo array con los elementos que cumplan la condición de la llamada
  let result = array.filter((film) => film.director === director);

/*   console.log("EXERCICE 2 ->", result); */
  return result;
  
}

function moviesAverageOfDirector(array, director) {

  // Filtrar peliculas de un director
  let moviesDirector = array.filter((film) => film.director === director);

  // Guardar todas las notas de sus peliculas
  let averageScore = moviesDirector.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0 );

  // Notas de las peliculas / número de películas = media de directos | toFixed(2) -> 2 decimales
  averageScore = Number(averageScore/moviesDirector.length.toFixed(2));
/*   console.log("EXERCICE 3 ->", averageScore); */
  return averageScore;

}

function orderAlphabetically(array) {
  
  // almacenar titulos en una variable
  let title = array.map((film) => film.title);

  // sort() ordena los elementos de una array, como son strings lo hace alfabéticamente
  // slice() devuelve elementos seleccionados de una array,
  //en este caso los primeros 20 elementos
  let result = title.sort().slice(0, 20);

/*   console.log("EXERCICE 4 ->", result); */
  return result;

}

function orderByYear(array) {

  // Spread operator, es como .slice() copia arrays
  let filmsToOrder = [...array];

  // Ordenar films por orden
  let result = filmsToOrder.sort((yearA, yearB) => {

    // si A < B bajamos una posición en el indice
    if (yearA.year < yearB.year) {
        return -1;

    // si B < A subimos una posición en el indice
    } else if (yearA.year > yearB.year) {
        return 1;

    // Si es el mismo año comparamos los títulos y ordenamos alfabéticamente (ya que usamos sort())
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

  // Si una peliculas tiene
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

  // includes ? para saber qué tiene una array



}

function bestFilmOfYear(array, year) {
  
  // Spread
  let films = [...array];

  // Array solo con las pelis que sean del mismo año
  let sameYearFilms = films.filter(element => element.year === year);

  // Comparar score de las peliculas que sean del mismo año
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
  // solo meter en la array el primer elemento de las pelis ordendas (La mejor peli)
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
