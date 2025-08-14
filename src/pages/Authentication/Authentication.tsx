import MainLayout from "../../layouts/MainLayout.tsx";
import fashionImg from "../../assets/login.jpg";

const Authentication = () => {
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
                  placeholder="you@example.com"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Password</label>
                <input
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

            <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
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
