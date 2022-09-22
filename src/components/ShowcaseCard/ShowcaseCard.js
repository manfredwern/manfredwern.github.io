import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./ShowcaseCard.module.css";

function ShowcaseCard({ image, website, github, title, text, languages }) {
  return (
    <>
      <div className="card" style={{ height: "100%" }}>
        <div className={clsx("card__image", styles.showcaseCardImage)}>
          <div>
            <img
              src={image}
              alt="APOD_Image"
              width="640"
              height="322"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                marginBottom: "-4px",
              }}
            />
          </div>
        </div>
        <div className="card__body">
          <div className={styles.showcaseCardHeader}>
            <h4 className={styles.showcaseCardTitle}>
              <Link
                to={website}
              >
                {title}
              </Link>
            </h4>
            <Link
              to={website}
              className={clsx("button button--small button--secondary", styles.showcaseCardSrcBtn)}
            >
              Source
            </Link>
          </div>
          <div className={styles.showcaseCardBody}>
            <p>
              {text}
            </p>
          </div>
        </div>

        <ul className={clsx("card__footer", styles.cardFooter)}>
          {languages && languages.map((lang, index) => (
            <li
              key={index}
              className={styles.tag}>
              <span className={styles.textLabel}>{lang}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ShowcaseCard;