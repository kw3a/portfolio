import { useI18n } from "../i18n/i18n.jsx";

function Profile({ image, degree }) {
  const { t } = useI18n();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 items-center text-center">
        <img
          src={image}
          alt="profile image"
          className="h-28 w-28 rounded-full object-cover ring-2 ring-gray-700 shadow"
        />
        <div>
          <span className="block text-xl font-semibold tracking-tight">Aldair Torrez</span>
        </div>
        <p className="max-w-2xl text-gray-300 leading-relaxed">{t("profile.description")}</p>
      </div>
    </div>
  );
}

export default Profile;
