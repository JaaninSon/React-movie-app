import { useState, useEffect } from "react";
import "../styles/Home.css";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <>
      {loading ? null : (
        <h1 className="page__title">
          R<p>eact Movie</p>
        </h1>
      )}

      <div className="container">
        {loading ? (
          <div className="loader">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Home;
