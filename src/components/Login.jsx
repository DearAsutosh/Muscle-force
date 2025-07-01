import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-300 drop-shadow">Login</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-400 text-sm">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-600 text-blue-500 focus:ring-blue-400" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-blue-400 hover:underline text-sm">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <a href="/Register" className="text-blue-400 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
