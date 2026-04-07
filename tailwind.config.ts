import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#e6e8e9",
        "primary-fixed-dim": "#a5c9fd",
        "tertiary-fixed-dim": "#ffb59a",
        "on-tertiary-fixed-variant": "#802a00",
        "tertiary-container": "#762600",
        "surface": "#f8fafb",
        "on-error": "#ffffff",
        "primary-container": "#1a426e",
        "on-tertiary-container": "#ff8e63",
        "primary-fixed": "#d3e3ff",
        "on-primary": "#ffffff",
        "secondary": "#48663e",
        "error": "#ba1a1a",
        "surface-variant": "#e1e3e4",
        "on-primary-fixed-variant": "#214874",
        "on-error-container": "#93000a",
        "on-surface": "#191c1d",
        "inverse-on-surface": "#eff1f2",
        "surface-container-low": "#f2f4f5",
        "on-secondary-fixed-variant": "#314e28",
        "on-secondary-container": "#4e6c43",
        "error-container": "#ffdad6",
        "outline": "#737780",
        "primary": "#002c53",
        "surface-container-highest": "#e1e3e4",
        "background": "#f8fafb",
        "tertiary": "#511700",
        "secondary-fixed": "#caedb9",
        "inverse-surface": "#2e3132",
        "on-background": "#191c1d",
        "surface-tint": "#3c608e",
        "on-tertiary-fixed": "#380d00",
        "surface-container": "#eceeef",
        "surface-bright": "#f8fafb",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#43474f",
        "secondary-container": "#caedb9",
        "secondary-fixed-dim": "#aed09f",
        "inverse-primary": "#a5c9fd",
        "on-primary-container": "#8cafe1",
        "on-primary-fixed": "#001c39",
        "outline-variant": "#c3c6d0",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d8dadb",
        "tertiary-fixed": "#ffdbcf",
        "on-secondary-fixed": "#062102",
        "on-tertiary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
