import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";
import { API_URL, DASHBOARD_URL } from "../../config";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
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
    if (formData.username.trim().length < 3) {
      return "Username must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Enter a valid email address";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
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

      // Backend stores the user in MongoDB and returns a login cookie.
      const { data } = await axios.post(`${API_URL}/signup`, formData, {
        withCredentials: true,
      });

      if (!data.success) {
        toast.error(data.message || "Signup failed", { position: "bottom-left" });
        return;
      }

      toast.success("Signup successful. Opening dashboard...", { position: "bottom-right" });

      setTimeout(() => {
        window.location.href = DASHBOARD_URL;
      }, 900);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Signup failed. Please check backend and MongoDB connection.";
      toast.error(message, { position: "bottom-left" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-copy">
          <p className="auth-kicker">Zerodha Clone</p>
          <h1>Open your trading account</h1>
          <p>
            Create your account to access the dashboard, track holdings, place
            orders, and manage positions.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <p className="auth-subtitle">Enter your details to continue.</p>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            autoComplete="username"
          />

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
            placeholder="Minimum 6 characters"
            autoComplete="new-password"
          />

          <button className="auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
}

export default Signup;
