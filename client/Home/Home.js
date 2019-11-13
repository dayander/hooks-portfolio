import React, {useEffect, useState, useContext} from 'react'
import PageHeader from "../util/PageHeader";
import { makeStyles } from '@material-ui/core/styles'
import PullQuote from "../util/PullQuote"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import ProjectSection from './ProjectSection'
import Context from '../state/context/context'
import pageRenderA11y from '../util/pageRenderA11y'


const useStyles = makeStyles(theme => {
    header: {

    }
})

export function Home() {
  useEffect(() => {
    pageRenderA11y('Portfolio Home')
  })
  let context = useContext(Context)
    return(
        <React.Fragment>
            <PageHeader
                img='/images/homePageHeader.jpg'
                h1="Anderson Day's Portfolio"
                h2='Software Development and Accessibility'
            />
            <PullQuote>
                <Typography style={{fontWeight: 300}} component='p' variant='h6'>

                  {/*Hello, I am currently a Software Engineer at Target Corporation in the */}
                  {/*Technology Leadership Program, working on XXX. I graduated from Michigan */}
                  {/*State University with a degree in*/}
                  {/*<Link href='http://xa.cal.msu.edu/'> Experience Architecture </Link>*/}
                  {/*With experience */}
                  {/*in software engineering and a background in user experience design, I create */}
                  {/*accessible software from the ground up while communicating ideas to other engineers, */}
                  {/*designers, and various stakeholders. I love learning and experimenting with new technologies */}
                  {/*to bring users creative and innovative software solutions.*/}





                    Hello, I am a software engineer studying
                    <Link href='http://xa.cal.msu.edu/'> Experience Architecture </Link>
                     at Michigan State University. Being a developer while learning user experience
                    design allows me to create accessible software from the ground up while
                    communicating ideas to other engineers, designers, and various stakeholders.
                </Typography>
            </PullQuote>

            <ProjectSection projects={context.projects}/>
        </React.Fragment>

    )
}
