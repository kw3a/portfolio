import { useEffect, useState } from "react";
import github from "../assets/github.svg";
import { useI18n } from "../i18n/i18n.jsx";
function ProjectCard({ name, description, image, url, tags = [] }) {
  const { t, tl } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="group h-full flex flex-col rounded-xl bg-gray-900/60 border border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Flexible image area grows to absorb leftover space on shorter cards */}
      <div
        className="relative w-full bg-gray-800 flex-1 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] cursor-zoom-in"
        onClick={() => image && setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Zoom image"
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && image) setOpen(true);
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center p-2">
          {image ? (
            <img
              src={image}
              alt="project image"
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">
              {t("common.no_image")}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-lg font-semibold tracking-tight">{tl(name)}</span>
        <span className="text-sm text-gray-300 leading-relaxed">{tl(description)}</span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/60 px-2.5 py-1 text-xs text-gray-300 group-hover:border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {url ? (
          <div className="mt-auto pt-1 flex flex-row-reverse">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              title={t("common.github_title")}
            >
              <img src={github} alt="github logo" width="28" height="28" />
            </a>
          </div>
        ) : null}
      </div>

      {open && image ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={image}
              alt="project image enlarged"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectCard;
