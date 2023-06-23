import React from "react";
import PropTypes from 'prop-types';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";


// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// export const isPersistedState = stateName => {
//   const sessionState = sessionStorage.getItem(stateName);
//   return sessionState && JSON.parse(sessionState);
// };

export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

//formattedDate for year released, in the movies page
export const formattedDate = formatted => {
  let formattedDate = {movie.release_date}.slice(0,6)
};