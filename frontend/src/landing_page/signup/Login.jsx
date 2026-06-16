import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";

const API_URL = "http://localhost:5000";
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Enter a valid email address";
    }

    if (!formData.password) {
      return "Password is required";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationMessage = validateForm();
    if (validationMessage) {
      toast.error(validationMessage, { position: "bottom-left" });
      return;
    }

    try {
      setIsSubmitting(true);

      // Backend verifies credentials and sends an auth cookie.
      const { data } = await axios.post(`${API_URL}/login`, formData, {
        withCredentials: true,
      });

      if (!data.success) {
        toast.error(data.message || "Login failed", { position: "bottom-left" });
        return;
      }

      toast.success("Login successful. Opening dashboard...", { position: "bottom-right" });

      setTimeout(() => {
        window.location.href = DASHBOARD_URL;
      }, 900);
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Please try again.";
      toast.error(message, { position: "bottom-left" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-shell auth-shell-login">
        <div className="auth-copy">
          <p className="auth-kicker">Welcome back</p>
          <h1>Login to your dashboard</h1>
          <p>
            Continue to your trading dashboard to review orders, holdings, and
            positions.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p className="auth-subtitle">Use your registered email and password.</p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
            autoComplete="current-password"
          />

          <button className="auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="auth-switch">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
}

export default Login;
