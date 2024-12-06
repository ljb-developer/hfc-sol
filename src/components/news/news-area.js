import React from "react"
import RenderMarkdown from "../RenderMarkdown";
import ImageComponent from '../ImageComponent';

const NewsArea = ({CMSData}) => {
  return (
    <section id="news" className="about-area section-pt-70 section-pb-80">
      <div className="container">

        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
              
                <ImageComponent img={CMSData.newsSection.image.url} alt="About" cssClass="rounded-img" />

              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">   
                  {CMSData.newsSection.toptext}
                  </span>
                  <h2 className="title">{CMSData.newsSection.header}</h2>
                </div>
                <p>

                {CMSData.newsSection.content}

                </p>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  )
}

export default NewsArea
