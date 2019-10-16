import React from 'react'
import PullQuote from './PullQuote'
import Typography from '@material-ui/core/Typography'
import propTypes from 'prop-types'

function PullSection(props) {
  const {header, body} = props

  return(
    <PullQuote>
      <Typography component='h2' variant='h4'>
        {header}
      </Typography>
      <Typography component='p'>
        {body}
      </Typography>
    </PullQuote>
  )
}

PullSection.propTypes = {
  header: propTypes.string.isRequired,
  body: propTypes.string.isRequired
}

export default PullSection