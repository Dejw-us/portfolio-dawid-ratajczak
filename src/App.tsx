import "./App.css";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center md:h-screen items-center px-4">
        <div className="mb-32 text-center">
          <a className="text-4xl sm:text-6xl md:text-8xl text-gray-300">
            Dawid Ratajczak
          </a>
          <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl my-4" />
          <a className="text-xl sm:text-2xl md:text-4xl">portfolio</a>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-6xl mb-10">Tech stack</h3>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-32">
          <TechStack lang="Java" framework="Spring boot" />
          <TechStack lang="Typescript" framework="React" />
        </div>
      </div>
    </>
  );
}

export default App;
