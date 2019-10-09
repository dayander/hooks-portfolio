import React from 'react'
import Typography from '@material-ui/core/Typography'
import {skillsArray} from "./ResumeData";
import List from "../util/List";

function ResumeSkills() {
    return(
        <React.Fragment>
            <Typography component='h2' variant='h4'>
                Skills
            </Typography>
            <List data={skillsArray}/>
        </React.Fragment>
    )
}

export default ResumeSkills