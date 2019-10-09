import React from 'react'
import PageHeader from '../util/PageHeader'
import ResumeExperiences from './ResumeExperinces'
import Jumbotron from "../util/Jumbotron";
import Container from "../util/Container";
import ResumeEducation from './ResumeEducation'
import ResumeSkills from './ResumeSkills'
import RelevantProjects from './RelevantProjects'

function ResumePage() {
    return(
        <React.Fragment>
            <PageHeader h1='Resume' color='#000' />
            <Jumbotron>
                <Container>
                    <ResumeExperiences/>
                    <ResumeEducation />
                    <ResumeSkills/>
                    <RelevantProjects/>
                </Container>
            </Jumbotron>

        </React.Fragment>
    )
}

export default ResumePage