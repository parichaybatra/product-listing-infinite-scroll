import React from "react";
import Typography from "@material-ui/core/Typography";

const Discount = (props) => {
  return (
    <>
      <Typography variant="h6" component="h2" id="product-discount-container">
        {Math.ceil(
          ((props.data.strikeprice - props.data.price) /
            props.data.strikeprice) *
            100
        )}{" "}
        {"%"}
      </Typography>
    </>
  );
};

export default Discount;
