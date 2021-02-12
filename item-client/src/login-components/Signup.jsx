import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '../components/items/node_modules/@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '../components/items/node_modules/@material-ui/core/TextField';
import FormControlLabel from '../components/items/node_modules/@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '../components/items/node_modules/@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '../components/items/node_modules/@material-ui/core/Typography';
import { makeStyles } from '../components/items/node_modules/@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Alert from '@material-ui/lab/Alert';
import axios from '../components/items/node_modules/axios';
import { TopNavBar } from '../components/landingPage/topNavBar';
import { useHistory } from "react-router-dom";

function Signup() {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [failedSignup, setFailedSignup] = useState(false);

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        invalid: {
            borderColor: '#ff1744'
        }
      }));

      const classes = useStyles();

      const handleSubmit = event => {
          event.preventDefault();

        //add axios call once backend endpoint is made
        if(username && password) {
        axios.post('http://localhost:8080/user', {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
            if(response.status == 201) {
                localStorage.setItem('username', username);
                history.push('/');
            }
          })
          .catch(function (error) {
            setFailedSignup(true);
          });
      };
      }
      const handleUsernameChange = event => {
          setUsername(event.target.value);
      };

      const handlePasswordChange = event => {
          setPassword(event.target.value);
      }

    return (
        <div>
        <TopNavBar />
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <div> {failedSignup ? <div><Alert severity="error">Username Already Exists!</Alert></div> : null}</div>
            <TextField
              onChange={handleUsernameChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handlePasswordChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </form>
        </div>
      </Container> 
      </div>
    )
}

export default Signup
