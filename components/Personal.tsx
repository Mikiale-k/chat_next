import React from 'react'

const Personal = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Free Plan */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-80">
        <h3 className="text-xl font-semibold mb-4">Free</h3>
        <p className="text-4xl font-bold mb-6">
          $0 <span className="text-lg font-normal">USD/month</span>
        </p>
        <ul className="text-gray-400 space-y-3 mb-6">
          <li>✅ Access to GPT-4 mini</li>
          <li>✅ Standard voice chats</li>
          <li>✅ Limited access to GPT-4o</li>
          <li>✅ Limited advanced features</li>
          <li>✅ Use custom GPTs</li>
        </ul>
        <button
          className="bg-gray-600 text-white py-2 px-4 rounded-full cursor-not-allowed"
          disabled
        >
          Your Current Plan
        </button>
      </div>

      {/* Plus Plan */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-80 border-2 border-green-500">
        <h3 className="text-xl font-semibold mb-2">Plus</h3>
        <span className="text-sm bg-green-500 text-gray-900 px-2 py-1 rounded-full uppercase font-bold mb-4 inline-block">
          Popular
        </span>
        <p className="text-4xl font-bold mb-6">
          $20 <span className="text-lg font-normal">USD/month</span>
        </p>
        <ul className="text-gray-400 space-y-3 mb-6">
          <li>✅ Everything in Free</li>
          <li>✅ Extended file uploads</li>
          <li>✅ Advanced voice/video inputs</li>
          <li>✅ Limited access to o1 & o1-mini</li>
          <li>✅ Test new features</li>
        </ul>
        <button className="bg-green-500 text-gray-900 py-2 px-4 rounded-full">
          Get Plus
        </button>
      </div>

      {/* Pro Plan */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-80">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-4xl font-bold mb-6">
          $200 <span className="text-lg font-normal">USD/month</span>
        </p>
        <ul className="text-gray-400 space-y-3 mb-6">
          <li>✅ Everything in Plus</li>
          <li>✅ Unlimited o1 & o1-mini</li>
          <li>✅ Higher video/screenshare limits</li>
          <li>✅ Access to o1 pro mode</li>
          <li>✅ Extended video generation</li>
        </ul>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          Get Pro
        </button>
      </div>
    </div>
  </div>
  )
}

export default Personal