import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faJs, faHtml5, faCss3Alt, faGit, faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const features = [
  {
    title: 'Goal oriented',
    imageUrl: 'img/undraw_completed_ngx6.svg',
    description: (
      <>
        Staying focused is a key factor for me to reach my goals.
      </>
    ),
  },
  {
    title: 'Highly adaptable',
    imageUrl: 'img/undraw_design_objectives_fy1r.svg',
    description: (
      <>
        No matter what challenges I face, being adaptable is always a way for me to overcome and complete my tasks.
        This also helps me to discover what else I can do.
      </>
    ),
  },
  {
    title: 'Hands-on',
    imageUrl: 'img/undraw_developer_activity_bv83.svg',
    description: (
      <>
        There is no better way to learn than practice. That is why I believe in learning by doing.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="manfredwern"
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner, styles.tiltedBottom)}>
        <div className="container">
          <div className="row row--align-center">
            <div className="col">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>

              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('cv/')}>
                  Get Started
            </Link>
              </div>

            </div>
            <div className="col">
              <img src={useBaseUrl('img/profile_photo_werner.png')} className={styles.heroImage}></img>
            </div>
          </div>


        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={clsx('bgLightGrey', styles.tiltedTop)}>
          <div className="container">
            <div className="row row--align-center">
              <div className="col">

                <h2>Supported tools</h2>
                <p>Here are my most frequently used Framework and Languages.</p>
              </div>
              <div className="col">

                <FontAwesomeIcon icon={faAngular} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faHtml5} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faCss3Alt} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faJs} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faBootstrap} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faGit} size="4x" pull="left" border />
                <FontAwesomeIcon icon={faNpm} size="4x" pull="left" border />


              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
