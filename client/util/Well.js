import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    well:{
        minHeight: '20px',
        padding: '19px',
        marginBottom: '20px',
        backgroundColor: '#f5f5f5',
        border: '1px solid #e3e3e3',
        borderRadius: '4px',
    }
}))

function Well(props) {
    const { children } = props
    const classes = useStyles()

    return(
        <div className={classes.well}>
            {children}
        </div>
    )
}

export default Well