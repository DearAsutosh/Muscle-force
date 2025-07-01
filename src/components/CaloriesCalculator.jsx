// CaloriesCalculator.jsx

import React, { useState } from "react";

const CaloriesCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("weight_loss");
  const [caloriesResult, setCaloriesResult] = useState(null);

  const calculateCalories = () => {
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    if (activityLevel === "sedentary") {
      calories = bmr * 1.2;
    } else if (activityLevel === "lightly_active") {
      calories = bmr * 1.375;
    } else if (activityLevel === "moderately_active") {
      calories = bmr * 1.55;
    } else if (activityLevel === "very_active") {
      calories = bmr * 1.725;
    } else {
      calories = bmr * 1.9;
    }

    if (goal === "weight_loss") {
      calories -= 500; // Deficit of 500 calories per day for weight loss
    } else {
      calories += 500; // Surplus of 500 calories per day for weight gain
    }

    // Round to two decimal places
    calories = Math.round(calories * 100) / 100;

    return calories;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calories = calculateCalories();
    setCaloriesResult(calories);
  };

  return (
    <div className="container mx-auto  px-4 text-white min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-300 drop-shadow">Calories Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Weight (kg):</label>
              <input
                required
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter weight"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Height (cm):</label>
              <input
                required
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter height"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Age:</label>
              <input
                required
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter age"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Activity Level:</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="sedentary">Sedentary</option>
                <option value="lightly_active">Lightly Active</option>
                <option value="moderately_active">Moderately Active</option>
                <option value="very_active">Very Active</option>
                <option value="extra_active">Extra Active</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-200">Goal:</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="weight_loss">Weight Loss</option>
                <option value="weight_gain">Weight Gain</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-6 w-full font-semibold shadow"
          >
            Calculate
          </button>
        </form>
        {caloriesResult && (
          <div className="mt-10 bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
            <h2 className="text-xl font-semibold text-blue-300">Calories Intake:</h2>
            <p className="mt-2 text-lg text-gray-200">Daily Calories Needed: <span className="font-bold text-blue-400">{caloriesResult}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaloriesCalculator;
