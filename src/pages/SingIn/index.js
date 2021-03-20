import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: "url(/images/background3.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '0 30px',
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(0.5)
    },
    button: {
        marginTop: theme.spacing(0.5)
    },
    form: {
        margin: theme.spacing(0,4,1,4),
    }
   
}))

function Copyright() {
    return(
        <Typography variant="body2" align="center">
            {'Corporation © '}
            <a color='inherit' target="_blank" href="https://www.linkedin.com/in/kaique-lopes-0810591ba/">
              <span>Kaique Lopes</span>
            </a>
            {new Date().getFullYear()}
        </Typography>
    )
}

function SignIn() {
    const classes = useStyles()
    return(
        <Grid container className={classes.root}>
            <Grid 
                item 
                container
                direction="column" 
                justify="center"
                alignItems="center"
                sm={7}
                md={5}
                className={classes.image}
                >
                {/* <Typography style={{color: '#fff', fontSize: '2rem', lineHeight: '30px', textAlign: 'center'}}>
                    <strong> Simplificando a forma de conectar DESENVOLVEVORES de software </strong>
                </Typography>
                <Typography style={{color: 'rgb(255,255,225,0.7)',marginTop: 20}}>
                    Compatilhe seu conhecimento com toda nossa rede de desenvoledores de software
                </Typography> */}
            </Grid>

            <Grid item sm={5} md={5}> 
                <Box display="flex" flexDirection="column" alignItems="center" mt={8}> {/* O BOX ELE É COMO SE FOSSE UMA <DIV> */}
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus  
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button 
                            className={classes.button}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            <span style={{color: '#fff', letterSpacing: '0.5px', fontWeight: '600',textShadow: '0 0px 5px rgba(0,0,0,70%)'}}> Entrar </span>
                        </Button>
                        <Grid container style={{marginTop: '0.5rem'}}>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn