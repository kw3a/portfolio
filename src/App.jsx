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
    <div className="text-white bg-black">
      <div className="flex justify-center ">
        <div className="flex flex-col w-2/3 gap-8">
          <Profile image={foto} degree="Ingeniero en Informática" />
          <hr />
          <div className="xl:flex md:flex-row">
            <div className="xl:w-1/2 ">
              <SkillGroup skills={backendSkills} name="Backend" />
            </div>
            <div className="xl:w-1/2 ">
              <SkillGroup skills={frontendSkills} name="Frontend" />
            </div>
          </div>
          <hr />
          <span>Proyectos</span>
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
          <span>Educación</span>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Ingeniería en Informática</span>
            <span>Universidad Mayor de San Simón</span>
            <span>2019 - 2024 </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
