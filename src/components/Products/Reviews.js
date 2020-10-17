import React from "react";
import Typography from "@material-ui/core/Typography";

const Rating = (props) => {
  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ paddingLeft: "0.25rem" }}
      >
        {` (${props.data.rating_count}   Reviews) `}
      </Typography>
    </>
  );
};

export default Rating;
