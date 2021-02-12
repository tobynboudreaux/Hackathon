import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '../components/items/node_modules/@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '../components/items/node_modules/@material-ui/core/TextField';
import FormControlLabel from '../components/items/node_modules/@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '../components/items/node_modules/@material-ui/core/Typography';
import { makeStyles } from '../components/items/node_modules/@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import axios from '../components/items/node_modules/axios';
import { TopNavBar } from '../components/landingPage/topNavBar';
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [failedLogin, setFailedLogin] = useState(false);

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
      }));

      const classes = useStyles();

      const handleSubmit = event => {
          event.preventDefault();
          setFailedLogin(false);
        //add axios call once backend endpoint is made
        if(username && password) {
        axios.post('http://localhost:8080/user/auth', {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                localStorage.setItem('username', username);
                history.push("/");
           
            }
          })
          .catch(function (error) {
            console.log(error);
            setFailedLogin(true);
            console.log("failed login", failedLogin);
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {failedLogin ? <div><Alert severity="error">Invalid Login Credentials</Alert></div> : null}
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      </div>
    )
}

export default Login
