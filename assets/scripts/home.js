const peliculas = [
  {
    id: 1,
    title: "Volver al futuro",
    summary:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 2,
    title: "Tiburón III",
    summary:
      "A giant thirty-five-foot shark becomes trapped in a SeaWorld theme park and it's up to the sons of police chief Brody to rescue everyone.",
    rating: 3.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2QwYjhiMzQtN2RiYS00MzgxLThmNzItMmJlNmMyMmQyYTA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 3,
    title: "Batman Begins",
    summary:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    rating: 8.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 4,
    title: "Batman v Superman",
    summary:
      "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    rating: 6.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 5,
    title: "Mujer Maravilla 1984",
    summary:
      "Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
    rating: 5.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
];

peliculas.forEach((pelicula) => {
  let colorRating = "green";
  if (pelicula.rating < 7 && pelicula.rating > 4) {
    colorRating = "orange";
  } else if (pelicula.rating <= 4) {
    colorRating = "red";
  }

  const movieCard = `<a href="/movie.html" class="movie-card">
          <img src="${pelicula.poster}" alt="${pelicula.title}">
          <div class="movie-card-info">
            <h3>${pelicula.title}</h3>
            <span class="movie-card-rating text-${colorRating}">${pelicula.rating}</span>
          </div>
          <div class="movie-card-overview">
            <h2>Reseña</h2>
            <p>${pelicula.summary}</p>
          </div>
          </a>`;

  document
    .getElementById("movieContainer")
    .insertAdjacentHTML("beforeend", movieCard);
});
