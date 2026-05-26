function SingUP({ toggleAuth }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-[#1A2E46] rounded-2xl shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-center text-white mb-8">Create an Account</h2>
                
                <form className="space-y-6"> 
                    {/* Input Group: Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"/>
                    </div>

                    {/* Input Group: Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"/>
                    </div>

                    {/* Input Group: Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"/>
                    </div>

                    {/* Input Group: Confirm Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" placeholder="Re-enter password" className="w-full p-2.5 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"/>
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 mt-4 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-300">
                        Sign Up
                    </button>
                    
                    {/* Footer Text */}
                    <p className="text-center text-gray-400 text-sm">
                        Already have an account? 
                        <button 
                        type="button"
                        onClick={toggleAuth}
                        className="ml-2 text-green-400 font-bold hover:underline">Sign In</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SingUP;