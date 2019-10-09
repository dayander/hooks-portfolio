import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  fullWidth: {
    minHeight: '20px',
    padding: '19px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius: '4px',
    webkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
  },

}))

function FullWidth({children}) {
  const classes = useStyles()
  return(
    <div className={classes.fullWidth}>
      {children}
    </div>
  )
}


export default FullWidth