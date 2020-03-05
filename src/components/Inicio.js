import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import banner from '../images/banner.jpg';
import TextField from '@material-ui/core/TextField';
import theme from './theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Buscador } from './Buscador';

const styles = theme => ({

    hero: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&::before": {
            content: `''`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            //background: 'url(public/banner.jpeg)',
            backgroundImage: "url(" + banner + ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(60%)',
        }
    },    

    heroContent: {
        position: 'relative',        
        color: 'white',
        textAlign: 'center',
        margin: '0.625rem',
    },

    heroTitle: {
        fontSize: '3rem',
        fontWeight: 600,
        marginBottom: 0,
    },

    heroSubtitle: {
        fontSize: '2rem',
        fontWeight: 200,
        marginTop: '1rem',
    },  
    
    contentSite: {
        flex:1,
    },

    buscador: {
        margin: '5px',
    },

    buscadorPrincipal: {
        display: 'flex',
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        
    },

})


export class Inicio extends Component {


    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>  
                <div >
                    <section className={classes.hero}>
                        <div className={classes.heroContent}>
                            <h1 className={classes.heroTitle}>
                                Sistema de producciones bibliograficas
                            </h1>

                            <h2 className={classes.heroSubtitle}>
                                Encontra blablalblalsv lsdfafasfaasd addasd dasdasd asdasdasd asdasd
                            </h2>                   

                        </div>
                    </section>

                    <Buscador />


                </div>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(Inicio)
