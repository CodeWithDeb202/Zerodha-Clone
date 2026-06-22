const isProduction = import.meta.env.PROD;
const configuredApiUrl = import.meta.env.VITE_API_URL;
const configuredDashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
const isLocalUrl = (url = "") => /localhost|127\.0\.0\.1/i.test(url);

export const API_URL =
  isProduction && isLocalUrl(configuredApiUrl)
    ? window.location.origin
    : configuredApiUrl ||
      (isProduction ? window.location.origin : "http://localhost:5000");

export const DASHBOARD_URL =
  isProduction && isLocalUrl(configuredDashboardUrl)
    ? `${window.location.origin}/dashboard`
    : configuredDashboardUrl ||
      (isProduction
        ? `${window.location.origin}/dashboard`
        : "http://localhost:5174");
