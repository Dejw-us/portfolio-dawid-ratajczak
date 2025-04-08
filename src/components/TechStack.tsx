export type TechStackProps = {
  lang: string;
  framework: string;
};

export default function TechStack({ lang, framework }: TechStackProps) {
  return (
    <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 w-full sm:w-auto">
      <div className="flex flex-col bg-black p-8 sm:p-12 md:p-16 rounded-xl">
        <h4 className="text-xl sm:text-2xl md:text-4xl">{lang}</h4>
        <a className="text-xl sm:text-2xl md:text-4xl">+</a>
        <h4 className="text-xl sm:text-2xl md:text-4xl">{framework}</h4>
      </div>
    </div>
  );
}
