export const getAuthTokenFromUrl = () => {
  let token = window.location.search
    ? window.location.search.split('code=')[1].split('&')[0]
    : null;
  return token;
};

export const convertSecondsToMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

export const convertMetersToMiles = (meters) => {
  return (meters * 0.000621371).toFixed(2);
};

export const metersPerSecondToMph = (metersPerSecond) => {
  return (metersPerSecond * 2.23694).toFixed(2);
};

export const metersToFeet = (meters) => {
  return (meters * 3.28084).toFixed(2);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short', // e.g., Aug
    day: 'numeric'
  });

  return formattedDate;
};
