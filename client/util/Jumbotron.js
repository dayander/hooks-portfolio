import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    jumbotron: {
        paddingTop: '48px',
        paddingBottom: '48px'
    }
}))

function Jumbotron(props) {
    const classes = useStyles()
    const {children} = props

    return(
        <div className={classes.jumbotron}>
            {children}
        </div>
    )
}

export default Jumbotron