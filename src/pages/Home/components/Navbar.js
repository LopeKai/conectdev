import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles( (theme) => ({
    root: {
        padding: theme.spacing(2), // aqui eu to usando o espaçamento default do material ui. o espaçamento é 8px. assum eu passando o numero como parametro ele vai fazer 8 *2
        width: 275,
        height: '100%',
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}))

const tags = [
    {id: 1, name: 'ReactJS'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'Dotnet'},
    {id: 4, name: 'Php'},
    {id: 5, name: 'Material-design'},
    {id: 6, name: 'Webdev'},
]

function Navbar() {
    const classes = useStyles()

    return(
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary">Registar Grátis</Button>
            <ListSubheader>{`TAGS EM ALTA`}</ListSubheader>
            { 
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags
            </ListItem>
        </Paper>
    )
}

export default Navbar