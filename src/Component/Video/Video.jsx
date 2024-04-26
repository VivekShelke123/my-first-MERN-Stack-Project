import React from 'react'
import vid from "../Video/1228.mp4"
import "../Video/Video.css"

const Video = () => {
  return (
    <div className='vidbg'>
        <video src={vid} alt="" autoPlay={"true"} loop muted />

        <div>
          {/* <Form1/> */}
        </div>
    </div>
  )
}

export default Video
