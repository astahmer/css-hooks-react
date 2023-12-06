import { defineConfig } from "@pandacss/dev";
import * as V from "varsace";

function splitColorAndShade(colorString: string): {
  color: string;
  shade: string;
} {
  const match = colorString.match(/^([a-zA-Z]+)(\d+)$/);
  if (!match) return { color: colorString, shade: "" };
  return { color: match[1], shade: match[2] };
}

// Main function to convert exported variables to the colors object
function createColorsObject(exportedColors: { [key: string]: string }) {
  const colors = {};

  Object.entries(exportedColors).forEach(([key, value]) => {
    const { color, shade } = splitColorAndShade(key);
    if (!colors[color]) colors[color] = {};

    if (shade) {
      colors[color][shade] = { value };
    } else {
      colors[color] = { value };
    }
  });

  return colors;
}

const colors = createColorsObject(V);

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "mjs",
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  // jsxFramework: "react",

  // The CSS Syntax to use to use
  syntax: "object-literal",
});
