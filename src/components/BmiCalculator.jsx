import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    if (isNaN(weightKg) || isNaN(heightCm) || heightCm === 0) return;

    const heightM = heightCm / 100;
    const bmiValue = weightKg / (heightM * heightM);
    setBMI(bmiValue.toFixed(2));
  };

  const getBMICategory = () => {
    if (bmi === null) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-300 drop-shadow">BMI Calculator</h2>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="weight" className="text-gray-200 font-medium">Weight (kg):</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter weight"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="height" className="text-gray-200 font-medium">Height (cm):</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter height"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow"
          >
            Calculate
          </button>
          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center text-blue-200 mt-4"
            >
              Your BMI: {bmi} <span className="text-base font-normal">({getBMICategory()})</span>
            </motion.div>
          )}
          <div className="text-sm text-gray-400 text-center mt-4 bg-gray-800 rounded p-3 border border-gray-700">
            <span className="font-semibold text-blue-300">BMI Categories:</span>
            <br />
            <span className="text-gray-300">Underweight</span> = {"<"}18.5
            <br />
            <span className="text-gray-300">Normal weight</span> = 18.5–24.9
            <br />
            <span className="text-gray-300">Overweight</span> = 25–29.9
            <br />
            <span className="text-gray-300">Obesity</span> = BMI of 30 or greater
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
