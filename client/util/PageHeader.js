import React from 'react'
import propTypes from 'prop-types'
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    header: {
        paddingTop: '48px',
        paddingBottom: '48px',
        backgroundColor: '#eee',
    },
    headerInner: {
        margin: '0 auto',
        padding: '10px 35px',
        color: '#fff',
        maxWidth: '960px'
    },
    subtitle: {
        fontWeight:300
    }
}))

function PageHeader(props) {
    const {img, h1, h2, color} = props
    const classes = useStyles()
    return(
        <div style={{ backgroundImage: `url(${img})`}} className={classes.header}>
            <div className={classes.headerInner}>
                <Typography style={{color: color}} component='h1' variant='h3'>{h1}</Typography>
                {h2? (<h2 style={{color: color}} className={classes.subtitle}>{h2}</h2>): null}
            </div>
        </div>
    )
}


PageHeader.propTypes = {
    imgPath: propTypes.string,
    h1: propTypes.string.isRequired,
    color: propTypes.string
}

export default PageHeader