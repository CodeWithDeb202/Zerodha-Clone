import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Zerodha Clone",
  "/signup": "Sign Up | Zerodha Clone",
  "/login": "Login | Zerodha Clone",
  "/about": "About Us | Zerodha Clone",
  "/product": "Products | Zerodha Clone",
  "/pricing": "Pricing | Zerodha Clone",
  "/support": "Support | Zerodha Clone",
};

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[location.pathname] || "Page Not Found | Zerodha Clone";
  }, [location.pathname]);

  return null;
}

export default PageTitle;
