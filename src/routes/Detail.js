import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setFilm(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div className="dt__container">
        {loading ? (
          <div className="dt__loader">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="dt__film">
            <img className="dt__bg__img" src={film.background_image_original} />
            <img
              className="dt__img"
              src={film.large_cover_image}
              alt={film.title}
            />
            <div className="dt__film__data">
              <h1 className="dt__title">{film.title}</h1>
              <h2 className="dt__contents">
                {film.year} 년 · {film.runtime} 분<br />
                평점 : {film.rating} / 10 점<br />
                다운로드 횟수 : {film.download_count} 회<br />
                장르 :{" "}
                {film.genres.map((g) => (
                  <span key={g}>{g}, </span>
                ))}
                <br />
                <p>
                  {film.description_full.length > 500
                    ? `${film.description_full.slice(0, 750)}...`
                    : film.description_full}
                </p>
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
