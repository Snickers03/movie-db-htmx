const movieDatas = [
  { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
  { title: "The Godfather", year: 1972, rating: 9.2 },
  { title: "The Godfather: Part II", year: 1974, rating: 9.0 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },

  // more movies...
];

const getAverageRating = (movies) => {
  const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
  return totalRating / movies.length;
};

console.log(getAverageRating(movieDatas)); // 9.125
