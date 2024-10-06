import React from "react";
import { FaTimesCircle, FaClock, FaCheckCircle, FaFireAlt } from "react-icons/fa"; // React Icons

// Array of questions
const questions = [
  "I found it hard to wind down",
  "I was aware of dryness of my mouth",
  "I couldn't seem to experience any positive feeling at all",
  "I experienced breathing difficulty",
  "I found it difficult to work up the initiative to do things",
  "I tended to over-react to situations",
  "I experienced trembling (e.g., in the hands)",
  "I felt that I was using a lot of nervous energy",
  "I was worried about situations in which I might panic",
  "I felt that I had nothing to look forward to",
  "I found myself getting agitated",
  "I found it difficult to relax",
  "I felt down-hearted and blue",
  "I was intolerant of anything that kept me from getting on with what I was doing",
  "I felt I was close to panic",
  "I was unable to become enthusiastic about anything",
  "I felt I wasn’t worth much as a person",
  "I felt that I was rather touchy",
  "I was aware of the action of my heart in the absence of physical exertion",
  "I felt scared without any good reason",
  "I felt that life was meaningless"
];

const Questionnaire = () => {
  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center py-16 px-4">
      <div className="bg-gradient-to-r from-pink-100 via-orange-100 to-orange-200 shadow-lg p-10 rounded-lg w-full max-w-4xl">
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
        <form className="space-y-10">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-lg p-6 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:bg-orange-100 hover:shadow-lg"
            >
              <label className="block text-2xl text-gray-800 font-semibold mb-4">
                {index + 1}. {question}
              </label>
              <div className="flex justify-between">
                <label className="flex items-center space-x-3 group">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="0"
                    className="form-radio text-pink-400 focus:ring-2 focus:ring-orange-200 transform hover:scale-125 transition duration-200 ease-in-out h-6 w-6" // Increased size of radio button
                  />
                  <span className="text-xl text-gray-600 group-hover:text-gray-800 py-2">Never (0)</span>
                </label>
                <label className="flex items-center space-x-3 group">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="1"
                    className="form-radio text-pink-400 focus:ring-2 focus:ring-orange-200 transform hover:scale-125 transition duration-200 ease-in-out h-6 w-6" // Increased size of radio button
                  />
                  <span className="text-xl text-gray-600 group-hover:text-gray-800 py-2">Sometimes (1)</span>
                </label>
                <label className="flex items-center space-x-3 group">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="2"
                    className="form-radio text-pink-400 focus:ring-2 focus:ring-orange-200 transform hover:scale-125 transition duration-200 ease-in-out h-6 w-6" // Increased size of radio button
                  />
                  <span className="text-xl text-gray-600 group-hover:text-gray-800 py-2">Often (2)</span>
                </label>
                <label className="flex items-center space-x-3 group">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="3"
                    className="form-radio text-pink-400 focus:ring-2 focus:ring-orange-200 transform hover:scale-125 transition duration-200 ease-in-out h-6 w-6" // Increased size of radio button
                  />
                  <span className="text-xl text-gray-600 group-hover:text-gray-800 py-2">Almost Always (3)</span>
                </label>
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-400 to-orange-500 hover:from-pink-500 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 text-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
