import React from 'react'
import propTypes from 'prop-types'

function PageRenderA11y(pageTitle) {
  topScroll()
  if(pageTitle){
    setPageTitle(pageTitle)
  }
}

function topScroll() {
  window.scrollTo(0,0)
}

function setPageTitle(pageTitle) {
  document.title = `${pageTitle} - Anderson Day`

}

PageRenderA11y.propTypes = {
  pageTitle: propTypes.string
}

export default PageRenderA11y