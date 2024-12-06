import React from "react"
import RenderMarkdown from "../RenderMarkdown";
import ImageComponent from '../ImageComponent';

const AboutArea = ({CMSData}) => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">


        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
              
                <ImageComponent img={CMSData.aboutSection.image.url} alt="About" cssClass="rounded-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">   
                  {CMSData.aboutSection.toptext}
                  </span>
                  <h2 className="title">{CMSData.aboutSection.header}</h2>
                </div>
                <p>

                {CMSData.aboutSection.content}

                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
              
                <ImageComponent img={CMSData.aboutSection2.image.url} alt="About" cssClass="rounded-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">   
                  {CMSData.aboutSection2.toptext}
                  </span>
                  <h2 className="title">{CMSData.aboutSection2.header}</h2>
                </div>
                <p>

                {CMSData.aboutSection2.content}

                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >


                <ImageComponent img={CMSData.socialsSection.image.url} alt="Socials" cssClass="rounded-img" />

              </div>
            </div>
            <div className="col-lg-6" id="mari-on-socials">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                  {CMSData.socialsSection.toptext}
                  </span>
                  <h2 className="title">{CMSData.socialsSection.header}</h2>
                </div>

                <RenderMarkdown content={JSON.stringify(CMSData.socialsSection.content, null, 2).replace(/"/g, "").trim().replace(/\n/g, "  \n")} />

              </div>
            </div>
          </div>


          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >


                <ImageComponent img={CMSData.aboutSection3.image.url} alt="Socials" cssClass="rounded-img" />

              </div>
            </div>
            <div className="col-lg-6" id="mari-on-socials">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                  {CMSData.aboutSection3.toptext}
                  </span>
                  <h2 className="title">{CMSData.aboutSection3.header}</h2>
                </div>

                <RenderMarkdown content={JSON.stringify(CMSData.aboutSection3.content, null, 2).replace(/"/g, "").trim().replace(/\n/g, "  \n")} />

              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  )
}

export default AboutArea
