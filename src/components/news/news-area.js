import React from "react"
import RenderMarkdown from "../RenderMarkdown";
import ImageComponent from '../ImageComponent';

const NewsArea = ({CMSData}) => {
  return (
    <section id="news" className="about-area section-pt-70 section-pb-80">
      <div className="container">

      <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-65">
              <h2 className="title">

                News / Blog
          
              </h2>
            </div>
          </div>
       

        <div className="about__row-reverse">

        {CMSData.allNewsSections.map((item, index) => (

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
              
                <ImageComponent img={item.image.url} alt="About" cssClass="rounded-img" />

              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">   
                  {item.date}
                  </span>
                  <h2 className="title">{item.header}</h2>
                </div>
                <p>

                {item.content}

                </p>
              </div>
            </div>
          </div>

        ))}
      
        </div>
      </div>
    </section>
  )
}

export default NewsArea
