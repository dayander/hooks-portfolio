import React, {useContext} from 'react'
import { useSelector } from 'react-redux'
import { useFetch} from "../Hooks/useFetch";
import ProjectLink from '../util/ProjectLink'
import {makeStyles } from '@material-ui/core/styles'
import Context from '../state/context/context'

const useStyles = makeStyles(theme => ({
  ul: {
    listStyleType: 'none',
    margin: 0,
    paddingInlineStart: 0,
  }
}))

function ProjectList() {
  let projects = useContext(Context).projects
  const classes = useStyles()

    const projcetList = projects.map((project, i) => {
      return(
        <li key={i}>
          <ProjectLink {...project} />
        </li>
      )
    })

    return(
      <React.Fragment>
            <ul className={classes.ul}>
              {projcetList}
            </ul>
      </React.Fragment>
    )
}


export default ProjectList