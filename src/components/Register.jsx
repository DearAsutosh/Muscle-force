import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-300 drop-shadow-lg tracking-wide">
          Sign Up 
        </h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="new-password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg tracking-wide text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-8 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-400 hover:underline font-semibold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
