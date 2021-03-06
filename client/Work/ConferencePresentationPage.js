import React, {useContext, useEffect} from 'react'
import Context from '../state/context/context'
import PageHeader from "../util/PageHeader"
import Well from '../util/Well'
import Jumbotron from '../util/Jumbotron'
import PullQuote from '../util/PullQuote'
import Typography from '@material-ui/core/Typography'
import pageRenderA11y from '../util/pageRenderA11y'


function ConferencePresentationPage(props) {
  useEffect(() => {
    pageRenderA11y(project.companyName)
  })
  const project = useContext(Context).projects.find(x => x.address === props.match.path);
  return(
    <React.Fragment>
      <PageHeader h1={project.companyName} h2={project.projectHeading} img={project.bgImage}/>
      <Well>
        <Jumbotron>
          <PullQuote>
            <Typography component='h2' variant='h3'>
              About the Presentation
            </Typography>
            <br/>
            <Typography component='p' variant='subtitle1'>
              In March of 2019 I had the opportunity to present at Ignite UX Michigan. Ignite UX Michigan is a conference in Ann Arbor, Michigan.
              Each Ignite Talk is a 5 minute talk with topics ranging from User Experience Design and User Experience Research.
            </Typography>
          </PullQuote>

          <PullQuote>
            <Typography component='h2' variant='h3'>
              My Presentation
            </Typography>
            <br/>
            <Typography component='p' variant='subtitle1'>
              The presentation I gave at Ignite UX is focused on Accessibility. I covered WebAIM's Research of the top accessibility errors on the webs most visited pages.
            </Typography>
          </PullQuote>
          <div className={'video-container'}>
            <iframe className={'video-iframe'} src="https://www.youtube.com/embed/69Gjod5B4fw" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            >
            </iframe>
          </div>
        </Jumbotron>
      </Well>
    </React.Fragment>
  )
}

export default ConferencePresentationPage;