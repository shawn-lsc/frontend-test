import React, { useState, useEffect } from "react";
import "../style/appRecommendation.scss";
import AppRecommendationComponent from "./AppRecommendationComponent";

export default function AppRecommendation() {
  const [topPaid10Data, setTopPaid10Data] = useState(null);

  useEffect(() => {
    fetch(
      "https://rss.applemarketingtools.com/api/v2/hk/apps/top-paid/10/apps.json"
    )
      .then((response) => response.json())
      .then((actualData) => {
        const results = actualData.feed.results;
        setTopPaid10Data(actualData.feed.results);
      });
  }, []);

  return (
    <div className="appRecommendation">
      <label>推介</label>
      <div className="appRecommendationList">
        {topPaid10Data &&
          topPaid10Data.map((topPaid10Data) => {
            return <AppRecommendationComponent id={topPaid10Data.id} />;
          })}
      </div>
    </div>
  );
}
