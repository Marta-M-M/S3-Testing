// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(function (movie) {
    return movie.director
  });

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  //Usamos el método filter para obtener un nuevo array que contenga solo las peliculas cuyo director coincida con el valor de la variable directo
  let directorResult = movies.filter(movie => (movie.director === director));
  console.log("EXERCICE 2 ->", directorResult);
  return directorResult;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(directorResult, score) {
  console.log(directorResult);

  let filteredMovies = directorResult.filter(movie => movie.director === score);

  //Usamos el método map para recorrer el array directorResult y obtener un nuevo array solo con los scores de ese director
  let arrDirectorScore = filteredMovies.map(movie => movie.score);

  console.log("EXERCICE 3 ->", arrDirectorScore);
  //return arrDirectorScore;

  //Usamos el método Reduce para para sumar los valores dentro del arrDirectorScore y que retorne un único número
  let arrReducido = arrDirectorScore.reduce((acc, scoreActual) => (acc += scoreActual, acc), 0);
  console.log("Array con solo 1 numero", arrReducido);


  //Obtenemos la largada del arrDirectorScore para luego calcular el promedio
  let lengthArrDirectorScore = arrDirectorScore.length;
  console.log("Largada del arrDirectorScore", lengthArrDirectorScore);


  //Reducimos el resultado de arrReducido a 2 decimales pero retorna una cadena de texto que contiene el valor
  //Utilizamos el Number para pasar la cadena de texto a valor Número
  let arrReducidoCon2Decimales = Number(arrReducido.toFixed(2));
  console.log("Numero reducido con 2 decimales", arrReducidoCon2Decimales);

  //Calculamos el promedio
  let promedioScore = (arrReducidoCon2Decimales / lengthArrDirectorScore);
  //Lo pasamos a 2 decimales
  let promedioScoreCon2Decimales = Number(promedioScore.toFixed(2));
  console.log("Promedio de nota de pelicula", promedioScoreCon2Decimales);

  return promedioScoreCon2Decimales;

}

// Exercise 4:  Alphabetic order by title 
//Deberá de devolver el array solo con el nombre de las peliculas porque el array que retornemos tendrá 20 peliculas osea más de 20 items
function orderAlphabetically(movies) {

  //Creamos una cópia del array original movies con el operador de propagación [...]
  let orderResult = [...movies];
  //Ordenamos alfabéticamente por titulo con el método sort y lo pasamos a minúsculas para no tener problemas de orden con las mayúsculas
  orderResult.sort((f1, f2) => {
    if (f1.title.toLowerCase() < f2.title.toLowerCase()) {
      return -1;
    } else if (f1.title.toLowerCase() > f2.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  //Recorremos el array con el método map y limitamos los títulos a 20 carácteres con .slice
  orderResult = orderResult.map(movies => movies.title.slice(0, 20));

  //Limitamos el resultado a los 20 primeros elementos del array con .slice
  orderResult = orderResult.slice(0, 20);

  console.log("EXERCICE 4 ->", orderResult);
  return orderResult;
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let yearOrderResult = [...movies];
  //Ordenamos el array con .sort según los años y en caso de que sea el mismo año ordenar por titulos
  yearOrderResult.sort((f1, f2) => {
    if (f1.year < f2.year) {
      return -1;
    } else if (f1.year > f2.year) {
      return 1;
    } else {
      //si tenemos el mismo año ordenaremos alfabéticamente por título. localecompare compara las cadenas de texto y devuelve un resultado segun la primera sea mayor(<0), menor(>0) o igual (0)
      return f1.title.toLowerCase().localeCompare(f2.title.toLowerCase());
    }
  });

  // Aseguramos que siempre devolvemos un array incluso si solo hay un elemento
  yearOrderResult = Array.isArray(yearOrderResult) ? yearOrderResult : [yearOrderResult];

  console.log("EXERCICE 5 ->", yearOrderResult);
  return yearOrderResult;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  //Usamos el método filter para obtener un nuevo array que contenga solo las peliculas cuyo genero coincida con el valor de la variable genero
  let genreResult = movies.filter(movie => (movie.genre.includes(genre)));
  console.log("EXERCICE 6 ->", genreResult);

  // Calculamos la suma de las notas
  let totalRating = genreResult.reduce((sum, movie) => sum + movie.score, 0);

  // Calculamos la nota media dividiendo la suma por la cantidad de películas
  let averageRating = totalRating / genreResult.length;

  return Number(averageRating.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  //Creamos un nuevo array de peliculas
  let arrPeliculasDuracion = movies.map(movie => {
    //Dividimos la cadena duración en un array con 2 elementos (horas,minutos) con el método split
    //Convertimos cada elemento del array resultante de cadena a número con parseInt
    //Esto se almacena en hours que contendrá el nºhoras y minutes que contendrá el nº minutos
    let [hours, minutes] = movie.duration.split('h ').map(part => parseInt(part));
    //Convertimos las horas y los minutos anteriores a un formato de minutos totales
    //la expresión (minutes || 0) proporciona un valor 0 en caso de que no haya minutos incluidos
    let minutosTotales = hours * 60 + (minutes || 0);
    //Retornamos el nuevo objeto con la duración modificada a minutos
    return {...movie, duration: minutosTotales};
  });

  console.log("EXERCICE 7 ->", arrPeliculasDuracion);
  return arrPeliculasDuracion;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  //Clasificar filtrar por año
  let peliculaDelAnyo = movies.filter(movie => movie.year === year);
  //Utilizamos metodo reduce para comparar las puntuaciones de 2 peliculas(movie y maxMovie) y retornar la que tenga un valor más alto
  let mejorPelicula = peliculaDelAnyo.reduce((maxMovie, movie) => {
    return movie.score > maxMovie.score ? movie : maxMovie;
  });

  return [mejorPelicula];

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
