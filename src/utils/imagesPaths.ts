export interface ValidImagePath extends Required<Pick<HTMLImageElement, "src" | "alt">> {}

interface ImagesPaths {
  logoFull: ValidImagePath;
  exchangeIllustration: ValidImagePath;
  logoGradient: ValidImagePath;
  icons: {
    arrowRecycle: ValidImagePath;
    rompecabezas: ValidImagePath;
    world: ValidImagePath;
    trade: ValidImagePath;
    api: ValidImagePath;
    fullscreen: ValidImagePath;
  };
  phoneTryo: ValidImagePath;
  changeTryo: ValidImagePath;
  transferTryo: ValidImagePath;
}

export const imagesPaths: ImagesPaths = {
  logoFull: { src: "/images/logo-completo.png", alt: "Logo Tryo" },
  exchangeIllustration: {
    src: "/images/exchangeIllustration.png",
    alt: "Exchange Full Illustration",
  },
  logoGradient: { src: "/images/logo-gradient.png", alt: "Logo tryo Gradient" },
  icons: {
    arrowRecycle: { src: "/images/icons/arrow-recyle.svg", alt: "Arrow Recycle Tryo Icon" },
    rompecabezas: { src: "/images/icons/rompecabezas.svg", alt: "Rompecabezas Tryo Icon" },
    world: { src: "/images/icons/world.svg", alt: "World Tryo Icon" },
    trade: { src: "/images/icons/trade.svg", alt: "Trade Tryo Icon" },
    api: { src: "/images/icons/api.svg", alt: "API Tryo Icon" },
    fullscreen: { src: "/images/icons/fullscreen.svg", alt: "Fullscreen Tryo Icon" },
  },
  phoneTryo: { src: "/images/phone-tryo.png", alt: "Phone Tryo" },
  changeTryo: { src: "/images/tryo-change.png", alt: "Change Tryo" },
  transferTryo: { src: "/images/tryo-transfer.png", alt: "Transfer Tryo" },
};
