import React from "react";
import ProgressBarItem from "./_components/progress-bar-item";
import {
  Css3Original,
  GoPlain,
  Html5Original,
  JavascriptOriginal,
  LaravelOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhpOriginal,
  ReactOriginal,
  SqldeveloperOriginal,
  SqldeveloperPlain,
  TypescriptOriginal,
} from "devicons-react";

const frontendSkills = [
  {
    progress: 95,
    color: "#E44D26",
    Icon: Html5Original,
    title: "HTML",
  },
  {
    progress: 80,
    color: "#2965F1",
    Icon: Css3Original,
    title: "CSS",
  },
  {
    progress: 70,
    color: "#F0DB4F",
    Icon: JavascriptOriginal,
    title: "JavaScript",
  },
  {
    progress: 70,
    color: "#61DAFB",
    Icon: ReactOriginal,
    title: "React",
  },
  {
    progress: 60,
    color: "#007ACC",
    Icon: TypescriptOriginal,
    title: "TypeScript",
  },
  {
    progress: 50,
    color: "#000000",
    Icon: NextjsOriginal,
    title: "Next.js",
  },
];

const backendSkills = [
  {
    progress: 80,
    color: "#339933",
    Icon: NodejsOriginal,
    title: "Node.js",
  },
  {
    progress: 50,
    color: "#8892BF",
    Icon: PhpOriginal,
    title: "PHP",
  },
  {
    progress: 50,
    color: "#FF2D20",
    Icon: LaravelOriginal,
    title: "Laravel",
  },
  {
    progress: 50,
    color: "#AFADAD",
    Icon: SqldeveloperPlain,
    title: "SQL",
  },
  {
    progress: 40,
    color: "#00ADD8",
    Icon: GoPlain,
    title: "Go",
  },
];

const SkillsPage = () => {
  return (
    <section className="xl:mt-12 mt-10 mx-auto px-10 min-h-[90vh]">
      <h2 className="text-2xl font-bold text-center mb-10">My Skills</h2>
      <div className="mb-20">
        <h3 className="text-xl font-semibold text-center mb-5">
          Frontend Development
        </h3>
        <div className="lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] mx-auto">
          {frontendSkills.map((skill) => (
            <ProgressBarItem key={skill.title} {...skill} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl font-semibold text-center mb-5">
          Backend Development
        </h3>
        <div className="lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] mx-auto">
          {backendSkills.map((skill) => (
            <ProgressBarItem key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
