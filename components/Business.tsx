import React from 'react'

const Business = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center w-80 p-6 bg-gray-800 rounded-lg text-white shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Team</h2>

        {/* Price */}
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold">$25</span>
          <span className="text-sm text-gray-400 ml-1">USD/month</span>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-gray-400 mb-6">
          Supercharge your team's work with a secure, collaborative workspace
        </p>

        {/* Get Team Button */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-full">
          Get Team
        </button>

        {/* Features */}
        <ul className="mt-6 text-sm text-gray-300 space-y-2">
          <li>✔ Higher message limits than Plus on GPT-4, GPT-4o</li>
          <li>✔ Tools like DALL-E, web browsing, and data analysis</li>
          <li>✔ Limited access to o1 and o1-mini</li>
          <li>✔ Access to advanced voice and video inputs</li>
          <li>✔ Create and share GPTs with your workspace</li>
          <li>✔ Admin console for workspace management</li>
          <li>✔ Team data excluded from training by default</li>
        </ul>

        {/* Footer */}
        <p className="text-gray-400 text-xs mt-6">
          For 2+ users, billed annually
        </p>
      </div>
    </div>
  )
}

export default Business