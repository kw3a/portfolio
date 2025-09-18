import github from "../assets/github.svg";
import { useI18n } from "../i18n/i18n.jsx";
import contact from "../data/contact";
const myGithub = "https://github.com/kw3a";

function Footer() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="mt-12 border-t border-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-gray-300">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {/* Contact */}
            <div className="grid grid-cols-1 gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 inline-flex items-center justify-center rounded bg-gray-800/60 border border-gray-700 text-gray-300">@</div>
                <div>
                  <div className="text-xs text-gray-400">{t("contact.email")}</div>
                  <a href={`mailto:${contact.email}`} className="text-sm hover:underline break-all">{contact.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 inline-flex items-center justify-center rounded bg-gray-800/60 border border-gray-700 text-gray-300">☎</div>
                <div>
                  <div className="text-xs text-gray-400">{t("contact.phone")}</div>
                  <span className="text-sm">{contact.phone}</span>
                </div>
              </div>
              {contact.linkedin ? (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 inline-flex items-center justify-center rounded bg-gray-800/60 border border-gray-700 text-gray-300">in</div>
                  <div>
                    <div className="text-xs text-gray-400">{t("contact.linkedin")}</div>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline break-all">
                      {contact.linkedin}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-center gap-4 text-gray-400">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
