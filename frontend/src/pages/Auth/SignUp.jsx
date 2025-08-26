import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/Authlayout";
import subscription from "../../assets/subscription.png";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { validateEmail } from "../../components/utils/helper";
import axiosInstance from "../../components/utils/axiosInstance";
import { API_PATHS } from "../../components/utils/apiPaths";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    console.log("handleSignUp triggered"); // <- add this
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    console.log("hello");
    try {
      console.log("hello try block");
      const response = await axiosInstance.post(API_PATHS.AUTH.SIGN_UP, {
        name,
        email,
        password,
      });

      const token = response.data.data;
      const user = response.data.user;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };
  return (
    <AuthLayout imageSrc={subscription}>
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSignUp}>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
        />
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
