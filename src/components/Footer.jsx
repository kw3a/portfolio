import github from "../assets/github.svg";
const myGithub = "https://github.com/kw3a";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 p-8">
      <a href={myGithub} target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github logo" width="40" height="40" />
      </a>
    </footer>
  );
}

export default Footer;
