import Image from "next/image";
import chair from '../../image/chair1.jpg';
export default function SignIn() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-gray-800">
      
      <div className="bg-blue-50 flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">Elegant</h1>
    <Image src={chair} alt="Chair" width={500} height={500} className="rounded-lg shadow-xl object-contain"/>

      </div>

    
      <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Sign In</h2>
          <p className="text-base md:text-lg">
            Don't have an account yet?{" "}
            <a href="#" className="text-green-500 hover:underline">Sign Up</a>
          </p>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your username or email address"
                className="w-full px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm md:text-md gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-base md:text-lg font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
