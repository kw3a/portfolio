import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/i18n.jsx";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-md transition-colors"
    >
      {children}
    </a>
  );
}

function Navbar() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800/80 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between gap-3">
          <a href="#top" className="text-sm font-semibold tracking-tight text-white/90 hover:text-white">
            Aldair Torrez
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            <NavLink href="#education">{t("sections.education")}</NavLink>
            <NavLink href="#experience">{t("sections.experiences")}</NavLink>
            <NavLink href="#tools">{t("sections.skills")}</NavLink>
            <NavLink href="#projects">{t("sections.projects")}</NavLink>
            <NavLink href="#contact">{t("sections.contact")}</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
          </div>
        </div>
        {/* Mobile nav */}
        <nav className="sm:hidden pb-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
          <NavLink href="#education">{t("sections.education")}</NavLink>
          <NavLink href="#experience">{t("sections.experiences")}</NavLink>
          <NavLink href="#tools">{t("sections.skills")}</NavLink>
          <NavLink href="#projects">{t("sections.projects")}</NavLink>
          <NavLink href="#contact">{t("sections.contact")}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
