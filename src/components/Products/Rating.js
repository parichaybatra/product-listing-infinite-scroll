import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";

const Rating = (props) => {
  return (
    <>
      <IconButton aria-label="reviews rating" id="rating-container">
        <StarRateIcon />
      </IconButton>
      <span>{props.data.avg_rating}</span>
    </>
  );
};

export default Rating;
