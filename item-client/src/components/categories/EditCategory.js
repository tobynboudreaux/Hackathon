import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

const EditCategory = () => {

    const [category, setCategory] = useState({});
    const editCategoryUrl = '';

    const editCategory = async (id) => {
        await Axios.put(
            editCategoryUrl + id,
            category
        ).then(resp => console.log(resp.data));
    }
    
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="category-name" label="Category Name" variant="outlined" onChange={(e) => setCategory(e.target.value)} required/>
                <Button type="submit" fullWidth  variant="contained" color="primary" className={classes.submit} onClick={editCategory}>Add Category</Button>
            </form>
        </div>
    )
}

export default EditCategory;