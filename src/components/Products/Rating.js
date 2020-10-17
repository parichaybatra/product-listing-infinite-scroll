import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";

const Rating = (props) => {
  return (
    <>
      <IconButton
        aria-label="reviews rating"
        style={{ paddingLeft: "0", paddingRight: "0", color: "#FCDB4C" }}
      >
        <StarRateIcon />
      </IconButton>
      <span>{props.data.avg_rating}</span>
    </>
  );
};

export default Rating;
