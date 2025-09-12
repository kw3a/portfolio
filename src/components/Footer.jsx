import github from "../assets/github.svg";
import { useI18n } from "../i18n/i18n.jsx";
const myGithub = "https://github.com/kw3a";

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-12 border-t border-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 py-8 text-gray-400">
          <a
            href={myGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            title={t("common.github_title")}
          >
            <img src={github} alt="github logo" width="28" height="28" />
            <span className="hidden sm:inline">github.com/kw3a</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
