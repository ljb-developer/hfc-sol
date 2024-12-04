import React from "react"
import VideoPlayerBasic from "../videos/videoplayer-basic";

const SingleFaq = ({ item }) => {
  const { title, desc, id, show, parent, desc_2, img, video } = item || {}
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
          {desc && <p>{desc_2}</p>}
        </div><div className="accordion-body">
          
          
          {video !== "" ? (
                                         <VideoPlayerBasic 
                                         url={video}
                                         
                                         />
                          ) : ""}

{img !== "" ? (
                                         <img src={img} style={{width: "600px"}}/>
                          ) : ""}


          </div>
      </div>
    </div>
  )
}

export default SingleFaq
