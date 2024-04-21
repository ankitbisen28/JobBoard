import React from 'react'

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <div className="flex justify-center items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex justify-center items-center">
            <span className="text-white text-sm">Login</span>
          </div>
          <h2 className="text-gray-800 ml-4 text-2xl font-semibold">Job Board</h2>
        </div>
        <p className="text-gray-700 mb-6">Welcome back! Log in to your account</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" className="form-input w-full" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" className="form-input w-full" placeholder="Password" />
          </div>
          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">Log in</button>
        </form>
        <div className="mt-4">
          <a className="text-purple-500 underline">Signup</a>
        </div>
      </div>
    </div>
  )
}
