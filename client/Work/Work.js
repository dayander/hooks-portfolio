import React, {useEffect} from 'react'
import PageHeader from '../util/PageHeader'
import Jumbotron from "../util/Jumbotron";
import FullWidth from '../util/FullWidth'
import ProjectList from './ProjectList'
import pageRenderA11y from '../util/pageRenderA11y'

function Work() {
  useEffect(() => {
    pageRenderA11y('Work Examples')
  })
  return(
    <React.Fragment>
      <PageHeader h1='Work' h2='In Accessibility, Software Development, and Public Speaking.' color='#000'/>
      <Jumbotron>
        <FullWidth>
          <ProjectList/>
        </FullWidth>
      </Jumbotron>
    </React.Fragment>
  )

}


export default Work