import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { sizing } from "@material-ui/system";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    },
    inputLabel: {
      minWidth: 600,
      shrink: false,
    },
    selectItem: {
      minWidth: 400,
    },
  },
}));

export const AddItem = (props) => {
  const classes = useStyles();

  const [item, setItem] = useState({
    userId: 1,
    categoryId: 1,
    name: "",
    quantity: 1,
    description: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("new item submitted!", item);
    props.returnItemSubmit(item);
    setItem({
      categoryId: 0,
      name: "",
      quantity: 1,
      description: "",
      image: "",
    });
  };

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Paper elevation={2} variant="outlined">
        <h2>Add New Item</h2>
        <form className={classes.root} autoComplete="off">
          <div>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel
                className={classes.inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Select Category
              </InputLabel>
              {/* <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                className={classes.selectItem}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
            </FormControl>
            {/* <TextField
              id="filled-required"
              label="or Create New Category:"
              variant="filled"
            /> */}
          </div>
          <TextField
            required
            id="filled-required"
            name="name"
            onChange={handleChange}
            value={item.name}
            label="Item Name:"
            variant="filled"
          />
          <TextField
            id="filled-required"
            onChange={handleChange}
            value={item.description}
            name="description"
            label="Description:"
            variant="filled"
          />
          <TextField
            onChange={handleChange}
            value={item.image}
            name="image"
            id="filled-required"
            label="Image:"
            variant="filled"
          />
          <TextField
            id="standard-number"
            label="Quantity"
            type="number"
            onChange={handleChange}
            value={item.quantity}
            name="quantity"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Create New Item
            </Button>
            <Button
              onClick={() => props.returnClose()}
              variant="contained"
              color="secondary"
            >
              Close Form
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
