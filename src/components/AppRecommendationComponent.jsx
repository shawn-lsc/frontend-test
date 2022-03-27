import React, { useState, useEffect } from "react";
import "../style/appRecommendation.scss";

export default function AppRecommendationComponent(props) {
  const { id } = props;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/hk/lookup?id=" + id)
      .then((response) => response.json())
      .then((details) => {
        setDetails(details.results[0]);
      });
  }, [id]);

  return (
    details && (
      <div className="item">
        <img src={details.artworkUrl100} alt=""></img>
        <div className="detail">
          <div className="title">{details.trackName}</div>
          <div className="genresName">{details.genres[0]}</div>
        </div>
      </div>
    )
  );
}
