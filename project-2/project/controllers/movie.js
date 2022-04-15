const movies = require("../data/movies.json");

const getAll = ({ id, movie_title, movie_genre, release_year,budget,language,rating }) =>
  new Promise((resolve) => {
    let result = Array.from(movies);

    if (id) {
      result = result.filter((item) => item.id === Number(id));
    }

    if (movie_title) {
      result = result.filter((item) => item.movie_title === movie_title);
    }

    if (movie_genre) {
      result = result.filter((item) => item.movie_genre === movie_genre);
    }

    if (release_year) {
      result = result.filter((item) => item.release_year === Number(release_year));
    }
    if (budget) {
      result = result.filter((item) => item.budget ===budget);
    }

    if (language) {
      result = result.filter((item) => item.language === language);
    }

    if (rating) {
        result = result.filter((item) => item.rating === Number(rating));
      }
    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const movie = movies.find((movie) => movie.id === id);

    if (movie) {
      resolve({ code: 200, data: JSON.stringify(movie) });
    } else {
      resolve({
        code: 404,
        data: { message: `No movie found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};