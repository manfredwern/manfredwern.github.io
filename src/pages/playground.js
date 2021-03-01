import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


function Playground() {
    return (
        <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col text--center">
                            <h1>Showroom</h1>
                            <p>Here are some of projects that I am currently building to level up my skills</p>
                        </div>
                    </div>

                    <div className="row row--align-center">
                        <div className="col text--center">
                            <div className={clsx('card', styles.cardUp)}>
                                <Link
                                    className="projectTitle"
                                    to="https://nasa-apod-gallery.herokuapp.com/">
                                    Astronomy picture of the day
                            </Link>
                                <div className="card__body">
                                    <div className="avatar">
                                        <div className="avatar__intro margin-left--none">
                                            <div className="text--center">
                                                <p>Travel back in time to discover the cosmos captured by nasa</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}


export default Playground;
