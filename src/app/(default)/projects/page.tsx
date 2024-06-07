import { ImageType } from "@/lib/types";
import ProjectCard from "./_components/project-card";
import NextJsImage from "@/images/nextjs.png";
import NodeJsImage from "@/images/nodejs.png";
import WebDesignImage from "@/images/webdesign.webp";
import LaravelImage from "@/images/laravel.jpg";
import GoImage from "@/images/golang.png";
import HTMLCSSJSImage from "@/images/html-css-js.jpg";

const projectsData: Project[] = [
  {
    title: "Forum Application",
    content:
      "Forum Application Written in Next.js, Next.js Server Action, TypeScript and Prisma ORM",
    link: "https://github.com/PeterHyperAung/Next.js-Forum",
    image: NextJsImage,
  },
  {
    title: "Natours",
    content:
      "Natour travelling website app written in node.js, Express and Mongodb.",
    link: "https://github.com/PeterHyperAung/natours",
    image: NodeJsImage,
  },
  {
    title: "Flappy Basketball",
    content:
      "Just a fun game which imitates the Flappy Bird game and written in vanilla JavaScript.",
    link: "https://github.com/PeterHyperAung/flappy-basketball",
    image: HTMLCSSJSImage,
  },
  {
    title: "Blog Application",
    content: "Simple Blog Application Written in Node.js, Express and Mongodb",
    link: "https://github.com/PeterHyperAung/simple-blog-app",
    image: NodeJsImage,
  },
  {
    title: "Go Email Verifier Tool",
    content:
      "An email verifier tool written in go lang which also checks MX and TXT records",
    link: "https://github.com/PeterHyperAung/emailverifier",
    image: GoImage,
  },
  {
    title: "Web Design Project",
    content:
      "Web design project from MMSIT SWD course built with HTML, CSS, Bootstrap, Jquery.",
    link: "https://petermarket.netlify.app/",
    image: WebDesignImage,
  },
  {
    title: "Laragigs",
    content: "Laravel CRUD application",
    link: "https://github.com/PeterHyperAung/laragigs",
    image: LaravelImage,
  },
];

export type Project = {
  title: string;
  image: ImageType | string;
  content: string;
  link: string;
};

const ProjectsPage = () => {
  return (
    <div className="xl:max-w-[1200px] md:max-w-[700px] sm:max-w-[400px] max-w-[320px] xl:mt-12 mt-10 mx-auto mb-10">
      <div>
        <h2 className="text-2xl font-bold text-center mb-12">My Projects</h2>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
