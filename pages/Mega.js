// pages/index.js
import Link from "next/dist/client/link";

export default function Ultra() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-[#280737] to-[#520A1C] text-white relative overflow-hidden">
        <nav className="flex justify-center items-center mt-10">
          

     
              
          <div className="space-x-6">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">Product</a>
              <a href="#" className="hover:text-gray-400">About</a>
              <a href="#" className="hover:text-gray-400">Log In</a>
          </div>
      
         
          <div className="pl-20 max-md:hidden">
            <button className="px-8 py-2 bg-white text-black rounded-full hover:bg-gray-200 ">
              Sign Up
            </button>
          </div>
         
        
     
       
        </nav>
  
        <div className="flex flex-col md:flex-row items-center justify-between p-10 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-4">
              Virtual reality<br></br>  glasses: <span className="text-purple-400">Mega</span>
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
            </p>
            <button className="px-6 py-3 border border-white rounded-full hover:bg-gray-700">
              Get started
            </button>
          </div>
          <div className="md:mt-0 h-20">
            <img src="./Mega.png" alt="VR Glasses" className="w-full max-w-sm" />
          </div>
        </div>

        <div className="pl-10 mt-20 md:hidden">
          <button className="px-8  py-2 bg-white text-black rounded-full hover:bg-gray-200 ">
            Sign Up
          </button>
        </div>
  
       <Link href="/Ultra">
        <button className="absolute bottom-10 right-10 px-4 py-2 border border-white rounded-full hover:bg-gray-700">
            NEXT
          </button>
       </Link>
  
       
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-red-600 opacity-20 blur-2xl rounded-full"></div>
      </div>
    );
  }
  