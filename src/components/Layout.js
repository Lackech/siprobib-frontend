import React from 'react';
import Navbar from './Navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import Footer from './Footer';
import theme from './theme';




export default props => (
  
  <ThemeProvider theme={theme}>    
    <div>
      <AppBar position="static">
      <Toolbar>
          <img alt="Logo" src="/logo_ucr.png"></img>
        </Toolbar>
      </AppBar>
      <Navbar />
      
      {props.children} 

      
      
    </div>
  </ThemeProvider>
);
