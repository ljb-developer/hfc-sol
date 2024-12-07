import React from "react"

// road map data
const road_map_data = [
  {
    step: 1,
    percent: 0,
    heading: "Birth of the Meme",
    desc: "",
    lists: ["Define a relatable narrative.", "Launch on social media platforms.", "Start giveaways and meme contests to build buzz."],
  },
  {
    step: 2,
    percent: 25,
    heading: "Hype Machine Activation",
    desc: "",
    lists: ["Introduce branding, including logo and mascot.", "Partner with influencers and meme accounts.", "Conduct AMA sessions and development-launch teasers."],
  },
  {
    step: 3,
    percent: 50,
    heading: "Post-Launch Blitzkrieg",
    desc: "",
    lists: ["Celebrate launch with viral challenges and meme contests.", "Introduce NFT collections tied to HFC lore.", "Share weekly updates and host interactive community events."],
  },
  {
    step: 4,
    percent: 75,
    heading: "Meme Empire Rises",
    desc: "",
    lists: ["Expand globally with multilingual campaigns.", "Use treasury funds for ads and partnerships.", "Build utility through staking and governance."],
  },
  {
    step: 5,
    percent: 100,
    heading: "Meme Domination",
    desc: "",
    lists: ["Expand into the Metaverse and NFT marketplaces.", "Launch community-driven initiatives and decentralized governance."],
  }
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
                  <h3 className="roadmap__heading" style={{minHeight: "70px"}}>{item.heading}</h3>
                  {/* <p>{item.desc}</p> */}
                  <ul className="roadmap__lists list-wrap">
                    {item.lists.map((l, i) => (
                      <li key={i} style={{minHeight: "44px", alignItems: "flex-start"}}>
                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex" style={{minHeight: "44px", alignItems: "flex-start"}}></i>
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
