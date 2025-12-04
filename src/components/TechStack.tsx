export type TechStackProps = {
  lang: string;
  framework: string;
  experience?: string;
  project?: {
    name: string;
    url: string;
  };
  highlight?: boolean;
};

export default function TechStack({ lang, framework, experience, project, highlight }: TechStackProps) {
  return (
    <div className="group relative w-full h-full">
      <div className={`absolute -inset-0.5 rounded-2xl ${highlight ? 'bg-gradient-to-br from-cyan-400 via-emerald-400 to-teal-400 opacity-75' : 'bg-gradient-to-br from-cyan-600 to-emerald-600 opacity-50'} blur-sm group-hover:opacity-100 transition-all duration-500 group-hover:blur-md animate-gradient`} />

      <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-400/20 transition-all duration-500" />

        <div className="relative flex flex-col p-8 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400/50'}`} />
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <h4 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
            {lang}
          </h4>

          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
            <span className="text-2xl sm:text-3xl text-emerald-400/70 font-thin">×</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
          </div>

          <h4 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-emerald-300 to-emerald-500 bg-clip-text text-transparent mb-auto tracking-tight group-hover:scale-105 transition-transform duration-300">
            {framework}
          </h4>

          {experience && (
            <div className="mt-6 pt-4 border-t border-cyan-500/20">
              <p className="text-sm sm:text-base text-cyan-100/70 leading-relaxed">{experience}</p>
            </div>
          )}

          {project && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-400 hover:text-cyan-300 transition-all duration-300 group/link"
            >
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              <span className="relative">
                {project.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover/link:w-full transition-all duration-300" />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
