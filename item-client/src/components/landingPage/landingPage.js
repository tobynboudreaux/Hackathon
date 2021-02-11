import React from 'react';
import { Container } from '@material-ui/core';
import { TopNavBar } from './topNavBar';

export const LandingPage = (props) => {

   return (
      <div>
         <TopNavBar />
         <Container>
            <h2>Hackathon Personal Inventory</h2>
            <p>Made by Reavature Staging Associates in group</p>
         </Container>
      </div>
   );
}