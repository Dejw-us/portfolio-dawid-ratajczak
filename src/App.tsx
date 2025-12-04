import "./App.css";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen items-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-emerald-950 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative z-10 mb-24 text-center max-w-5xl">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 opacity-30 blur-3xl animate-pulse-slow" />
            <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight bg-gradient-to-br from-cyan-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent mb-8 animate-gradient drop-shadow-2xl">
              Dawid Ratajczak
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping animation-delay-150" />
            <div className="h-2 w-2 rounded-full bg-teal-400 animate-ping animation-delay-300" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>

          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent tracking-wide">
            Full Stack Developer
          </p>
          <p className="mt-4 text-lg sm:text-xl text-cyan-300/60 font-light">Building the future, one line at a time</p>
        </div>

        <div className="relative z-10 mb-16">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-20 blur-2xl" />
            <h2 className="relative text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
              Tech Arsenal
            </h2>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1600px] w-full px-4">
          <TechStack
            lang="Rust"
            framework="Actix Web"
            experience="Creator of Actixboot framework"
            project={{
              name: "Actixboot",
              url: "https://github.com/actixboot/actixboot"
            }}
            highlight={true}
          />

          <TechStack
            lang="Java"
            framework="Spring Boot"
          />

          <TechStack
            lang="TypeScript"
            framework="Next.js"
          />

          <TechStack
            lang="PHP"
            framework="Laravel"
            experience="Professional experience at Motobanda"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
    </>
  );
}

export default App;
