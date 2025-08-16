import MainLayout from "../../layouts/MainLayout.tsx";
import fashionImg from "../../assets/login.jpg";
import { signIn } from "../../apis/AuthAPI.ts";
import { useDispatch } from "react-redux";
import { useState } from "react";
import type { AppDispatch } from "../../stores/store.ts";
import { useNavigate } from "react-router-dom";
import { setRole, setToken } from "../../reducers/AuthSlice.ts";
import { toggleBanner } from "../../reducers/UiSlice.ts";

const Authentication = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logIn = async () => {
    const token = await signIn(email, password);
    dispatch(setToken(token.data.token));
    dispatch(setRole(token.data.role));
    dispatch(toggleBanner());
    token.data.role === "USER" ? navigate("/") : navigate("/admin");
  };

  return (
    <MainLayout>
      <div className="w-full h-screen flex flex-row">
        <div className="flex-1 bg-black text-white flex flex-col justify-center items-center p-6">
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Welcome </h1>
              <p className="text-gray-300">
                Enter your email and password to sign in
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-gray-300 hover:text-white">
                Forgot password?
              </a>
            </div>

            <button
              className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
              onClick={logIn}
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-300">
              Don’t have an account?{" "}
              <a href="#" className="text-white font-medium hover:underline">
                Create one
              </a>
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white text-black">
          <img
            src={fashionImg}
            alt="Fashion model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Authentication;
