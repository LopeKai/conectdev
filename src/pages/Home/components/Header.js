import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flex: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    },

})

function Header() {
    const classes = useStyles()
    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img className={classes.img} src="images/logo.png" alt="Logo" />
                <div className={classes.grow}></div> {/* essa div aqui ela foi criada para separar o logo e os buttoes e icons. ela fica no meio entre esses dois componentes,assim cada um fica em cada ponta da tela,tem outras maneiras de fazer isso,mas ele optou em fazer assim */}
                <div className={classes.userSection}>
                    <Button className={classes.button} variant="contained" color="primary"> 
                        Novo post 
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/66790414?s=460&u=d63a23535b9cc021fd4e4abcfa6d15819a218cb3&v=4" />
                </div>
                {/* <div className="">
                    <a> Conecta Dev</a>
                    <input type="text"></input>
                </div>

                <div className="">
                    <Button variant="contained" color="primary"> Novo post </Button>
                    <span>Imag1</span>
                    <span>Imag2</span> 
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header