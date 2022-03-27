import React from "react";
import { useState, useEffect } from "react";
import AppListingAppComponent from "./AppListingAppComponent";

import "../style/appListing.scss";

export default function AppListing() {
  const [topFree100Data, setTopFree100Data] = useState(null);

  useEffect(() => {
    fetch(
      "https://rss.applemarketingtools.com/api/v2/hk/apps/top-free/100/apps.json"
    )
      .then((response) => response.json())
      .then((actualData) => {
        const results = actualData.feed.results;
        setTopFree100Data(actualData.feed.results);
      });
  }, []);

  return (
    <div className="appListing">
      {topFree100Data &&
        topFree100Data.map((topFree100Data, index) => {
          return (
            <AppListingAppComponent index={index} id={topFree100Data.id} />
          );
        })}
    </div>
  );
}
