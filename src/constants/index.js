const sphereColors = ["#7ff", "#ff6ec7", "#7fff7a", "#ffd37a", "#ff7a7a"];

const BlobHeroLocationDefault = {
    position: { x: 1, y: 0 },
    scale: 3,
    eyes: {
      left: {
        x: -0.15,
        y: 0.15,
      },
      right: {
        x: -0.05,
        y: 0.15,
      },
    },
};

const BlobHeroLocationMobile = {
    position: { x: 0, y: -1 },
    scale: 2,
    eyes: {
      left: {
        x: -0.05,
        y: 0.2,
      },
      right: {
        x: 0.05,
        y: 0.2,
      },
    },
};

export { sphereColors, BlobHeroLocationDefault, BlobHeroLocationMobile };
