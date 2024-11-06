import prueba from "../assets/prueba.png";
const projects = [
  {
    name: "Plataforma de reclutamiento con juez evaluador de código",
    description:
      "Proyecto final de grado (en proceso). Tiene el objetivo de facilitar la parte de la prueba técnica en el proceso de entrevistas laborales para desarrolladores de software.      Las pruebas que se pueden realizar son pruebas de tipo algorítmico, similar a HackerRank y Leetcode. ",
    image: prueba,
    tags: ["Go", "htmx", "Mysql", "SSE", "tailwind", "Docker", "testing", "JWT auth"],
  },
  {
    name: "Generador de shorts de historias de reddit",
    description:
      "Se puede seleccionar el subreddit, video de fondo, voz de lectura y el número de historias que se quieren leer. ",
    image: "",
    tags: ["Python", "ffmpeg", "praw"],
  },
  {
    name: "Organizador de errores de terminal",
    description:
      "El programa puede utilizarse como prefijo de cualquier comando. Si el comando imprime en stderr, cada error se manda y organiza en el dashboard",
    image: "",
    tags: ["express", "nodejs", "htmx", "tailwind"],
  },
  {
    name: "z-type",
    description:
      "Juego de mecanografía en el que se destruyen naves espaciales escribiendo las palabras que llevan consigo. ",
    image: "",
    tags: ["javascript", "html", "css", "svg"],
  },
  {
    name: "Agrupación con algoritmos genéticos",
    description:
      "Se agrupan elementos basados en su posición en un espacio de 2 dimensiones. El tamaño de los grupos se puede configurar. ",
    image: "",
    tags: ["python", "tkinter"],
  },
];

export default projects;
