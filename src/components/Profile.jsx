function Profile({ image, degree }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 items-center">
        <img
          src={image}
          alt="profile image"
          className="rounded-full object-cover"
        />
        <div>
          <span className="block text-center">Aldair Torrez</span>
          <span className="block text-center">{degree}</span>
        </div>
        <pre className="text-wrap">
          Desarrollador full stack con tendencia al backend. Prefiero tener el
          control a producir resultados rápidos que no entiendo. Mientras más
          difícil sea una actividad, la encuentro más divertida
        </pre>
      </div>
    </div>
  );
}

export default Profile;
