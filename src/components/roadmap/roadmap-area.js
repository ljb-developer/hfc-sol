import React from "react"

// road map data
const road_map_data = [
  {
    step: 1,
    percent: 0,
    heading: "The Birth of the Meme",
    desc: "Define a relatable narrative.",
    lists: ["Define a relatable narrative.", "Launch on social media platforms", "Start giveaways and meme contests to build buzz."],
  },
  {
    step: 2,
    percent: 25,
    heading: "Production",
    desc: "Sed ut perspiciatis unde omnis iste natus error, totam rem aperiam, eaque ipsae veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 3,
    percent: 50,
    heading: "Launch",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum in ea voluptate.",
    lists: ["xxxx", "yyyy", "zzzz"],
  },
]

const RoadMapAreaThree = () => {
  return (
    <section
      id="roadmap"
      className="roadmap-area roadmap-style-three section-pt-70 section-pb-30"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                Project <span className="tg-text-gradient">Roadmap</span>
              </h2>
            </div>
          </div>
        </div>
        <div
          className="roadmap__wrapper-three"
          data-anime="targets: > * > * > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: anime.stagger(100);"
        >
          <div className="row justify-content-center">
            {road_map_data.map(item => (
              <div key={item.step} className="col-lg-4 col-md-6 col-sm-9">
                <div className="roadmap__card style-three">
                  <div className="roadmap__percent">
                    <span>{item.percent}</span>%
                  </div>
                  <div className="roadmap__step">
                    <span className="tg-text-gradient d-inline-flex">
                      Phase {item.step < 10 ? `0${item.step}` : item.step}
                    </span>
                  </div>
                  <h3 className="roadmap__heading">{item.heading}</h3>
                  <p>{item.desc}</p>
                  <ul className="roadmap__lists list-wrap">
                    {item.lists.map((l, i) => (
                      <li key={i}>
                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaThree
