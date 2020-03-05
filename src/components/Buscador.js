import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    
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
    container: {
        display: 'flex',
    }

})

export class Buscador extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            <div className={classes.buscador}>
                    <div className={classes.buscadorTitle}>
                        <h2>Buscador de producciones</h2>
                    </div>
                    <div className={classes.buscadorPrincipal}>
                        <div className={classes.buscadorPrimeraColumna}> 
                            
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-word"
                                    label="Título"
                                    className={classes.textField}
                                    //value={this.state.email}
                                    //onChange={this.handleChange('email')}
                                    
                                    variant="outlined"
                                />
                                <Button color="primary"><i class="material-icons">search</i></Button>                                
                            </form>
                        </div>
                        <div className={classes.buscadorSegundaColumna}></div>
                        <div className={classes.buscadorTerceraColumna}></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default  withStyles(styles)(Buscador) 
