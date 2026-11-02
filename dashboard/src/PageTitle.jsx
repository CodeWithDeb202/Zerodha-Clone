import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard | Zerodha",
  "/orders": "Orders | Zerodha",
  "/holdings": "Holdings | Zerodha",
  "/positions": "Positions | Zerodha",
  "/funds": "Funds | Zerodha",
  "/app": "Profile | Zerodha",
};

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[location.pathname] || "Dashboard | Zerodha";
  }, [location.pathname]);

  return null;
}

export default PageTitle;
