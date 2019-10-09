import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavLink from "./NavLink";
import Icon from "../util/Icon";
import Drawer from '@material-ui/core/Drawer';
import {routesObj} from '../routes'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar:{
        padding: '10px',
        backgroundColor: '#000'
    },
    alignLeft: {
        marginLeft: 'auto'
    },
    navIcon: {
        maxWidth: '25px',
        maxHeight: '25px'
    },
    drawerMobile: {
        minWidth: '200px',
    },
    paper: {
        backgroundColor: '#000',
        padding: '10px'
    },
    toolbar: {
        
    }
}));

function RenderNavLinks() {

    const navLinks = routesObj.map((x, i) => {
        if(x.nav){
            return(
                <ListItem key={i}>
                    <NavLink to={x.path}>
                        {x.name}
                    </NavLink>
                </ListItem>
                )
        }

    })

    return navLinks

}

function MobileMenu(props){
    const classes = useStyles()
    const {open, setOpen } = props

    return(
        <Toolbar className={classes.toolbar}>
            <IconButton
                onClick={() => setOpen(true)} edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-expanded={open}
            >
                <MenuIcon />
            </IconButton>
            <Typography style={{color: '#fff'}} component='p' variant='subtitle1'>
                Anderson Day's Portfolio
            </Typography>
            <Drawer classes={{paper: classes.paper}} open={open} onClose={() => setOpen(false)}>
                <nav>
                    <List className={classes.drawerMobile}>
                        {RenderNavLinks()}
                        <ListItem>
                            <Link  href='https://github.com/dayander'>
                                <Icon img={'/images/GitHub-Mark-Light-120px-plus.png'} alt={"Anderson Days Github"} />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/andersonday/">
                                <Icon img={"/images/Linkedin.png"}  alt={"Anderson Days Linkedin"}/>
                            </Link>
                        </ListItem>
                    </List>
                </nav>
            </Drawer>
        </Toolbar>
    )
}

function DesktopMenu(){
    const classes = useStyles()
    return(
        <Toolbar className={classes.toolbar}>
            <Typography style={{color: '#fff', padding: '10px'}} component='p' variant='h6'>
                Anderson Day's Portfolio
            </Typography>
            <nav style={{display: 'flex'}} className={classes.alignLeft}>
                <List style={{display: 'flex'}}>
                    {RenderNavLinks()}
                </List>
                <List style={{display: 'flex'}}>
                    <ListItem>
                        <Link  href='https://github.com/dayander'>
                            <Icon img={'/images/GitHub-Mark-Light-120px-plus.png'} alt={"Anderson Days Github"} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/andersonday/">
                            <Icon img={"/images/Linkedin.png"}  alt={"Anderson Days Linkedin"}/>
                        </Link>
                    </ListItem>
                </List>
            </nav>
        </Toolbar>
    )
}

export default function Header() {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:780px)')
    const [open, setOpen] = useState(false)
    return(
            <AppBar className={classes.appBar} position="static">
                {matches? <DesktopMenu open={open} setOpen={setOpen}/>: <MobileMenu open={open} setOpen={setOpen}/>}
            </AppBar>
    )
}

