import React from 'react';
import { makeStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoFooter: {
    margin: 12
  },

}));

const Footer = () => {
    const classes = useStyles();
    return(
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.footer}>            
            <div>
                <ul>
                    <li>Hola</li>
                    <li>Jaja</li>
                </ul>
            </div>
            <div className={classes.logoFooter}>
                <img alt="Logo" src="/img_footer.png"></img>
            </div>            

        </Toolbar>
    </AppBar>
    )    
}

export default Footer
