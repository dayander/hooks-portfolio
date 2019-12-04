import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import propTypes from 'prop-types'


const useStyles = makeStyles(theme => ({
    overlayEffect:{
        display: 'block',
        boxShadow: '0 0 10px 0 #353535',
        color: '#fff',
        textDecoration: 'none',
        "&:hover": {
            boxShadow: '0 0 30px 0 #353535'
        }
    },
    project: {
        minHeight: '350px',
        height: '350px',
        margin: '20px auto',
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    },
    content: {
        position: 'relative',
        padding: '30px',
        top: '50%'
    }
}))

function ProjectLink(props) {
    const {bgImage, getter, companyName, projectHeading} = props
    const classes = useStyles()

    return(
        <Link className={classes.overlayEffect} to={`/work${getter}`}>
            <div className={classes.project} style={{backgroundImage: `url(${bgImage})`}}>
                <div className={`${classes.content}`}>
                    <h2 component='h2' variant='h4'>
                        {companyName}
                    </h2>
                    <p component='p' variant='subtitle1'>
                        {projectHeading}
                    </p>
                </div>
            </div>
        </Link>
    )
}

propTypes.ProjectLink = {
    project: propTypes.object.isRequired,

}



export default ProjectLink