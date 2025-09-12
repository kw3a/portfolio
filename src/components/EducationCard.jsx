import { useI18n } from "../i18n/i18n.jsx";

function EducationCard({ degree, university, period, location, description }) {
  const { tl } = useI18n();
  const degreeTxt = tl(degree);
  const universityTxt = tl(university);
  const locationTxt = tl(location);
  const descTxt = tl(description);

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{degreeTxt}</h3>
          <p className="text-gray-300">
            {universityTxt}
            {locationTxt ? ` • ${locationTxt}` : ""}
          </p>
        </div>
        {period && <span className="text-sm text-gray-400">{period}</span>}
      </div>
      {descTxt && (
        <p className="text-sm text-gray-300 leading-relaxed">{descTxt}</p>
      )}
    </div>
  );
}

export default EducationCard;
