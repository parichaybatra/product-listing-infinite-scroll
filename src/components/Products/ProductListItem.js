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

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 3px 5px 0 rgba(0,0,0,.16)",
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
        <Card className={classes.root} style={{ padding: "0.5rem" }}>
          <CardMedia
            className={classes.media}
            image={props.data.showImage}
            title={props.data.name}
          />
          <CardContent style={{ paddingTop: "1rem", paddingBottom: "0" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              title={props.data.name}
              style={{ minHeight: "2.5rem" }}
            >
              {props.data.name}
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ padding: 0 }}>
            {props.data.avg_rating && props.data.avg_rating > 0 ? (
              <Rating data={props.data} />
            ) : (
              <Typography style={{ minHeight: "1rem" }}></Typography>
            )}

            {props.data.rating_count ? (
              <Reviews data={props.data} />
            ) : (
              <Typography></Typography>
            )}
          </CardActions>
          <CardActions disableSpacing style={{ paddingTop: "0" }}>
            <Price data={props.data} style={{ display: "block" }} />
            <Typography
              variant="h6"
              component="h2"
              style={{ marginLeft: "auto", color: "#00bb19" }}
            >
              {Math.ceil(
                ((props.data.strikeprice - props.data.price) /
                  props.data.strikeprice) *
                  100
              )}{" "}
              {"%"}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default ProductListItem;
