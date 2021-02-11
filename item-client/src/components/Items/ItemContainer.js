import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ItemCard } from "./ItemCard";
import { AddItem } from "./AddItem";
import Modal from "@material-ui/core/Modal";

const user = { user: { id: 1, username: "Toby", password: "RaginCajun" } };

const items = [
  {
    id: 1,
    name: "Corsair Gaming Keyboard",
    quantity: 1,
    image: "need",
    description: "Keyboard with pretty lights",
  },
  {
    id: 2,
    name: "Corsair Gaming Keyboard 2",
    quantity: 1,
    image: "need",
    description: "Keyboard with pretty lights",
  },
  {
    id: 3,
    name: "Corsair Gaming Keyboard 3",
    quantity: 1,
    image: "need",
    description: "Keyboard with pretty lights",
  },
  {
    id: 4,
    name: "Corsair Gaming Keyboard 4",
    quantity: 1,
    image: "need",
    description: "Keyboard with pretty lights",
  },
];

const category = { category: { id: 1, name: "Corsair PC Build" } };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  modalStyle: {
    width: 750,
    position: "fixed",
    left: 25,
    top: 15,
  },
}));

export const ItemContainer = () => {
  const [formDisplay, setFormDisplay] = useState("none");
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const displayForm = (event) => {
    setOpen(true);
  };

  const closeForm = (event) => {
    setOpen(false);
  };

  const renderItems = () => {
    return items.map((indItem, idx) => {
      return (
        <Grid item>
          <ItemCard indItem={indItem} />
        </Grid>
      );
    });
  };

  return (
    <div id="item-container">
      <h1>Item Container</h1>
      <Button onClick={displayForm} variant="contained" color="primary">
        Add Item
      </Button>

      <Modal
        // className={classes.modalStyle}
        open={open}
        onClose={closeForm}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div id="add-item-form">
          <AddItem returnClose={closeForm} />
        </div>
      </Modal>

      {/* <div style={{ display: { formDisplay } }} id="add-item-form"> */}
      {/* <div style={{ display: `${formDisplay}` }} id="add-item-form">
        <AddItem returnClose={closeForm} />
      </div> */}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={2}
      >
        {renderItems()}
      </Grid>
    </div>
  );
};
