import React, { useState, useEffect } from "react";
import { FaSadTear, FaHeartbeat, FaExclamationTriangle } from "react-icons/fa"; // Updated icons
import { FaTimesCircle, FaClock, FaCheckCircle, FaFireAlt } from "react-icons/fa"; // React Icons

// Array of questions
const questions = [
    "I found it hard to wind down",           // Stress
    "I was aware of dryness of my mouth",     // Anxiety
    "I couldn't seem to experience any positive feeling at all", // Depression
    "I experienced breathing difficulty",     // Anxiety
    "I found it difficult to work up the initiative to do things", // Depression
    "I tended to over-react to situations",   // Stress
    "I experienced trembling (e.g., in the hands)", // Anxiety
    "I felt that I was using a lot of nervous energy", // Stress
    "I was worried about situations in which I might panic", // Anxiety
    "I felt that I had nothing to look forward to", // Depression
    "I found myself getting agitated",        // Stress
    "I found it difficult to relax",          // Stress
    "I felt down-hearted and blue",           // Depression
    "I was intolerant of anything that kept me from getting on with what I was doing", // Stress
    "I felt I was close to panic",            // Anxiety
    "I was unable to become enthusiastic about anything", // Depression
    "I felt I wasn’t worth much as a person", // Depression
    "I felt that I was rather touchy",        // Stress
    "I was aware of the action of my heart in the absence of physical exertion", // Anxiety
    "I felt scared without any good reason",  // Anxiety
    "I felt that life was meaningless"        // Depression
];

// Indices of questions corresponding to each subscale
const depressionIndices = [2, 4, 9, 12, 15, 16, 20];
const anxietyIndices = [1, 3, 6, 8, 14, 18, 19];
const stressIndices = [0, 5, 7, 10, 11, 13, 17];

const Questionnaire = () => {
    const [result, setResult] = useState(null);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutes in seconds

    // Timer logic
    useEffect(() => {
        if (timeLeft <= 0 || submitted) { // Stop the timer if time runs out or form is submitted
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, submitted]);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    // Update answers array
    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = parseInt(value, 10);
        setAnswers(updatedAnswers);
    };

    // Calculate DASS-21 score
    const calculateScore = (e) => {
        e.preventDefault();

        // Calculate subscale totals
        const depressionScore = depressionIndices.reduce((total, i) => total + (answers[i] || 0), 0);
        const anxietyScore = anxietyIndices.reduce((total, i) => total + (answers[i] || 0), 0);
        const stressScore = stressIndices.reduce((total, i) => total + (answers[i] || 0), 0);

        // Categorize based on score
        const getCategory = (score, type) => {
            if (type === "depression") {
                if (score <= 4) return "Normal";
                if (score <= 6) return "Mild";
                if (score <= 10) return "Moderate";
                if (score <= 13) return "Severe";
                return "Extremely Severe";
            } else if (type === "anxiety") {
                if (score <= 3) return "Normal";
                if (score <= 5) return "Mild";
                if (score <= 7) return "Moderate";
                if (score <= 9) return "Severe";
                return "Extremely Severe";
            } else if (type === "stress") {
                if (score <= 7) return "Normal";
                if (score <= 9) return "Mild";
                if (score <= 12) return "Moderate";
                if (score <= 16) return "Severe";
                return "Extremely Severe";
            }
        };

        // Set result and mark as submitted
        setResult({
            depressionScore,
            depressionCategory: getCategory(depressionScore, "depression"),
            anxietyScore,
            anxietyCategory: getCategory(anxietyScore, "anxiety"),
            stressScore,
            stressCategory: getCategory(stressScore, "stress"),
        });
        setSubmitted(true); // Set submitted to true
    };

    return (
        <div className="min-h-screen bg-orange-300 flex items-center justify-center py-16 px-4">
            {/* Fixed Title */}
            <div className="fixed top-0 left-0 right-0 text-center bg-black bg-opacity-50 p-2 z-50">
                <p className="text-4xl font-extrabold text-white transition-transform transform hover:scale-110 font-sans">
                    Mind Matrix
                </p>
            </div>

            {/* Timer */}
            {!submitted && (
                <div className="fixed top-14 right-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow-lg border border-yellow-300 p-4 flex items-center space-x-2 transform transition-all duration-300 ease-in-out hover:shadow-2xl z-50">
                    <FaClock className="h-8 w-8 text-yellow-300" />
                    <div className="flex flex-row items-center">
                        <span className="text-xl font-bold">Time Left:</span>
                        <span className="text-5xl font-extrabold ml-2">{formatTime(timeLeft)}</span>
                    </div>
                </div>
            )}

            <div className="bg-gradient-to-r from-pink-100 via-orange-100 to-orange-200 shadow-lg p-10 rounded-lg w-full max-w-4xl">
                {!submitted && ( // Only show form if not submitted
                    <>
                        {/* Instructions Section */}
                        <div className="mb-10 bg-pink-100 p-8 rounded-lg shadow-md border-l-8 border-orange-300">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">DASS-21 Questionnaire</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            Please carefully read each statement and rate how much it applied to you over the past week. Your responses will help assess your current mental state.
          </p>

          <div className="text-left">
            <strong className="text-gray-800 text-2xl">Rating scale:</strong>
            <ul className="text-gray-600 mt-6 space-y-5 text-lg">
              {/* Never */}
              <li className="flex items-center space-x-4">
                <FaTimesCircle className="w-8 h-8 text-red-500" />
                <span className="text-xl text-gray-800">
                  <strong>0:</strong> Did not apply to me at all - <strong>NEVER</strong>
                </span>
              </li>
              {/* Sometimes */}
              <li className="flex items-center space-x-4">
                <FaClock className="w-8 h-8 text-yellow-500" />
                <span className="text-xl text-gray-800">
                  <strong>1:</strong> Applied to me to some degree - <strong>SOMETIMES</strong>
                </span>
              </li>
              {/* Often */}
              <li className="flex items-center space-x-4">
                <FaCheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-xl text-gray-800">
                  <strong>2:</strong> Applied to me to a considerable degree - <strong>OFTEN</strong>
                </span>
              </li>
              {/* Almost Always */}
              <li className="flex items-center space-x-4">
                <FaFireAlt className="w-8 h-8 text-orange-500" />
                <span className="text-xl text-gray-800">
                  <strong>3:</strong> Applied to me very much - <strong>ALMOST ALWAYS</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>


                        {/* Form Section */}
                        <form onSubmit={calculateScore} className="space-y-10">
                            {questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="bg-orange-50 border border-orange-200 rounded-lg p-6 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:bg-orange-100 hover:shadow-lg"
                                >
                                    <label className="block text-2xl text-gray-800 font-semibold mb-4">
                                        {index + 1}. {question}
                                    </label>
                                    <div className="flex justify-between">
                                        {[0, 1, 2, 3].map((value) => (
                                            <label key={value} className="flex items-center space-x-3 group">
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={value}
                                                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                                                    className="form-radio text-pink-400 focus:ring-2 focus:ring-orange-200 group-hover:scale-110"
                                                    required
                                                />
                                                <span className="text-lg text-gray-700 group-hover:font-bold">
                                                    {value === 0 ? 'Never' : value === 1 ? 'Sometimes' : value === 2 ? 'Often' : 'Always'}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full py-3 mt-6 bg-orange-500 text-white text-xl font-bold rounded-lg hover:bg-orange-400 transition duration-200 shadow-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}

                {/* Result Section */}
                {submitted && result && (
    <div className="mt-10 bg-pink-50 p-8 rounded-lg shadow-md border border-orange-300 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your DASS-21 Results</h2>
        <p className="text-lg font-semibold text-gray-700 mb-6">
            Based on your answers, here are your categorized scores:
        </p>
        <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-orange-100">
                <tr>
                    <th className="px-4 py-2 text-left text-xl font-bold text-gray-800 border-b-2 border-orange-300">Category</th>
                    <th className="px-4 py-2 text-xl font-bold text-gray-800 border-b-2 border-orange-300">Score</th>
                    <th className="px-4 py-2 text-xl font-bold text-gray-800 border-b-2 border-orange-300">Category Status</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
                <tr>
                    <td className="flex items-center py-4 px-4">
                        <FaSadTear className="text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-900 text-xl ">Depression:</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="font-bold text-xl">{result.depressionScore}</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="text-gray-800 text-xl">{result.depressionCategory}</span>
                    </td>
                </tr>
                <tr>
                    <td className="flex items-center py-4 px-4">
                        <FaHeartbeat className="text-green-500 mr-2" />
                        <span className="font-semibold text-gray-900 text-xl">Anxiety:</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="font-bold text-xl">{result.anxietyScore}</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="text-gray-800 text-xl">{result.anxietyCategory}</span>
                    </td>
                </tr>
                <tr>
                    <td className="flex items-center py-4 px-4">
                        <FaExclamationTriangle className="text-red-500 mr-2" />
                        <span className="font-semibold text-gray-900 text-xl">Stress:</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="font-bold text-xl">{result.stressScore}</span>
                    </td>
                    <td className="py-4 px-4">
                        <span className="text-gray-800 text-xl">{result.stressCategory}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)}

            </div>
        </div>
    );
};

export default Questionnaire;
