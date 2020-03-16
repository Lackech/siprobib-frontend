import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    
    buscador: {
        margin: '5px',
        padding: '2em',
    },

    buscadorPrincipal: {
        display: 'flex',
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        
    },

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
                                <Button color="primary"><i className="material-icons">search</i></Button>                                
                            </form>
                        </div>
                      
                        <div className={classes.buscadorSegundaColumna} noValidate autoComplete="off">
                        <TextField
                                    id="outlined-word"
                                    label="Autor"
                                    className={classes.textField}
                                    
                                    variant="outlined"
                                />
                                <Button color="primary"><i className="material-icons"> search </i></Button> 
                        </div>
                      
                        <div className={classes.buscadorTerceraColumna} noValidate autoComplete="off">
                        <TextField
                                    id="outlined-word"
                                    label="Género"
                                    className={classes.textField}
                                    
                                    variant="outlined"
                                />
                                <Button color="primary"><i className="material-icons">search</i></Button> 
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default  withStyles(styles)(Buscador) 
