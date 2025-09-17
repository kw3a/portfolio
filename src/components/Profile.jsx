import { useI18n } from "../i18n/i18n.jsx";

function Profile({ image }) {
  const { t } = useI18n();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <img
          src={image}
          alt="profile image"
          className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full object-cover ring-2 ring-gray-600 shadow-lg"
        />
        <div>
          <span className="block text-2xl sm:text-3xl font-bold tracking-tight">Aldair Torrez</span>
        </div>
        <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
          {t("profile.description")}
        </p>
      </div>
    </div>
  );
}

export default Profile;
