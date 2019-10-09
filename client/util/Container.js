import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0 15px',
        maxWidth: '960px',
        margin: '0 auto'
    }
}))

function Container(props) {
    const classes = useStyles()
    const {children} = props

    return(
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Container