import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      minHeight: "100%",
      backgroundColor: "#050605",
      color: "#e8ebe4",
    },
    body: {
      fontFamily: "body",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "700",
      letterSpacing: "-0.03em",
      lineHeight: "1.2",
    },
    a: {
      color: "inherit",
    },
  },
  theme: {
    tokens: {
      colors: {
        pactum: {
          50: { value: "#f6fbea" },
          100: { value: "#eaf5d0" },
          200: { value: "#d4ea9e" },
          300: { value: "#bddd6c" },
          400: { value: "#a8d14c" },
          500: { value: "#98C740" },
          600: { value: "#7a9e2e" },
          700: { value: "#5c7724" },
          800: { value: "#3f5119" },
          900: { value: "#242e0f" },
          950: { value: "#141a08" },
        },
        ink: {
          50: { value: "#f3f4f2" },
          100: { value: "#d7dbd3" },
          200: { value: "#b4bbae" },
          300: { value: "#8a9380" },
          400: { value: "#5c6656" },
          500: { value: "#314045" },
          600: { value: "#1c221d" },
          700: { value: "#141814" },
          800: { value: "#0c0e0c" },
          900: { value: "#080908" },
          950: { value: "#050605" },
        },
      },
      fonts: {
        heading: { value: '"Nexa", "Inter", ui-sans-serif, sans-serif' },
        body: { value: '"Prime", "Inter", ui-sans-serif, system-ui, sans-serif' },
      },
    },
    recipes: {
      heading: {
        base: {
          fontFamily: "heading",
          fontWeight: "700",
          lineHeight: "1.2",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
