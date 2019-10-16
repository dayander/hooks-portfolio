import React from 'react'
import propTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  content: {
    position: 'relative',
    padding: '30px'
  },
  image: {
    display: 'block',
    margin: 'auto',
    maxWidth: '100%'
  }

}))

function SinglePicture(props) {
  const {image, altText} = props
  const classes = useStyles()

  return(
    <div className={classes.content}>
      <img src={image} alt={altText} className={classes.image}/>
    </div>
  )
}

SinglePicture.propTypes = {
  image: propTypes.string.isRequired,
  altText: propTypes.string.isRequired
}

export default SinglePicture