import React from "react"
import { SingleBrand } from "./home-brands"

const Brands = () => {
  return (
    <div
      className="brand-area section-pt-30 section-pb-65"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <div className="brand__list">

              {/* <SingleBrand img_1="wallet-01.svg" img_2="wallet-light-01.svg" /> */}
              <a
                href="https://dexscreener.com/solana/8axpmnryehimmfu89wdhmrgdsrjmvjkbgxmjxemdneh3"
                target="_blank"
              >
                <SingleBrand
                  img_1="dexscreener_lighton.png"
                  img_2="dexscreener3.png"
                />
              </a>

              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/8AXpmNrYEHimMfU89WDhMrgdSRjmvJkBgXmJXEMDNeh3?t=1732822866493"
                target="_blank"
              >
              <SingleBrand
                  img_1="dextools.webp"
                  img_2="dextools_lighton.png"
                />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands
