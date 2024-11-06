import github from "../assets/github.svg";
function ProjectCard({ name, description, image, url, tags }) {
  return (
    <div className="flex flex-col rounded border border-black">
      <img src={image} alt="project image" />
      <div className="flex flex-col gap-2 p-4">
        <span className="font-semibold">{name}</span>
        <span>{description}</span>
        <div class="flex flex-wrap gap-2 overflow-x-auto max-w-full">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 p-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github logo" width="30" height="30" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
