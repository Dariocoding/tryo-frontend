import { ValidImagePath, imagesPaths } from "@/utils";

export interface StepHowItWorksData {
  title: string;
  subtitle: string;
  content: string[];
  image: ValidImagePath;
}

export const stepHowItWorksData: StepHowItWorksData[] = [
  {
    title: "Fluidez com seus ativos.",
    subtitle: "¿Cómo funciona?",
    content: [
      "El usuario de tu web paga",
      "en reales por tu producto",
      "o servicio vía QR en Pix.",
    ],
    image: imagesPaths.phoneTryo,
  },
  {
    title: "Fluidez com seus ativos.",
    subtitle: "¿Cómo funciona?",
    content: ["Tryo gestiona tu pago", "y lo transforma en cripto al instante."],
    image: imagesPaths.changeTryo,
  },

  {
    title: "Fluidez com seus ativos.",
    subtitle: "¿Cómo funciona?",
    content: [
      "El usuario de tu web paga",
      "en reales por tu producto",
      "o servicio vía QR en Pix.",
    ],
    image: imagesPaths.transferTryo,
  },
];

export interface InfoIconData {
  image: ValidImagePath;
  title: string;
  description: string;
}

export const infoIconsData: InfoIconData[] = [
  {
    image: imagesPaths.icons.arrowRecycle,
    title: "Inmediatez",
    description: "En la confirmación y depósito de pago",
  },
  {
    image: imagesPaths.icons.rompecabezas,
    title: "Compatibilidad cripto",
    description: "Transferir a cualquier billetera en compatibilidad cripto",
  },
  {
    image: imagesPaths.icons.world,
    title: "Mundial",
    description: "Recibe su dinero en cualquier lugar del mundo",
  },
  {
    image: imagesPaths.icons.trade,
    title: "Reales y cripto",
    description: "Admite pagos en reales y cripto",
  },
  {
    image: imagesPaths.icons.arrowRecycle,
    title: "API",
    description: "Integración por API para sitios asociados",
  },
  {
    image: imagesPaths.icons.arrowRecycle,
    title: "Pagos con Pix",
    description: "Admite reales en pagos con QR desde Pix",
  },
];
