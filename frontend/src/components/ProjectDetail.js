import React, { useEffect, useState } from "react";
import GitHub from "../../static/images/github-mark-white.svg";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";
import Skeleton from 'react-loading-skeleton';

function ProjectDetail() {
  const { ProjectId } = useParams();
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState("");
  const [repository, setRepository] = useState("");
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    fetch("/api/load_details", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: ProjectId,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("Error while loading");
        }
      })
      .then((data) => {
        if (i18n.language === "cs") {
          setName(data.name);
          setDescription(data.description);
          setPurpose(data.purpose);
        } else {
          setName(data.name_en);
          setDescription(data.description_en);
          setPurpose(data.purpose_en);
        }

        setRepository(data.repository);

        setScreenshots(data.screenshots);
      })
      .catch((response) => {
        console.log("error getting data");
      });
  }, [i18n.language]);

  // Funkce pro detekci a vytváření odkazů v textu
  const renderDescriptionWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{name || <Skeleton />}</h1>
        <div className="col-sm-8">
          <p>{renderDescriptionWithLinks(description) || <Skeleton />}</p>
        </div>
        <div className="col-sm-8" id="purpose">
          <p>{purpose || <Skeleton />}</p>
        </div>
        <div className="col-sm-8">
          <div className="row" id="images">
            <ImageGallery items={screenshots} />
          </div>
        </div>
        <div
          className="col-sm-8"
          id="github_repository"
          style={{ marginTop: "10px" }}
        >
          <a href={repository} style={{ textDecoration: "none" }}>
            <img src={GitHub} id="github_icon" width={45} /> GitHub{" "}
            {t("Repository")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
