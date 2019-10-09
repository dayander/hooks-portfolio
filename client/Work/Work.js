import React from 'react'
import PageHeader from '../util/PageHeader'
import Jumbotron from "../util/Jumbotron";
import FullWidth from '../util/FullWidth'
import ProjectList from './ProjectList'

function Work() {

  return(
    <React.Fragment>
      <PageHeader h1='Work' h2='In Accessibility, Software Development, and Public Speaking' color='#000'/>
      <Jumbotron>
        <FullWidth>
          <ProjectList/>
        </FullWidth>
      </Jumbotron>
    </React.Fragment>
  )

}


export default Work