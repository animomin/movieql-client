import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 9) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      title
      rating
      genres
      language
      medium_cover_image
      description_intro
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;
