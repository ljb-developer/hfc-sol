import React from "react"
import RenderMarkdown from "../RenderMarkdown";
import ImageComponent from '../ImageComponent';

function formatDateTime(isoDateString) {
  // Create a new Date object from the ISO string
  const date = new Date(isoDateString);

  // Extract the components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Format as "YYYY-MM-DD HH:MM"
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const NewsArea = ({CMSData}) => {
  return (
    <section id="news" className="about-area section-pt-70 section-pb-80">
      <div className="container">

      <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                News / <span className="tg-text-gradient">Blog</span>
              </h2>
            </div>
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
                  {formatDateTime(item.date)}
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
