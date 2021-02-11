import { makeStyles } from '@material-ui/core';
import React from 'react';
import { TopNavBar } from './landingPage/topNavBar';
const useStyles = makeStyles({
   centered: {
      textAlign: `center`
   }
})
export const NotFound = () => {
   const classes = useStyles();
   return (
      <div>
         <TopNavBar />
         <h1 className={classes.centered}>NOT FOUND</h1>
      </div>
   )
}