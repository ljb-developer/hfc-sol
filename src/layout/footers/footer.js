import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import Brands from "../../components/brands/brands"

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = ({CMSData}) => {
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <div className="row justify-content-center">
            <Brands />

            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <p>
                {CMSData.footer.description}
                  {/* A community-run memecoin project fighting for animal cruelty justice & your tax dollars */}
                </p>
                <ul className="list-wrap footer__social welcome-menu">

                    <li>
                      <a href="https://t.me/hfcctosol">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
