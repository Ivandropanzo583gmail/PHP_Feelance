
import Link from "next/dist/client/link";


export default function Ultra() {
    return (
      <>
        <div className="bg-[url('/main.png')] md:bg-contain bg-no-repeat bg-cover w-screen h-screen  bg-center  bg-zinc-800 ">
          
          <div className=" bg-gradient-to-r  text-white relative overflow-hidden">
          <div className="bg-gradient-to-r from-black via-[#280737] to-[#520A1C] relative overflow-hidden"></div>
            
            <nav className="flex justify-center items-center mt-10">    
              <div className="space-x-6">
                  <a href="#" className="hover:text-gray-400">Home</a>
                  <a href="#" className="hover:text-gray-400">Product</a>
                  <a href="#" className="hover:text-gray-400">About</a>
                  <a href="#" className="hover:text-gray-400 max-md:hidden">Log In</a>
                  
                  <Link href="/Max">
                    <button className=" px-4 py-2 border border-white rounded-full hover:bg-gray-700 md:hidden">
                      NEXT
                    </button>
                  </Link>
               
            
              </div>

        
              <div className="absolute top-0 right-1/2 w-[500px] h-[500px]  bg-red-600 opacity-30 blur-3xl rounded-full mt-20"></div>
              <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-purple-600 opacity-20 blur-2xl rounded-full"></div>
              <div className="pl-20 max-md:hidden ">
                  <button className="px-8 py-2 bg-white text-black rounded-full hover:bg-gray-200 ">
                    Sign Up
                  </button>
              </div>
              
            </nav>
            
            <div className="flex flex-col md:flex-row items-center justify-between p-10 relative z-10 md:ml-96">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold mb-4">
                  Virtual reality <br></br> glasses: <span className="text-purple-400">Ultra</span>
                </h1>
                <p className="mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
                </p>
                <button className="px-6 py-1 rounded-xl border border-white  hover:bg-gray-700">
                  Get started
                </button>
              </div>
              <div className=" mt-0 h-20 max-md:h-32 md:mr-96">
              
                <img src="./realidade_virtual.png" alt="VR Glasses" className="w-full max-w-sm animate-[bounces_4s_ease-in-out_infinite]" />
            
              </div>
            </div>

            <div className="pl-10 mt-20  mb-5 md:hidden max-md:hidden">
              <button className="px-8  py-2 bg-white text-black rounded-full hover:bg-gray-200 ">
                Sign Up
              </button>
            </div>

            
      
          <div className="mt-40  max-md:hidden md:ml-96">
            <Link href="/Max">
                <button className="absolute bottom-10 right-96 px-4 py-2 border border-white rounded-full hover:bg-gray-700 p">
                  NEXT
                </button>
            </Link>
          </div>
      
          
            <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-red-600 opacity-20 blur-2xl rounded-full"></div>
            </div>
          </div>  
      </>
    );
  }
  