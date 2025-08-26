import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/Authlayout";

import subscription from "../../assets/subscription.png";
import { useContext, useState } from "react";
import axiosInstance from "../../components/utils/axiosInstance";
import { API_PATHS } from "../../components/utils/apiPaths";
import { validateEmail } from "../../components/utils/helper";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Plaese enter the password");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.SIGN_IN, {
        email,
        password,
      });
      const { token, user } = response.data.data;
      if (token) {
        localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));
        if (user) updateUser(user);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return (
    <AuthLayout imageSrc={subscription}>
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
          label="email Address"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          label="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
        />
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
