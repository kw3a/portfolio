import { useEffect, useMemo, useState } from "react";
import github from "../assets/github.svg";
import { useI18n } from "../i18n/i18n.jsx";
function ProjectCard({ name, description, images = [], url, tags = [] }) {
  const { t, tl } = useI18n();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const hasImages = Array.isArray(images) && images.length > 0;
  const safeIndex = useMemo(() => (hasImages ? ((index % images.length) + images.length) % images.length : 0), [index, images.length, hasImages]);
  const currentSrc = hasImages ? images[safeIndex] : null;

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
        className="relative w-full bg-gray-800 flex-1 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
        role="button"
        tabIndex={0}
        aria-label="Project images"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setIndex((i) => i + 1);
          if (e.key === "ArrowLeft") setIndex((i) => i - 1);
          if ((e.key === "Enter" || e.key === " ") && hasImages) setOpen(true);
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center p-2">
          {hasImages ? (
            <>
              <img
                src={currentSrc}
                alt="project image"
                className="h-full w-full object-contain cursor-zoom-in"
                onClick={() => setOpen(true)}
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex((i) => i - 1);
                    }}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex((i) => i + 1);
                    }}
                  >
                    ›
                  </button>
                  <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full ${i === safeIndex ? "bg-white" : "bg-white/40"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIndex(i);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
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

      {open && currentSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentSrc}
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
