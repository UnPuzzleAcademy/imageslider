const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex md:w-3/5 border mx-auto border-black rounded-xl">
        <div className="w-2/5 border-e border-e-black"></div>
        <div className="w-3/5">
            <form className="flex flex-col gap-8 mx-auto p-8 pb-12">
                <h1 className="text-3xl font-bold">Login</h1>

                {/*Username Input field*/}
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Username</label>
                    <input type='text' className="border border-black px-4 py-2 rounded-l-full rounded-r-full"/>
                </div>

                {/*Password Input field*/}
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Password</label>
                    <input type='password' className="border border-black px-4 py-2 rounded-lg rounded-l-full rounded-r-full"/>
                </div>
                
                <button className="border border-black rounded-lg px-4 py-2 rounded-l-full rounded-r-full mt-2">Login</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login
