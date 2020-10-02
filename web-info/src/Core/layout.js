import React from 'react'
import NavBar from './navbar'
import SideBar from './sidebar'
import {Container,Box,Grid, Typography, Hidden} from '@material-ui/core'
import '../style.css'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import { makeStyles } from '@material-ui/core/styles';


const estilos = makeStyles(theme=>({
    root:{
        display:'flex'
    },
    toolbar:theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
}))

const Layout = ({children}) =>{
  const classes = estilos()
  const [abrir,setAbrir] = React.useState(false)

  const accionAbrir = ()=>{
      setAbrir(!abrir)
  }
  
    return (
        <ThemeProvider theme={theme}>
           
            <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            <Hidden smUp>
               <SideBar 
                 variant="temporary"
                 open= {abrir}
                 onClose={accionAbrir}
               />
            </Hidden>
            
            </div>
            <div className={classes.content}>
               <div className={classes.toolbar}/>
                 <Typography>
                     CONTENIDO
                 </Typography>
           </div>
      
        </ThemeProvider>
    )
}


export default Layout;