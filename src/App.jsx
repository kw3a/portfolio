import ProjectCard from "./components/ProjectCard";
import foto from "./assets/me.jpeg";
import Profile from "./components/Profile";
import TechCarousel from "./components/TechCarousel";
import { skills } from "./data/skills";
import projects from "./data/projects";
import Footer from "./components/Footer";
import experiences from "./data/experiences";
import ExperienceCard from "./components/ExperienceCard";
import { useI18n } from "./i18n/i18n.jsx";
import education from "./data/education";
import EducationTimeline from "./components/EducationTimeline";
import Navbar from "./components/Navbar";

function App() {
  const { t } = useI18n();
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 space-y-14">
        {/* Profile */}
        <section>
          <Profile image={foto} />
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{t("sections.education")}</h2>
          {education.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/30 p-6 text-gray-400">
              No education entries.
            </div>
          ) : (
            <EducationTimeline items={education} />
          )}
        </section>

        {/* Experiences */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{t("sections.experiences")}</h2>
          {experiences.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/30 p-6 text-gray-400">
              {t("common.empty_experiences")} <code className="bg-gray-800/60 px-1 rounded">{t("common.code_path")}</code>.
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1">
              {experiences.map((exp, idx) => (
                <ExperienceCard
                  key={`${exp.company}-${idx}`}
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  description={exp.description}
                  tags={exp.tags}
                />
              ))}
            </div>
          )}
        </section>

        {/* Technologies */}
        <section id="tools" className="space-y-8">
          <TechCarousel
            title={t("sections.skills")}
            skills={skills}
          />
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{t("sections.projects")}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                name={project.name}
                description={project.description}
                images={project.images}
                url={project.url}
                tags={project.tags}
                key={typeof project.name === 'string' ? project.name : (project.name?.en || project.name?.es)}
              />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
