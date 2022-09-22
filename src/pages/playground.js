import React from "react";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import ShowcaseCard from '../components/ShowcaseCard/ShowcaseCard';

function Playground() {
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
                Here are some of projects that I am currently building to level
                up my skills
              </p>
            </div>
          </div>

          <div className="row row--align-center">
            <div className="col margin-bottom--lg" style={{ alignSelf: "stretch" }}>

              <ShowcaseCard
                image='/img/nasa-apod-gallery.png'
                website='https://github.com/manfredwern/nasa-apod-gallery'
                github='https://nasa-apod-gallery.herokuapp.com/'
                title='APOD'
                text=' Travel back in time to discover the cosmos captured by
                nasa.'
                languages={['React','Javascript']}
              ></ShowcaseCard>

            </div>

            <div className="col margin-bottom--lg" style={{ alignSelf: "stretch" }}>
              <ShowcaseCard
                image='/img/treevya.png'
                website='https://treevya.herokuapp.com/'
                github='https://github.com/manfredwern/treevya'
                title='Treevya'
                text='Test your skills and learn from Treevya Quiz.'
                languages={['React','Javascript']}
              ></ShowcaseCard>
            
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Playground;
