export const customEnvs = [
  {
    name: "Desert",
    path: "/hdri/goegap_4k.exr",
  },
  {
    name: "Road",
    path: "/hdri/leibstadt_4k.exr",
  },
  {
    name: "greenery",
    path: "/hdri/shady_patch_4k.exr",
  },
  {
    name: "Beach",
    path: "/hdri/spiaggia_di_mondello_4k.exr",
  },
  {
    name: "Sunset",
    path: "/hdri/the_sky_is_on_fire_4k.exr",
  },
];

export function hexTorgb(hexValue) {
  const color = hexValue.target.value;
  const r = parseInt(color.substr(1, 2), 16) / 100;
  const g = parseInt(color.substr(3, 2), 16) / 100;
  const b = parseInt(color.substr(5, 2), 16) / 100;
  return { r, g, b };
}
