import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider, makeStyles, Drawer
}
    from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar,


}))
const SideBar = (props) => {

    const classes = estilos()

    return (

        <Drawer className={classes.drawer}
            variant={props.variant} classes={{ paper: classes.drawerPaper }}
            anchor='left'
            open ={props.open}
            onClose={props.onClose ? props.onClose :null}
            >

            <div className={classes.toolbar}></div>
            <Divider />

            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />


                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <PlaceIcon></PlaceIcon>
                    </ListItemIcon>
                    <ListItemText primary="Ubicacion" />


                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ImportContactsIcon></ImportContactsIcon>
                    </ListItemIcon>
                    <ListItemText primary="Contacto" />


                </ListItem>
                <Divider />
            </List>
        </Drawer>
    )
}



export default SideBar;