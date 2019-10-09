import React from'react'
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

function Linked(props){
    const {children, to} = props

    return(
        <Link href={to}>
            {children}
        </Link>
    )

}

Linked.Proptypes = {
    to: PropTypes.string.isRequired
}

export default Linked