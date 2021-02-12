import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const AddCategory = ({ boolAdd }) => {
  const [category, setCategory] = useState({});
  const addCategoryUrl = "http://localhost:8080/category";

  const addCategory = async () => {
    await Axios.post(addCategoryUrl, category).then((resp) =>
      console.log(resp.data)
    );
  };

  const editCategory = async () => {
    //   await Axios.put(addCategoryUrl + id, category).then((resp) =>
    //     console.log(resp.data)
    //   );
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="category-name"
          label="Category Name"
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={boolAdd ? addCategory : editCategory}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;
