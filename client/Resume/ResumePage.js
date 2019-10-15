import React, {useEffect} from 'react'
import PageHeader from '../util/PageHeader'
import ResumeExperiences from './ResumeExperinces'
import Jumbotron from "../util/Jumbotron";
import Container from "../util/Container";
import ResumeEducation from './ResumeEducation'
import ResumeSkills from './ResumeSkills'
import RelevantProjects from './RelevantProjects'
import pageRenderA11y from '../util/pageRenderA11y'

function ResumePage() {
  useEffect(() => {
    pageRenderA11y('Resume')
  })
    return(
        <React.Fragment>
            <PageHeader h1='Resume' color='#000' />
            <Jumbotron>
                <Container>
                    <a href={'/andersonDayResume09232019.pdf'} download>Download Resume</a>
                    <ResumeExperiences />
                    <ResumeEducation />
                    <ResumeSkills/>
                    <RelevantProjects/>
                </Container>
            </Jumbotron>

        </React.Fragment>
    )
}

export default ResumePage