import './sigin.css'

export default function User() {
  return (
    <main className="flex justify-center mt-20">
      <div className="box relative w-[340px] h-[440px] bg-rich rounded-xl text-ghost shadow-md">
        <form className="absolute inset-1 bg-neutral-800 rounded-lg p-4 z-10 flex flex-col">
          <h2 className="text-3xl font-bold text-center">Sign in</h2>
          <div className="input-box relative w-[300px] mt-9">
            <input type="text" id="username" required className="relative w-full p-3 pt-5 bg-transparent text-neutral-800 transition z-20 outline-none" />
            <span className="absolute text-xl left-0 p-3 pt-5 pl-0 pointer-events-none text-neutral-400 transition">Username</span>
            <i className='z-10'></i>
          </div>
          <div className="input-box relative w-[300px] mt-9">
            <input type="password" id="password" required className="relative w-full p-3 pt-5 bg-transparent text-neutral-800 transition z-20 outline-none"  />
            <span className="absolute text-xl left-0 p-3 pt-5 pl-0 pointer-events-none text-neutral-400 transition">Password</span>
            <i className='z-10'></i>
          </div>
          <div className="links">
            <a href="#">Forgot password?</a>
            <a href="#">Create new account</a>
          </div>
          <button className='mt-10 w-full bg-primaryPage text-rich text-sm font-bold py-3 px-5 rounded-lg'>Sign in</button>
        </form>
      </div>
    </main>
  );
}