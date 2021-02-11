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
    textAlign: "left",
  },
  media: {
    height: 140,
    margin: 2,
  },
});

export const ItemCard = ({ indItem }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={keyboard}
          title="Item Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Item: {indItem.name}
            {console.log(indItem)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: {indItem.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Quantity: {indItem.quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ID: {indItem.id}
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
