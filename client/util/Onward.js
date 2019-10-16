import React from 'react'
import Well from './Well'
import Container from "./Container"
import Typography from '@material-ui/core/Typography'
import propTypes from 'prop-types'
import List from '@material-ui/core/List';
import ProjectLink from "./ProjectLink";

function Onward(props) {
  const {projects} = props

  return(
    <React.Fragment>
      <Well>
        <Container>
          <Typography component='h2' variant='h3'>
            Onward
          </Typography>
        </Container>
        <List>
          {projects.map((x,i) => {
            return(
              <li key={i}>
                <ProjectLink {...x}/>
              </li>
            )
          })}
        </List>

      </Well>
    </React.Fragment>
  )
}

Onward.propTypes = {
  projects: propTypes.array.isRequired
}

export default Onward