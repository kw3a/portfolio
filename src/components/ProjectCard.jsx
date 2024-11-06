import github from "../assets/github.svg";
function ProjectCard({ name, description, image, url, tags }) {
  return (
    <div className="flex flex-col rounded bg-gray-900">
      <div class="relative w-full">
        <div class="pt-[50%]"></div>

        <div class="absolute inset-0 flex justify-center items-center">
          <img
            src={image}
            alt="project image"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <span className="font-semibold">{name}</span>
        <span>{description}</span>
        <div class="flex flex-wrap gap-2 overflow-x-auto max-w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-400 p-1 rounded text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        {url ? (
          <div className="flex flex-row-reverse">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github logo" width="30" height="30" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
