import { useI18n } from "../i18n/i18n.jsx";

function LanguageToggle() {
  const { lang, toggle, t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/60 px-3 py-1.5 text-sm text-gray-200 shadow hover:bg-gray-800/70 hover:border-gray-700 transition-colors"
      title={t("common.change_language")}
    >
      <span className="font-semibold tracking-wide">{t("common.language_toggle")}</span>
      <span className="text-gray-400">{lang.toUpperCase()}</span>
    </button>
  );
}

export default LanguageToggle;
