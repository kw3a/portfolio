const experiences = [
  {
    role: {
      en: "Firmware development (freelance)",
      es: "Desarrollo de firmware (freelance)",
    },
    company: "",
    location: "",
    period: "Jan 2025",
    description: {
      en: "A retro arcade machine seller asked me to design a cost-effective replacement for a physical interface they were using. The original device functioned as a composite USB HID, so I wrote the firmware in C using the STM32Cube framework. To ensure full compatibility with his existing systems, I designed the new interface as a logical clone of the original. Although I had no prior experience in firmware development, I adapted quickly and successfully delivered a working solution.",
      es: "Un vendedor de máquinas de arcades retro me pidió diseñar un reemplazo económico para una interfaz física que estaba utilizando. El dispositivo original funcionaba como un composite USB HID, por lo que escribí el firmware en C usando el framework STM32Cube. Para garantizar la compatibilidad total con sus sistemas existentes, diseñé la nueva interfaz como un clon lógico del original. Aunque no tenía experiencia previa en el desarrollo de firmware, me adapté rápidamente y entregué una solución funcional.",
    },
    tags: ["C", "STM32Cube Framework"],
  },
  // Add items following the structure above
];

export default experiences;
