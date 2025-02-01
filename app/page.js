
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="backdrop-blur-md items-center justify-items-center min-h-screen p-4 28m:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  gap-8 row-start-2 p-2 items-center sm:items-start">
        
        <div className="flex bg-white/10 items-start gap-4 justify-center rounded-xl bg-center h-[800px] w-full  p-2">
          <a href="#skills" className="block w-28 text-center hover:bg-gray-500 hover:text-white ease-in-out transition-all duration-1000  bg-white rounded p-2  m-4 ">skills</a>
          <a href="#skills" className="block w-28 text-center hover:bg-gray-500 hover:text-white ease-in-out transition-all duration-1000  bg-white rounded p-2  m-4 ">projects</a>
          <a href="#skills" className="block w-28 text-center hover:bg-gray-500 hover:text-white ease-in-out transition-all duration-1000  bg-white rounded p-2  m-4 ">about me</a>
          <a href="#skills" className="block w-28 text-center hover:bg-gray-500 hover:text-white ease-in-out transition-all duration-1000  bg-white rounded p-2  m-4 ">contact me</a>
       
        </div>
       
        <div id="skills">
          <Skills />
        </div>
      </main>

    </div>
  );
}
