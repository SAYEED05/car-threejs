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

export function hexToBlenderRGB(hex) {
  // Remove the '#' character if present
  hex = hex.replace("#", "");

  // Parse the hexadecimal string into its RGB components
  var r = parseInt(hex.substring(0, 2), 16) / 255;
  var g = parseInt(hex.substring(2, 4), 16) / 255;
  var b = parseInt(hex.substring(4, 6), 16) / 255;

  // Return the RGB values as an object
  return { r: r, g: g, b: b };
}
