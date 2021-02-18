import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faJs, faHtml5, faCss3Alt, faPython, faGit, faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const features = [
  {
    title: 'Stay focused',
    imageUrl: 'img/undraw_work_in_progress_uhmv.svg',
    description: (
      <>
        One thing that could help you reach your dream is to stay focused.
      </>
    ),
  },
  {
    title: 'There is more out there',
    imageUrl: 'img/undraw_the_search_s0xf.svg',
    description: (
      <>
        There&apos;s so much to discover with so little time, that&apos;s I try
        to do my best to go out there and to see more about the world, tech and opportunities.
      </>
    ),
  },
  {
    title: 'Be curious',
    imageUrl: 'img/undraw_developer_activity_bv83.svg',
    description: (
      <>
        Fast learner, higly adaptable and I do my best to keep myself updated on the latest tech trend and if
        there is always something I can learn from.
        
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
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
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('cv/')}>
              Get Started
            </Link>
          </div>

            </div>
            <div className="col">

        <img src={useBaseUrl('img/undraw_profile_pic_ic5t.svg')} className={styles.heroImage}></img>
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
                <p>Here are some of the Languages and Framework that I use on a daily basis.</p>
                </div>
                <div className="col">

        <FontAwesomeIcon icon={faAngular} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faHtml5} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faCss3Alt} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faJs} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faBootstrap} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faGit} size="4x" pull="left" border/>
        <FontAwesomeIcon icon={faNpm} size="4x" pull="left" border/>


</div>
              </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
