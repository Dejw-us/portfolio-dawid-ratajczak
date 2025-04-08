export type TechStackProps = {
  lang: string;
  framework: string;
};

export default function TechStack({ lang, framework }: TechStackProps) {
  return (
    <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 m-20">
      <div className="flex flex-col bg-black p-20 rounded-xl">
        <h4 className="text-4xl">{lang}</h4>
        <a className="text-4xl">+</a>
        <h4 className="text-4xl">{framework}</h4>
      </div>
    </div>
  );
}
