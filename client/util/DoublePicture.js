import React from 'react'
import Container from "./Container";
import Grid from '@material-ui/core/Grid'
import SinglePicture from "./SinglePicture";
import propTypes from 'prop-types'

function DoublePicture(props) {
  const {img1, img2} = props

  return(
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <SinglePicture image={img1.imgPath} altText={img1.altText}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SinglePicture image={img2.imgPath} altText={img2.altText}/>
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  )
}

DoublePicture.propTypes = {
  img1: propTypes.object.isRequired,
  img2: propTypes.object.isRequired
}

export default DoublePicture