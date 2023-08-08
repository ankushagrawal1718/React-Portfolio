import "./ProjectBackgroundStyle.css"

import React from 'react'

function ProjectBackground(props){
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
// const ProjectBackground = () => {
//   return (
//     <div className="hero-img">
//         <div className="heading">
//             <h1>This is heading</h1>
//             <p>this is text</p>
//         </div>
//     </div>
//   )
// }

export default ProjectBackground