import React from'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    link: {
        color: '#fff',
        padding: '10px'
    }
}))

function Linked(props){
    const {children, to} = props
    const classes = useStyles()

    return(
        <Link className={classes.link} to={to}>
            {children}
        </Link>
    )

}

Linked.Proptypes = {
    to: PropTypes.string.isRequired
}

export default Linked