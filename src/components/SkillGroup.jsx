import SkillCard from "./SkillCard";

function SkillGroup({ skills, name }) {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-center">{name}</span>
      <div className="flex justify-center gap-4">
        {skills.map((skill) => (
          <SkillCard name={skill.name} image={skill.image} key={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
