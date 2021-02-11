import React from 'react';
import { AppBar, Container, List, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
   navDisplayFlex: {
     display: `flex`,
     justifyContent: `flex-end`
   },
   linkText: {
     textDecoration: `none`,
     color: `white`
   }
 });
const navLinks = [
   {title: 'Login', path: '/login'},
   {title: 'Sign Up', path: '/signup'}
];

export const TopNavBar = (props) => {
   const classes = useStyles();

   return (
      <AppBar color='primary' position='static'>
         <Toolbar>
            <a href='/' className={classes.linkText}><h2>Hackathon Personal Inventory</h2></a>
            <Container>
               <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                  {navLinks.map(({title, path}) => (
                     <a href={path} key={title} className={classes.linkText} >
                        <ListItem button>
                           <ListItemText primary={title} />
                        </ListItem>
                     </a>
                  ))}
               </List>
            </Container>
         </Toolbar>
      </AppBar>
   );
}