import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

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
            <div className="col" style={{ alignSelf: "stretch" }}>
              <div className="card" style={{ height: "100%" }}>
                <div className={clsx("card__image", styles.showcaseCardImage)}>
                  <div>
                    <img
                      src="/static/img/nasa-apod-gallery.png"
                      alt="Component Kit"
                      width="640"
                      height="322"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%;",
                        marginBottom: "-4px",
                      }}
                    />
                  </div>
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left">
                      <h4 className="avatar__name">APOD</h4>
                      <div className="avatar__subtitle">
                        <p>
                          Travel back in time to discover the cosmos captured by
                          nasa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link
                      to="https://nasa-apod-gallery.herokuapp.com/"
                      className="button button--small button--secondary button--block"
                    >
                      Website
                    </Link>
                    <Link
                      to="https://github.com/manfredwern/nasa-apod-gallery"
                      className="button button--small button--secondary button--block"
                    >
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ alignSelf: "stretch" }}>
              <div className="card" style={{ height: "100%" }}>
                <div className={clsx("card__image", styles.showcaseCardImage)}>
                  <div>
                    <img
                      src="/static/img/treevya.png"
                      alt="Component Kit"
                      width="640"
                      height="322"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%;",
                        marginBottom: "-4px",
                      }}
                    />
                  </div>
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left">
                      <h4 className="avatar__name">Treevya</h4>
                      <div className="avatar__subtitle">
                        <p>Test your skills and learn from Treevya Quiz.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link
                      to="https://treevya.herokuapp.com/"
                      className="button button--small button--secondary button--block"
                    >
                      Website
                    </Link>
                    <Link
                      to="https://github.com/manfredwern/treevya"
                      className="button button--small button--secondary button--block"
                    >
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Playground;
