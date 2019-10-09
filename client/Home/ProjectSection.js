import React from 'react'
import Well from '../util/Well'
import Grid from '@material-ui/core/Grid'
import ProjectLink from '../util/ProjectLink'
import {makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    gridItem: {
        paddingLeft: '15px',
        paddingRight: '15px'
    }
}))

function ProjectSection(props) {
    console.log(props)
    const {projects} = props
    const classes = useStyles()

    return(
        <Well>
            <Grid container>
                <Grid className={classes.gridItem}  xs={12} item>
                    <ProjectLink {...projects[2]}/>
                </Grid>
                <Grid className={classes.gridItem} xs={12} sm={6} item>
                    <ProjectLink {...projects[1]}/>
                </Grid>
                <Grid className={classes.gridItem} xs={12} sm={6} item>
                    <ProjectLink {...projects[3]}/>
                </Grid>
            </Grid>

        </Well>
    )
}

export default ProjectSection