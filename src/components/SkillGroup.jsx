import SkillCard from "./SkillCard";

function SkillGroup({ skills, name }) {
  return (
    <div className="flex flex-col justify-center rounded-xl border border-gray-800 bg-gray-900/40 p-5">
      <span className="text-lg font-semibold tracking-tight text-center mb-3">{name}</span>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill) => (
          <SkillCard name={skill.name} image={skill.image} key={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
