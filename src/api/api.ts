export const preloadImages = (urls: string[]):void => {
  urls.forEach(url => {
     new Image().src = url;
  });
};


type RGB = {
  r: number,
  g: number,
  b: number,
}
const randomHexValue = () => {
  return Math.floor(Math.random()* 255);
}

export const getRandomRgb = (): RGB => {
  return {
    r: randomHexValue(),
    g: randomHexValue(),
    b: randomHexValue(),
  }
}

export const getCieY = (rgb: RGB): number => {
  // const x = rgb.r * 0.649926 + rgb.g * 0.103455 + rgb.b * 0.197109;
  return rgb.r * 0.234327 + rgb.g * 0.743075 + rgb.b * 0.022598;
  // const z = rgb.r * 0.0000000 + rgb.g * 0.053077 + rgb.b * 1.035763;
}
