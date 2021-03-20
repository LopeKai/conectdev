import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    left: {
        background: 'red',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        background: 'blue',
        flexBasis: '42%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    }

}))

function SignIn() {
    const classes = useStyles()
    return(
        <div className={classes.root}>

           <div className={classes.left}>
                <Typography style={{color: '#fff', fontSize: '13px', lineHeight: '45px'}}>
                   <strong> Simplificando a forma de conectar DESENVOLVEVORES de software </strong>
                </Typography>
                <Typography style={{color: 'rgb(255,255,225,0.7)',marginTop: 30}}>
                    Compatilhe seu conhecimento com toda nossa rede de desenvoledores de software
                </Typography> 
           </div>

           <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />
                </form>  
           </div>

        </div>
    )
}

export default SignIn