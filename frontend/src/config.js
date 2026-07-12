const configuredApiUrl = import.meta.env.VITE_API_URL;
const configuredDashboardUrl = import.meta.env.VITE_DASHBOARD_URL;

export const API_URL = configuredApiUrl || "http://localhost:5000";

export const DASHBOARD_URL = configuredDashboardUrl || "http://localhost:5174/";
