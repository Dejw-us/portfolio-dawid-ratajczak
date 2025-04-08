import "./App.css";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-32">
          <a className="text-8xl text-gray-300">Dawid Ratajczak</a>
          <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl my-4" />
          <a className="text-4xl text">portfolio</a>
        </div>
        <h3 className="text-6xl">Tech stack</h3>
        <div className="flex flex-row">
          <TechStack lang="Java" framework="Spring boot" />
          <TechStack lang="Typescript" framework="React" />
        </div>
      </div>
    </>
  );
}

export default App;
