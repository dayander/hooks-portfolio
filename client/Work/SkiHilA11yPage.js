import React, {useContext, useEffect} from 'react'
import Context from '../state/context/context'
import pageRenderA11y from '../util/pageRenderA11y'
import PageHeader from "../util/PageHeader";
import PullSection from "../util/PullSection";
import LargePicture from "../util/LargePicture";
import Onward from '../util/Onward'
import Well from "../util/Well";
import Jumbotron from "../util/Jumbotron";
import Container from "../util/Container";
import Typography from '@material-ui/core/Typography'

function SkiHillA11yPage(props) {
  const project = useContext(Context).projects.find(x => x.address === props.match.url);
  const projects = useContext(Context).projects.filter(x => x.address !== props.match.url)

  useEffect(() =>{
    pageRenderA11y(project.projectName)
  })
  return(
    <React.Fragment>
      <PageHeader
        h1={project.companyName}
        h2={project.projectHeading}
        img={project.bgImage}
      />
      <Well>
        <Jumbotron>
          <Container>
            <Typography component='h2' variant='h4'>
              Project Overview
            </Typography>
            <Typography component='h3' variant='h6'>
              Project Description
            </Typography>
            <Typography component='p'>
              Ski hill a11y is a web application that has two copies of the site that
              are easily toggled between. The site starts out in accessible and allows
              the user to toggle to the accessible version. I built this as a tool for
              learning web developers to see examples of what makes a site accessible versus
              in accessible. The application contains errors with heading structure, language
              of the web page, color contrast, image alternative text, form labels on inputs,
              being able to increase text size, keyboard navigation, semantic lists and updating
              page titles. This project was also presented at the Accessible Learning Conference 2018,
              "An Introduction to Web Accessibility."
            </Typography>
            <Typography component='h3' variant='h6'>
              Technologies Used:
            </Typography>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Node and Express</li>
              <li>WCAG 2.0</li>
            </ul>
            <Typography component='h3' variant='h6'>
              Project Role
            </Typography>
            <Typography component='p'>
              I designed and developed this application with input from Michigan State University
              faculty aligning course goals with accessibility knowledge in the Experince Architecture's
              program Introduction to Web Authoring and Advanced Web Authoring
            </Typography>
            <Typography component='h3' variant='h6'>
              Live Project Links
            </Typography>
            <ul>
              <li>
                <a href={"http://skihill-a11y.herokuapp.com/"} >
                  Ski Hill A11y Live
                </a>
              </li>
              <li>
                <a href={"https://docs.google.com/presentation/d/1SPBQfTHbIX4fvw4XtloGkpQK8mSqqygUKhpTAvL6zpA/edit?usp=sharing"} >
                  Accessible Learning Conference Presentation Slides
                </a>
              </li>
              <li>
                <a href={"https://github.com/dayander/Accessible-Learning-Confernce-2018-presentation-w-server"}>
                  Ski Hill A11y Github Repo
                </a>
              </li>
            </ul>
          </Container>
        </Jumbotron>
      </Well>

      <PullSection  header={project.challengeHeading} body={project.challenge}/>
      <LargePicture imgPath={project.largeImage} altText={''}/>
      <PullSection header={project.approachHeading} body={project.approach}/>
      <PullSection header={project.outcomeHeading} body={project.outcome}/>
      <Onward projects={projects}/>
    </React.Fragment>
  )

}

export default SkiHillA11yPage