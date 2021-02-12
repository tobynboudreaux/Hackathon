import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { ItemCard } from "./ItemCard";
import { AddItem } from "./AddItem";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import { TopNavBar } from "../landingPage/topNavBar";

const user = { user: { id: 1, username: "Toby", password: "RaginCajun" } };

const testItems = [
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
  formControl: {
    minWidth: 200,
    margin: 10,
  },
}));

export const ItemContainer = () => {
  const [formDisplay, setFormDisplay] = useState("none");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [deletedItem, setDeletedItem] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((response) => {
      setCategories(response.data);
      axios.get("http://localhost:8080/items").then((response) => {
        setItems(response.data);
      });
    });
  }, [deletedItem, category]);

  const getItems = () => {};

  const displayForm = (event) => {
    setOpen(true);
  };

  const closeForm = (event) => {
    setOpen(false);
  };

  const handleItemSubmit = (item) => {
    axios.post("http://localhost:8080/items", item).then((response) => {
      closeForm();
      setCategory(response.data.categoryId);
    });
  };

  const getSelectCategories = () => {
    if (categories.length > 0) {
      return categories.map((category, idx) => {
        return (
          <MenuItem key={idx} value={category.categoryId}>
            {category.categoryName}
          </MenuItem>
        );
      });
    } else {
      return null;
    }
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
    console.log(categories, category);
  };

  const handleItemDelete = (id) => {
    axios.delete(`http://localhost:8080/items/${id}`).then((response) => {
      setDeletedItem(response.config.url);
    });
  };

  const renderItems = () => {
    if (items.length > 0 && category === 0) {
      return items.map((indItem, idx) => {
        return (
          <Grid key={idx} item>
            <ItemCard returnItemDelete={handleItemDelete} indItem={indItem} />
          </Grid>
        );
      });
    } else if (items.length > 0) {
      const newItems = items.filter((item) => item.categoryId === category);
      return newItems.map((indItem, idx) => {
        return (
          <Grid key={idx} item>
            <ItemCard returnItemDelete={handleItemDelete} indItem={indItem} />
          </Grid>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <TopNavBar />
      <div id="item-container">
        <h1>Item Container</h1>
        <Button onClick={displayForm} variant="contained" color="primary">
          Add Item
        </Button>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Select Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleSelectChange}
            >
              <MenuItem value={0}>All Categories</MenuItem>
              {getSelectCategories()}
            </Select>
          </FormControl>
        </div>
        <Modal
          // className={classes.modalStyle}
          open={open}
          onClose={closeForm}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div id="add-item-form">
            <AddItem
              categories={categories}
              returnItemSubmit={handleItemSubmit}
              returnClose={closeForm}
            />
          </div>
        </Modal>

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
    </>
  );
};
