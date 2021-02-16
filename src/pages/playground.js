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
                            <h1>MY SHOWCASE</h1>
                        </div>
                    </div>

                    <div className="row row--align-center">
                        <div className="col text--center">
                            <Link
                                className={styles.featureProjectText}
                                to="https://nasa-apod-gallery.herokuapp.com/">
                                APOD NASA Gallery                        
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}


export default Playground;
