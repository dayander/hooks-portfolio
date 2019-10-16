import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from "./Container";
import SinglePicture from "./SinglePicture";
import propTypes from 'prop-types'

function LargePicture(props) {
  const {imgPath, altText} = props

  return(
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <SinglePicture image={imgPath} altText={altText}/>
        </Grid>
      </Grid>
    </Container>
  )
}

LargePicture.propTypes = {
  imgPath: propTypes.string.isRequired,
  altText: propTypes.string.isRequired
}

export default LargePicture