const configuredApiUrl = import.meta.env.VITE_API_URL;
const configuredLandingUrl = import.meta.env.VITE_LANDING_URL;

export const API_URL = configuredApiUrl || "http://localhost:5000";

export const LANDING_URL = configuredLandingUrl || "http://localhost:5175";
