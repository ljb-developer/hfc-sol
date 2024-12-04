import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import Brands from "../../components/brands/brands"

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = () => {
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <div className="row justify-content-center">
            <Brands />

            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <p>
                  A community-run memecoin project fighting for animal cruelty justice & your tax dollars
                </p>
                <ul className="list-wrap footer__social">
                  <li>
                    <a href="https://x.com/HFC_Solana">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@hfc_solana">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/hfcctosol">
                      <i className="fab fa-telegram-plane"></i>
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
