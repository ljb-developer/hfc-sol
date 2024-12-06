import React from "react"
import VideoPlayerBasic from "../videos/videoplayer-basic";

const SingleFaq = ({ key, item }) => {
  const { title, desc, image, video } = item || {}

  let show = false;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${key}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse${key}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${key}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${key}`}
        data-bs-parent={`#accordionFaq`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
          {desc && <p></p>}
        </div><div className="accordion-body">
          
          
          {video !== "" ? (
                                         <VideoPlayerBasic 
                                         url={video}
                                         
                                         />
                          ) : ""}

{image !== "" ? (
                                         <img src={image} style={{width: "600px"}}/>
                          ) : ""}


          </div>
      </div>
    </div>
  )
}

export default SingleFaq
