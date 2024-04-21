import signup from '../assets/signupimage.jpg'

export const Signup = () => {
  return  <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
    <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Your Name</label>
        <input type="text" id="name" name="name" className="form-input mt-1 block w-full" placeholder="Your Name" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Your Email</label>
        <input type="email" id="email" name="email" className="form-input mt-1 block w-full" placeholder="Your Email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input type="password" id="password" name="password" className="form-input mt-1 block w-full" placeholder="Password" />
      </div>
      <div className="mb-4">
        <label htmlFor="password_confirmation" className="block text-gray-700">Repeat your password</label>
        <input type="password" id="password_confirmation" name="password_confirmation" className="form-input mt-1 block w-full" placeholder="Repeat Password" />
      </div>
      <div className="mb-6">
        <input type="checkbox" id="terms" name="terms" className="form-checkbox mr-2" />
        <label htmlFor="terms" className="text-gray-700">I agree to all statements in <a href="#" className="text-blue-500">Terms of service</a></label>
      </div>
      <button type="submit" className="bg-neutral-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Register</button>
    </form>
    <p className="mt-4 text-sm">Already a member? <a href="#" className="text-blue-500">Log in here</a></p>
  </div>
  <div className="ml-8">
    <img src={signup} alt="Image" className="w-64 h-auto" />
  </div>
</div>;
};
