/* Tailwind Play CDN — configuração PARTILHADA (tokens M3 dark)
   Carregar logo a seguir ao script do CDN, em todas as páginas. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#1b1c1c",
        "outline": "#8e9192",
        "inverse-surface": "#e5e2e1",
        "tertiary": "#ffffff",
        "secondary-fixed-dim": "#c7c6c6",
        "on-secondary": "#303031",
        "secondary-fixed": "#e3e2e2",
        "on-surface": "#e5e2e1",
        "on-tertiary": "#303030",
        "inverse-primary": "#5d5f5f",
        "inverse-on-surface": "#313030",
        "background": "#131313",
        "error-container": "#93000a",
        "on-surface-variant": "#c4c7c8",
        "secondary-container": "#464747",
        "on-tertiary-container": "#656464",
        "surface-tint": "#c6c6c7",
        "primary-fixed-dim": "#c6c6c7",
        "surface-variant": "#353535",
        "on-secondary-fixed": "#1b1c1c",
        "on-error-container": "#ffdad6",
        "on-error": "#690005",
        "primary": "#ffffff",
        "on-primary-fixed-variant": "#454747",
        "tertiary-fixed-dim": "#c8c6c6",
        "on-background": "#e5e2e1",
        "on-secondary-fixed-variant": "#464747",
        "surface-dim": "#131313",
        "on-primary-fixed": "#1a1c1c",
        "primary-fixed": "#e2e2e2",
        "on-tertiary-fixed-variant": "#474747",
        "surface-container-highest": "#353535",
        "error": "#ffb4ab",
        "surface": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "tertiary-fixed": "#e4e2e1",
        "on-primary-container": "#636565",
        "secondary": "#c7c6c6",
        "tertiary-container": "#e4e2e1",
        "primary-container": "#e2e2e2",
        "outline-variant": "#444748",
        "on-secondary-container": "#b5b5b5",
        "surface-container": "#20201f",
        "surface-container-low": "#1c1b1b",
        "on-primary": "#2f3131",
        "surface-container-high": "#2a2a2a"
      },
      fontFamily: {
        "headline": ["Newsreader", "serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px" }
    }
  }
};
