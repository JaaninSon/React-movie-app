import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Movie.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className="movie__box">
      <img className="movie__img" src={coverImg} alt={title} />
      <div className="movie__data">
        <h2>
          <Link to={`/movie/${id}`} className="movie__title">
            {title}({year})
          </Link>
        </h2>
        <p className="movie__summary">
          {summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}
        </p>
        <ul className="movie__genres">
          {genres.map((g) => (
            <li key={g} className="genres__genre">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
