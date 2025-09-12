import { useI18n } from "../i18n/i18n.jsx";

function ExperienceCard({ role, company, location, period, description, tags = [] }) {
  const { tl } = useI18n();
  const roleTxt = tl(role);
  const companyTxt = tl(company);
  const locationTxt = tl(location);
  const descTxt = tl(description);
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{roleTxt}</h3>
          <p className="text-gray-300">
            {companyTxt}
            {locationTxt ? ` • ${locationTxt}` : ''}
          </p>
        </div>
        {period && <span className="text-sm text-gray-400">{period}</span>}
      </div>
      {descTxt && (
        <p className="text-sm text-gray-300 leading-relaxed">{descTxt}</p>
      )}
      {tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/60 px-2.5 py-1 text-xs text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
