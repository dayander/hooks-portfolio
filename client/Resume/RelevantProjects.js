import React from 'react'
import Typography from '@material-ui/core/Typography'
import {projectsArray} from "./ResumeData";
import List from "../util/List";

function RelevantProjects() {
    return(
        <React.Fragment>
            <Typography component='h2' variant='h4'>
                Relevant Projects
            </Typography>
            <List data={projectsArray}/>
        </React.Fragment>
    )
}

export default RelevantProjects