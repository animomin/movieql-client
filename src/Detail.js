import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

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
      return (
        <React.Fragment>
          <img src={medium_cover_image} alt={title} title={title} />
          <h4>{title}</h4>
          <h5>
            {rating} / {genres.join(",")} / {language}
          </h5>
          <p>{description_intro}</p>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;
