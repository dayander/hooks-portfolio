import React from 'react'
import Typography from '@material-ui/core/Typography'

function ResumeEducation() {
    return(
        <div style={{paddingBottom: '25px'}}>
            <Typography component='h2' variant='h4'>
                Education
            </Typography>
            <Typography component='p' variant='subtitle1'>
                Michigan State University
            </Typography>
            <Typography component='p' variant='h6'>
                B.A. Experience Architecture (December 2019)
            </Typography>


        </div>
    )
}

export default ResumeEducation