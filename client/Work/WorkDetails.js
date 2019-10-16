import React, {useContext, useEffect} from 'react'
import Context from '../state/context/context'
import pageRenderA11y from '../util/pageRenderA11y'
import PageHeader from "../util/PageHeader";
import PullSection from "../util/PullSection";
import DoublePicture from "../util/DoublePicture";
import LargePicture from "../util/LargePicture";
import Onward from '../util/Onward'

function WorkDetails(props) {
  const project = useContext(Context).projects.find(x => x.address === props.match.url);
  const projects = useContext(Context).projects.filter(x => x.address !== props.match.url)
  useEffect(() => {
    pageRenderA11y(project.projectName)
  })

  return (
    <React.Fragment>
      <PageHeader
        h1={project.companyName}
        h2={project.projectHeading}
        img={project.bgImage}
      />
      <PullSection
        header={project.challengeHeading}
        body={project.challenge}
      />
      <DoublePicture img1={project.challenge01} img2={project.challenge02}/>
      <PullSection header={project.approachHeading} body={project.approach}/>
      <DoublePicture img1={project.process01} img2={project.process02}/>
      <PullSection header={project.outcomeHeading} body={project.outcome}/>
      <LargePicture imgPath={project.outcome01.imgPath} altText={project.outcome01.altText}/>
      <Onward projects={projects}/>
    </React.Fragment>
  )
}

export default WorkDetails