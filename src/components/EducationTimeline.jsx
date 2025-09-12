import { useI18n } from "../i18n/i18n.jsx";

function EducationTimeline({ items = [] }) {
  const { tl } = useI18n();
  return (
    <div className="relative">
      <ol className="relative border-s border-gray-800">
        {items.map((ed, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${idx}-${tl(ed.university)}`} className="ms-6 py-4">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 bg-gray-900">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {tl(ed.degree)}
                </h3>
                {ed.period ? (
                  <span className="text-xs sm:text-sm text-gray-400">{ed.period}</span>
                ) : null}
              </div>
              <p className="text-gray-300">{tl(ed.university)}{tl(ed.location) ? ` • ${tl(ed.location)}` : ""}</p>
              {tl(ed.description) ? (
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{tl(ed.description)}</p>
              ) : null}
              {!isLast ? null : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default EducationTimeline;
