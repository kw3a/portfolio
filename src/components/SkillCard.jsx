function SkillCard({ name, image }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-800/40 border border-gray-700 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800">
        <img src={image} alt="skill image" className="h-10 w-10 object-contain" />
      </div>
      <span className="mt-2 text-sm text-gray-300">{name}</span>
    </div>
  );
}

export default SkillCard;
