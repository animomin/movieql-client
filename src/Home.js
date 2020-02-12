import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "something happend";
        return data.movies.map(movie => {
          const { id, title, rating, medium_cover_image } = movie;
          return (
            <Movie
              key={id}
              id={id}
              rating={rating}
              title={title}
              poster={medium_cover_image}
            />
          );
        });
      }}
    </Query>
  </Container>
);

export default Home;
