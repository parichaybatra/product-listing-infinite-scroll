import React from "react";
import Typography from "@material-ui/core/Typography";

const Rating = (props) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        &#8377;{props.data.price}
      </Typography>

      <Typography
        id="striked-price"
        variant="h6"
        color="textSecondary"
        component="p"
      >
        &#8377;{props.data.strikeprice}
      </Typography>
    </>
  );
};

export default Rating;
