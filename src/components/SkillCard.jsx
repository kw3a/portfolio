function SkillCard({ name, image }) {
  return (
    <div className="flex flex-col w-20 h-20 justify-center border border-black rounded">
      <div className="flex flex-col gap-2 items-center">
        <img src={image} alt="skill image" width="50" height="50" />
      </div>
    </div>
  );
}

export default SkillCard;
