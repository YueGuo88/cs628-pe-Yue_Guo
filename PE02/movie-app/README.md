Input
The program takes input in the form of a list of movies, where each movie object contains properties such as title, genre, and release year.

const movies = [
  { title: 'Avengers: Endgame', genre: 'Action', releaseYear: 2019 },
  // ...
];

Process
The program uses React and functional components to create a MovieList component. It utilizes state and event handlers to manage the selected genre and handle user interactions.

const [selectedGenre, setSelectedGenre] = useState('All Genres');

const handleGenreChange = (e) => {
  setSelectedGenre(e.target.value);
};

const handleMovieClick = (title) => {
  alert(`Clicked on movie: ${title}`);
};

The selected genre is used to filter the movies and display only the movies that match the selected genre. The unique genres are extracted from the movie list to populate the dropdown menu options.

Output
The program outputs the movie list, filtered based on the selected genre. The movies are displayed as separate list items or cards, with the movie title, genre, and release year.

{filteredMovies.map((movie, index) => (
  <li key={index}>
    <h3>{movie.title}</h3>
    <p>Genre: {movie.genre}</p>
    <p>Release Year: {movie.releaseYear}</p>
  </li>
))}

The output is a dynamic and interactive movie list that allows users to filter by genre and provides movie details upon clicking.

By following the input-process-output model, the program allows users to input their movie preferences, applies the necessary logic to filter and display the movies accordingly, and provides an organized and user-friendly output of the movie list.