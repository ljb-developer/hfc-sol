import React from "react"
import SingleFaq from "./single-faq"

const baseStorageURL = "https://hfc-sol.s3.eu-north-1.amazonaws.com/"


// faq items
const faq_items = [
  {
    id: "One",
    title: "What is Hamster Fight Club (HFC)?",
    show: true,
    desc: "HFC is a meme-based cryptocurrency created by the community after a viral government-related meme sparked its concept.",
    desc_2: "",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
  {
    id: "Two",
    title: "Why was HFC created?",
    desc: "To combine humor with a robust crypto project, empowering the community and delivering value through engagement and innovation.",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
  {
    id: "Three",
    title: "How can I buy $HFC?",
    desc: "$HFC is available on decentralized exchanges like Raydium, more exchange listings to come. Stay tuned for listings on major platforms!",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
  {
    id: "Four",
    title: "What’s the purpose of HFC?",
    desc: "To bring fun to crypto while offering real value through NFTs, and community governance.",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
]

const FaqArea = ({ CMSData, spacing, style_2 = false }) => {
  return (
    <section
      id="faq"
      className={`faq-area ${style_2 ? "faq-style-two" : ""} ${
        spacing ? spacing : "section-py-80"
      }`}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">FAQ</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {CMSData.allFaqs.map(item, index => (
                  <SingleFaq key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
