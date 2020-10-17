import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "./Rating";
import Reviews from "./Reviews";
import Price from "./Price";
import Discount from "./Discount";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 3px 5px 0 rgba(0,0,0,.16)",
    padding: "0.5rem",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProductListItem(props) {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6} md={3}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={props.data.showImage}
            title={props.data.name}
          />
          <CardContent id="product-content-container">
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              title={props.data.name}
              className="description-block-conatiner"
            >
              {props.data.name}
            </Typography>
          </CardContent>
          <CardActions disableSpacing id="product-card-action-reviews">
            {props.data.avg_rating && props.data.avg_rating > 0 ? (
              <Rating data={props.data} />
            ) : (
              <Typography className="rating-block-container"></Typography>
            )}

            {props.data.rating_count ? (
              <Reviews data={props.data} />
            ) : (
              <Typography className="review-block-container"></Typography>
            )}
          </CardActions>
          <CardActions disableSpacing id="product-card-action-price">
            <Price id="price-conatiner" data={props.data} />
            <Discount data={props.data} />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default ProductListItem;
