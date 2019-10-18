import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        bottom: 0,
        minHeight: '50px',
        padding: '25px',
    },
    footerContent: {
        margin: '0 auto',
        width: '100px'
    }
}))

function Footer() {
    const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Typography className={classes.footerContent} component='p' variant='caption'>
                Anderson Day
            </Typography>
        </footer>
    )

}



export default Footer