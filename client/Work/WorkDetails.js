import React, {useContext, useEffect} from 'react'
import Context from '../state/context/context'
function WorkDetails(props) {
  const project = useContext(Context).projects.find(x => x.address === props.match.path);
  useEffect(() => {
    window.scrollTo(0,0)
  })
  console.log(project)

  return "Work Details"
}

export default WorkDetails