import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    offset:theme.mixins.toolbar,

  }));
const NavBar = (props) =>{

  const classes = useStyles();


    

    return (
        <div >
        <AppBar position="fixed">
             <Toolbar>
             <IconButton onClick={()=>props.accionAbrir()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                 <MenuIcon />
             </IconButton>
                 <Typography className={classes.title}>
                     Empresa
                 </Typography>
                  <Hidden xsDown>
                 <Button color="inherit">Inicio</Button>
                 <Button color="inherit">Contacto</Button>
                 <Button color="inherit">Ubicacion</Button>
                 </Hidden>

             </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
      </div>
    )
}

export default NavBar;