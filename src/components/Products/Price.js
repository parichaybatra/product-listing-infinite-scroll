import React from "react";
import Typography from "@material-ui/core/Typography";

const Rating = (props) => {
  return (
    <>
      <Typography variant="h4" component="h2">
        &#8377;{props.data.price}
      </Typography>

      <Typography
        variant="h4"
        color="textSecondary"
        component="p"
        style={{ textDecoration: "line-through", marginLeft: "auto" }}
      >
        &#8377;{props.data.strikeprice}
      </Typography>
    </>
  );
};

export default Rating;