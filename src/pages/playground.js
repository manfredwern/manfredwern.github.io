import React from "react";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import ShowcaseCard from '../components/ShowcaseCard/ShowcaseCard';

function Playground() {
  const projects = [
    {
      "image": '/img/nasa-apod-gallery.png',
      "website": 'https://nasa-apod-gallery-beta.vercel.app/',
      "github": 'https://github.com/manfredwern/nasa-apod-gallery',
      "title": 'APOD',
      "text": 'Travel back in time to discover the cosmos captured by nasa.',
      "languages": ['React', 'Javascript']
    },
    {
      "image": '/img/treevya-2.png',
      "website": 'https://treevya.vercel.app/',
      "github": 'https://github.com/manfredwern/treevya',
      "title": 'Treevya',
      "text": 'Test your skills and learn from Treevya Quiz.',
      "languages": ['React', 'Javascript']
    },
    {
      "image": '/img/adify.png',
      "website": 'https://ad-from-landingpage.vercel.app/',
      "github": 'https://github.com/manfredwern/ad-from-landingpage',
      "title": 'Adify',
      "text": 'Transform Landing Pages into Eye-Catching Ads.',
      "languages": ['Next.js', 'React', 'Typescript']
    },
  ];

  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col text--center">
              <h1>
                Showroom <FontAwesomeIcon icon={faMeteor} size="1x" />
              </h1>
              <p>
              Welcome to my showroom! Explore a selection of projects I'm currently crafting to enhance my skill set.
              </p>
            </div>
          </div>

          <div className="row row--align-center">
            {
              projects.map((project, index) => (
                <div className="col margin-bottom--lg" style={{ alignSelf: "stretch" }}>
                  <ShowcaseCard key={index}
                    image={project.image}
                    website={project.website}
                    github={project.github}
                    title={project.title}
                    text={project.text}
                    languages={project.languages}
                  ></ShowcaseCard>
                </div >
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Playground;
