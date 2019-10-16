import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  panel:{
    marginBottom: '20px',
    backgroundColor: '#eee',
    border: '1px solid transparent',
    borderRadius: '4px',
    boxShadow: '1px 1px 10px rgba(0,0,0,.05)',
    padding: '25px'
  }
}))

function Panel(props) {
  const classes = useStyles()
  return(
    <div className={classes.panel}>
      {props.children}
    </div>
  )
}

export default Panel