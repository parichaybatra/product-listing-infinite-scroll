import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductListItem from "./ProductListItem";
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ProductList(props) {
  const classes = useStyles();
  const products = props.data;

  return (
    <div className={classes.root}>
      <NoSsr>
        <Grid container spacing={3}>
          {products.map((product) => (
            <ProductListItem key={product.id} data={product}></ProductListItem>
          ))}
        </Grid>
      </NoSsr>
    </div>
  );
}

export default ProductList;
