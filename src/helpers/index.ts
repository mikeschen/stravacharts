export const getAuthTokenFromUrl = (): string | null => {
  const token = window.location.search
    ? window.location.search.split('code=')[1].split('&')[0]
    : null;
  return token;
};

export const convertSecondsToMinutes = (seconds: number): number => {
  return Math.floor(seconds / 60);
};

export const convertMetersToMiles = (meters: number): string => {
  return (meters * 0.000621371).toFixed(2);
};

export const metersPerSecondToMph = (metersPerSecond: number): string => {
  return (metersPerSecond * 2.23694).toFixed(2);
};

export const metersToFeet = (meters: number): string => {
  return (meters * 3.28084).toFixed(2);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short', // e.g., Aug
    day: 'numeric'
  });

  return formattedDate;
};
