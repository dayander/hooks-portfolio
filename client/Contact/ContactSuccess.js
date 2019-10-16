import React, {useEffect} from 'react'
import PageHeader from '../util/PageHeader'
import Jumbotron from "../util/Jumbotron";
import Container from "../util/Container";
import Typography from '@material-ui/core/Typography'
import pageRenderA11y from '../util/pageRenderA11y'
import {Link} from 'react-router-dom'


function ContactSuccess() {
  useEffect(() => {
    pageRenderA11y('Contact Success')
  })

  return(
    <React.Fragment>
      <PageHeader h1='Contact Message Sent' color='#000'/>
      <Jumbotron>
        <Container>
          <Typography component='p' variant='subtitle1'>
            Thank you for reaching out. I will get back to you as soon as possible.
          </Typography>
          <Link to='/contact'>
            Send another message
          </Link>

        </Container>
      </Jumbotron>

    </React.Fragment>
  )

}

export default ContactSuccess