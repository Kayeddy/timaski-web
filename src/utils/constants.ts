import {
  FaInstagram as InstagramIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa";
import {
  FaXTwitter as TwitterIcon,
  FaThreads as ThreadsIcon,
} from "react-icons/fa6";

export const features = {
  vetFeatures: [
    {
      id: "base-feature-vet",
      icon: "/assets/images/feature-1.png",
      caption: "Para veterinarios",
      title: "Aumenta tu visibilidad",
      text: "Regístrate y muestra tu clínica en el mapa interactivo. Más ojos en tu perfil significan más clientes, más citas y más ingresos para ti.",
      button: {
        icon: "assets/svg/magictouch.svg",
        title: "Regístrate gratis",
      },
    },
    {
      id: "feature-detail-1-vet",
      icon: "/assets/images/detail-1.png",
      title: "Perfil destacado en el mapa",
    },
    {
      id: "feature-detail-2-vet",
      icon: "/assets/images/detail-2.png",
      title: "Aumento de citas y clientes",
    },
  ],

  petOwnerFeatures: [
    {
      id: "base-feature-pet-owner",
      icon: "/assets/images/feature-2.png",
      caption: "Para dueños de mascotas",
      title: "Tu mascota, tu tranquilidad",
      text: "Encuentra veterinarios de confianza cerca de ti con solo un clic. Reserva citas fácilmente y mantén el cuidado de tu mascota al día sin complicaciones.",
      button: {
        icon: "assets/svg/docs.svg",
        title: "Encuentra un vet gratis",
      },
    },
    {
      id: "feature-detail-1-pet-owner",
      icon: "/assets/images/detail-3.png",
      title: "Encuentra el mejor cuidado cercano",
    },
    {
      id: "feature-detail-2-pet-owner",
      icon: "/assets/images/detail-4.png",
      title: "Reserva rápida y sencilla",
    },
  ],
};

export const faqs = {
  vetFaqs: [
    {
      id: "faq-1-vet",
      question: "¿Cómo puedo unirme a Timaski como veterinario?",
      answer:
        "¡Unirte es muy fácil! Crea tu perfil, agrega tus servicios y especifica las especies que atiendes. Y lo mejor de todo, es gratis para los veterinarios. Podrás comenzar a conectar con dueños de mascotas de inmediato y expandir tu red profesional.",
    },
    {
      id: "faq-2-vet",
      question: "¿Timaski tiene algún costo para los veterinarios?",
      answer:
        "No, el MVP de Timaski es totalmente gratuito para los veterinarios. Puedes crear tu perfil, recibir reservas de citas y comunicarte con los dueños de mascotas sin ningún costo. ¡Queremos ayudarte a crecer!",
    },
    {
      id: "faq-3-vet",
      question: "¿Cómo me encuentran los dueños de mascotas en Timaski?",
      answer:
        "Cuando los dueños de mascotas agregan la información de sus mascotas a su perfil, Timaski les muestra un mapa con los veterinarios cercanos según la especie de sus mascotas. Luego, pueden hacer clic en tu perfil para saber más sobre ti y agendar una cita.",
    },
    {
      id: "faq-4-vet",
      question: "¿Puedo gestionar mi agenda a través de Timaski?",
      answer:
        "¡Sí! Puedes configurar tu disponibilidad en tu perfil, permitiendo que los dueños de mascotas reserven citas de acuerdo a tu horario. Puedes ofrecer tanto citas en línea como presenciales, haciendo que la gestión de tu tiempo sea más sencilla.",
    },
    {
      id: "faq-5-vet",
      question:
        "¿Cómo puedo mostrar mis certificaciones y diplomas académicos en Timaski?",
      answer:
        "Sube tus diplomas y certificaciones académicas directamente a tu perfil. De esta manera, los dueños de mascotas podrán ver tus credenciales y sentirse más confiados al reservar una cita contigo. ¡Tu experiencia y conocimientos estarán siempre visibles!",
    },
  ],

  petOwnerFaqs: [
    {
      id: "faq-1-pet-owner",
      question:
        "¿Cómo puedo encontrar un veterinario para mi mascota en Timaski?",
      answer:
        "Encontrar al veterinario ideal para tu peludo (o no tan peludo) amigo es muy sencillo en Timaski. Solo agrega una o más mascotas a tu perfil y te mostraremos un mapa con los veterinarios cercanos que atienden a la especie de tu mascota. Haz clic en el perfil del veterinario para ver más detalles, chatear con ellos o agendar una cita.",
    },
    {
      id: "faq-2-pet-owner",
      question: "¿Usar Timaski tiene algún costo para los dueños de mascotas?",
      answer:
        "¡No te preocupes! Timaski es completamente gratuito para los dueños de mascotas. Puedes buscar veterinarios, comunicarte con ellos y agendar citas sin gastar un solo centavo. Queremos que te enfoques en lo más importante: el bienestar de tu mascota.",
    },
    {
      id: "faq-3-pet-owner",
      question:
        "¿Puedo ver las certificaciones académicas de un veterinario antes de reservar una cita?",
      answer:
        "¡Claro que sí! Queremos que te sientas seguro con la atención que recibirá tu mascota. Por eso, cada perfil de veterinario en Timaski incluye diplomas y certificaciones académicas para que puedas tomar una decisión informada antes de agendar.",
    },
    {
      id: "faq-4-pet-owner",
      question: "¿Cómo programo una cita con un veterinario?",
      answer:
        "Una vez que encuentres al veterinario que necesitas, podrás ver su disponibilidad en su perfil y reservar una cita directamente a través de la plataforma, ya sea en línea o para una visita presencial. ¡Tu mascota estará en buenas manos en poco tiempo!",
    },
    {
      id: "faq-5-pet-owner",
      question: "¿Qué especies admite Timaski?",
      answer:
        "Timaski está diseñado para cuidar a una amplia variedad de animales. Puedes encontrar veterinarios para Perros, Gatos, Conejos, Aves, Hámsters, Hurones, Cerdos, Peces, Equinos, Ovejas y Vacas. El perfil de cada veterinario indicará claramente qué especies atienden, así que no tendrás dudas al elegir.",
    },
  ],
};

export const shared = {
  footer: {
    socials: [
      {
        id: "0",
        title: "x",
        Icon: TwitterIcon,
        url: "#",
      },
      {
        id: "1",
        title: "Threads",
        Icon: ThreadsIcon,
        url: "#",
      },
      {
        id: "2",
        title: "Instagram",
        Icon: InstagramIcon,
        url: "#",
      },
      {
        id: "3",
        title: "Discord",
        Icon: DiscordIcon,
        url: "#",
      },
    ],
  },
};
