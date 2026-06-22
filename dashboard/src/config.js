const isProduction = import.meta.env.PROD;
const configuredApiUrl = import.meta.env.VITE_API_URL;
const configuredLandingUrl = import.meta.env.VITE_LANDING_URL;
const isLocalUrl = (url = "") => /localhost|127\.0\.0\.1/i.test(url);

export const API_URL =
  isProduction && isLocalUrl(configuredApiUrl)
    ? window.location.origin
    : configuredApiUrl ||
      (isProduction ? window.location.origin : "http://localhost:5000");

export const LANDING_URL =
  isProduction && isLocalUrl(configuredLandingUrl)
    ? window.location.origin
    : configuredLandingUrl ||
      (isProduction ? window.location.origin : "http://localhost:5173");
