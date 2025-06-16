import Image from "next/image";
import chair from '../../image/chair1.jpg';

export default function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="bg-blue-50 flex flex-col justify-center items-center w-full md:w-1/2 p-12">
          <Image
            src={chair}
            alt="Chair"
            width={500}
            height={500}
            className="rounded-lg shadow-xl object-contain"
          />
        </div>

    
        <div className="flex justify-center items-center w-full md:w-1/2 p-10 md:p-16">
          <div className="w-full max-w-lg space-y-10">
            <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">Sign In</h2>
            <p className="text-xl text-gray-300 md:text-2xl">
              Don’t have an account yet?{" "}
              <a href="/sign-up" className="text-green-500 text-xl md:text-2xl hover:underline">Sign Up</a>
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your username or email address"
                className="w-full px-6 py-4 text-xl md:2xl text-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-6 py-4 text-xl md:2xl border border-gray-300 rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-md gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600 w-5 h-5" />
                  <span className="">Remember me</span>
                </label>
                <a href="#" className="text-gray-800 hover:underline">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
