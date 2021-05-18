import React, { useState, useEffect } from "react";

//Styled components
import styled from "styled-components";

//Importing Movie State
import { MovieState } from "../MovieState";

//Importing Use History from router dom
import { useHistory } from "react-router-dom";

//Framer motion thing
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const filteredMovie = movies.filter((state) => state.url === url);
    setMovie(filteredMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Movie
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2>{movie.title}</h2>

            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <img src={movie.secondaryImg} alt="" />
        </Movie>
      )}
    </>
  );
};

//Award Component

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <p>{description}</p>
    </AwardStyle>
  );
};

//Styled components
const Headline = styled.div`
  position: relative;
  min-height: 90vh;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50% -30%);
  }
`;
const Movie = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    font-weight: 700;
    color: white;
  }
  h2::after {
    content: "";
    display: block;
    height: 0.5rem;
    width: 100%;
    background: #ccc;
  }
  img {
    padding-top: 2rem;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  justify-content: space-around;
  align-items: center;
`;
const AwardStyle = styled.div`
  padding: 2rem;
  h3 {
    font-size: 1.2rem;
  }
  h3::after {
    display: block;
    content: "";
    background: #23d997;
    height: 0.5rem;
    width: 100%;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

export default MovieDetails;
