import React, {useEffect,  useContext, useState, useReducer } from 'react'
import PageHeader from '../util/PageHeader'
import Jumbotron from "../util/Jumbotron";
import Container from "../util/Container";
import ContactForm from "./ContactForm";

import pageRenderA11y from '../util/pageRenderA11y'

function ContactPage() {

  useEffect(() => {
    pageRenderA11y('Contact')
  })
    return(
        <React.Fragment>
            <PageHeader
                h1='Contact Anderson Day'
                h2='Lets get in touch!'
                color='#000'
            />
            <Jumbotron>
                <Container>
                  {/*<form onSubmit={sendPost} >*/}
                    {/*<button type='submit' >*/}
                        {/*try me*/}
                    {/*</button>*/}
                  {/*</form>*/}

                  <ContactForm/>

                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}


export default ContactPage