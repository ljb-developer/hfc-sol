import React from "react"
import { useState } from "react"
import artdice_images from "../../data/artdice-data"

const WelcomeSection = ({CMSData}) => {
  const [currentImage, setCurrentImage] = useState(artdice_images[0])

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * artdice_images.length)
    setCurrentImage(artdice_images[randomIndex])
  }

  return (
    <section className="banner-area banner-style-three position-relative">
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/bg/gradient_bg01.png" }}
        ></div>
      </div>
      <div className="banner__three-inner">
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                style={{justifyContent: "center", width: "100%"}}
              >
                <span className="titleF">{CMSData.welcomeSection.header1}
                <br/>
                {CMSData.welcomeSection.header2}</span>
                <p className="desc">
                {CMSData.welcomeSection.slogan}
                </p>

                <div style={{ margin: "0px", padding: "6x" }}>
      

  
                  <ul className="list-wrap footer__social welcome-menu">

                  <a
                    href="https://raydium.io/swap/?inputMint=sol&outputMint=F9nJsVxZGn3Az7HAXUrLQs2WaWHiKRbNRYfSpRR2UPRC"
                    target="_blank"
                    className="banner__btn btn scroll-to-target"
                    style={{ margin: "10px 0px" }}
                  >
                    <span style={{fontSize: "24px"}}>Buy</span>
                    {/* <i className="unicon-arrow-up-right"></i> */}
                  </a>

                  <li>
                    <a href="https://t.me/+io44QuNs8mowNjFk">
                      <img src="/assets/img/icons/tg.svg" style={{width: "50px"}}/>
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/HFC_Sol">
                    <img src="/assets/img/icons/x.svg" style={{width: "50px"}}/>
                    </a>
                  </li>

                  <li>
                    <a href="https://tiktok.com/@hfc_solana">
                    <img src="/assets/img/icons/tiktok.webp" style={{width: "50px"}}/>
                    </a>
                  </li>  

                 
                 
                </ul>

                </div>

                <div className="mobile-hfc">
                <img src="/assets/img/logo/hfc_logo.jpeg"/>
                </div>

      
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner__images-two"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >


                <div className="banner__images-grid-two">
                  <div
                    className="image-grid-item"
                    style={{ transform: "0px" }}
                  >
                    <div className="main-image" onClick={changeImage}>
                      {/* <canvas width="400" height="400"></canvas>  */}
                     <img src={currentImage} alt="HFC" /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
