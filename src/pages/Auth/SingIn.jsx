function SingIn({ toggleAuth }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-[#1A2E46] rounded-2xl shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-center text-white mb-8">Welcome Back</h2>
                
                <form className="space-y-6"> 
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="w-full py-3 mt-4 rounded-lg bg-green-700 text-white font-bold hover:bg-green-800 transition-all duration-300">
                        Log In
                    </button>
                    
                    {/* Footer Link */}
                    <p className="text-center text-gray-400 text-sm">
                        Don't have an account? 
                        <button 
                        type="button"
                        onClick={toggleAuth}
                        className="ml-2 text-green-400 font-bold hover:underline">Sign Up</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SingIn;