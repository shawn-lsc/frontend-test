import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

import "../style/appListing.scss";

export default function AppListingAppComponent(props) {
  const { index, id } = props;
  const [listingDetails, setListingDetails] = useState(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/hk/lookup?id=" + id)
      .then((response) => response.json())
      .then((details) => {
        setListingDetails(details.results[0]);
      });
  }, [id]);

  return (
    listingDetails && (
      <div className="item">
        <label>{index + 1}</label>
        <img src={listingDetails.artworkUrl100} alt=""></img>
        <div className="detail">
          <div className="title">{listingDetails.trackName}</div>
          <div className="genresName">{listingDetails.genres[0]}</div>

          <div className="ratingWrapper">
            <div className="averageUserRating">
              <Rating
                readonly
                initialValue={Math.round(listingDetails.averageUserRating)}
              />
            </div>
            <div className="userRatingCount">
              {"(" + listingDetails.userRatingCount + ")"}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
