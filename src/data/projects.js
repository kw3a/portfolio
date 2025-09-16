import prueba from "../assets/prueba.png";
import hid from "../assets/hid_scheme.jpg";
import shorts from "../assets/shortsSS.png"
import inspector from "../assets/inspectorSS.png"

const inspectorURL = "https://github.com/kw3a/inspector";
const hidURL = "https://github.com/kw3a/dual-arcade-joystick";
const spottedURL = "https://github.com/kw3a/spotted-server";
const shortGenURL = "https://github.com/kw3a/short-generator";
const projects = [
  {
    name: {
      es: "Plataforma de reclutamiento con juez evaluador de código",
      en: "Recruitment platform with code-judging system",
    },
    description: {
      es: "Proyecto final. Tiene el objetivo de facilitar la parte de la prueba técnica en el proceso de entrevistas laborales para desarrolladores de software. Las pruebas que se pueden realizar son de tipo algorítmico, similar a HackerRank y LeetCode.",
      en: "Final project. Aims to streamline the technical test stage in developer interviews. Supports algorithmic challenges similar to HackerRank and LeetCode.",
    },
    image: prueba,
    url: spottedURL,
    tags: ["Go", "htmx", "Mysql", "SSE", "tailwind", "Docker", "testing", "JWT auth"],
  },
  {
    name: {
      es: "Dispositivo USB HID compuesto",
      en: "Composite USB HID device",
    },
    description: {
      es: "Clon de 'Xin-Mo Tek Dual Joystick Controller' con STM32F103C8T6",
      en: "Clone of 'Xin-Mo Tek Dual Joystick Controller' with STM32F103C8T6",
    },
    image: hid,
    url: hidURL,
    tags: ["C", "STM32Cube Framework", "USB HID"],
  },
  {
    name: {
      es: "Generador de shorts de historias de reddit",
      en: "Reddit stories shorts generator",
    },
    description: {
      es: "Permite seleccionar el subreddit, video de fondo, voz de lectura y el número de historias a leer. Subí algunos videos generados con la herramienta aquí: https://www.tiktok.com/@click7tv",
      en: "Select subreddit, background video, narration voice, and number of stories to read. I have uploaded some videos generated with this tool here: https://www.tiktok.com/@click7tv",
    },
    image: shorts,
    url: shortGenURL,
    tags: ["Python", "ffmpeg", "praw", "moviepy", "openai API", "azure tts API"],
  },
  {
    name: {
      es: "Organizador de errores de terminal",
      en: "Terminal errors organizer",
    },
    description: {
      es: "Se usa como prefijo de cualquier comando. Si el comando imprime en stderr, cada error se envía y organiza en el dashboard.",
      en: "Used as a prefix for any command. If the command prints to stderr, each error is sent and organized in the dashboard.",
    },
    image: inspector,
    url: inspectorURL,
    tags: ["express", "nodejs", "htmx", "tailwind", "shell", "bash"],
  },
];

export default projects;
