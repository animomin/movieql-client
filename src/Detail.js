import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({ loading, data, error }) => {
      if (loading) return "loading";
      if (error) return "error";
      const {
        title,
        rating,
        genres,
        language,
        medium_cover_image,
        description_intro
      } = data.movie;
      const { suggestions } = data;
      return (
        <React.Fragment>
          <Container>
            <Image src={medium_cover_image} />
            <span>
              <Title>{title}</Title>
              <Paragraph bold>
                {rating} / {genres.join(",")} / {language}
              </Paragraph>
              <Paragraph>{description_intro}</Paragraph>
            </span>
            <Title>Suggested</Title>
            <MovieContainer>
              {suggestions.map(movie => {
                const { id, title, rating, medium_cover_image } = movie;
                return (
                  <Movie
                    key={id}
                    id={id}
                    title={title}
                    rating={rating}
                    poster={medium_cover_image}
                  />
                );
              })}
            </MovieContainer>
          </Container>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;
