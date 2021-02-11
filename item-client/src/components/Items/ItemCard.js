import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import keyboard from "../../images/keyboard.jpg";

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 400,
  },
  media: {
    height: 140,
    margin: 2,
  },
});

export const ItemCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={keyboard}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Item: Need Field
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: Need Field
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
