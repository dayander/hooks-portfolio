import React from 'react'
import Typography from '@material-ui/core/Typography'
import {experienceArray} from "./ResumeData";
import {makeStyles} from '@material-ui/core/styles'
import List from "../util/List";

const useStyles = makeStyles(theme => ({
    title:{
        marginBottom: '25px',
        marginTop: '25px'
    },
    singleEx: {
        marginBottom: '25px'
    }
}))

function SingleExperience(props) {
    const {companyName, jobTitle, startDate, endDate, bullets} = props
    return(
        <React.Fragment>
            <Typography component='h3' variant='h5'>
                {companyName}
            </Typography>
            <Typography component='p' variant='subtitle1'>
                {jobTitle}
            </Typography>
            <Typography component='p' variant='subtitle2'>
                {`${startDate} - ${endDate}`}
            </Typography>
            <List data={bullets}/>

        </React.Fragment>
    )
}

function ResumeExperiences() {
    const classes = useStyles()
    return(
        <React.Fragment>
            <Typography className={classes.title} component='h2' variant='h4'>
                Experiences
            </Typography>
            {
                experienceArray.map((x, i) => {
                   return <SingleExperience  key={i} {...x}/>
                })
            }

        </React.Fragment>
    )
}

export default ResumeExperiences