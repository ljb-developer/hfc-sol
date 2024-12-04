import React from "react"
import SingleFaq from "./single-faq"

const baseStorageURL = "https://hfc-sol.s3.eu-north-1.amazonaws.com/"


// faq items
const faq_items = [
  {
    id: "One",
    title: "Where can I buy $HFC ?",
    show: true,
    desc: "Go to xxxx...... do xxxx. ",
    desc_2: "",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
  {
    id: "Two",
    title: "How do I buy $HFC ?",
    desc: "",
    parent: "accordionFaq",
    img: "",
    video: baseStorageURL + ""
  },
  {
    id: "Three",
    title: "Where can I meet other community members?",
    desc: "See our About section. Link in the upper right menu.",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
  {
    id: "Four",
    title: "Where can I find Memes, Art and Videos?",
    desc: "Besides here on our website, via Art and Videos n the top menu, you can also find it in our regular TG Channel t.me/hfcctosol.",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
]

const FaqArea = ({ spacing, style_2 = false }) => {
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
                {faq_items.map(item => (
                  <SingleFaq key={item.id} item={item} />
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
