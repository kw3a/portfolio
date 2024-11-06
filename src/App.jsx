import ProjectCard from "./components/ProjectCard";
import prueba from "./assets/prueba.png";
import foto from "./assets/foto.jpg";
import Profile from "./components/Profile";
import SkillGroup from "./components/SkillGroup";
import { backendSkills, frontendSkills } from "./data/skills";
import projects from "./data/projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-col w-2/3 gap-8">
        <Profile image={foto} degree="Ingeniero en Informática" />
        <div className="xl:flex md:flex-row">
          <div className="xl:w-1/2 ">
            <SkillGroup skills={backendSkills} name="Backend" />
          </div>
          <div className="xl:w-1/2 ">
            <SkillGroup skills={frontendSkills} name="Frontend" />
          </div>
        </div>
        <div className="grid gap-8 grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              image={project.image}
              url={project.url}
              tags={project.tags}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
