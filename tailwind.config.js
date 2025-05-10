module.exports = {
  // Note: config only includes the used styles & variables of your selection
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "small-text-font-family": "Inter-Medium, sans-serif",
        "subheading-font-family": "Inter-Regular, sans-serif",
        "body-text-font-family": "Inter-Medium, sans-serif",
      },
      fontSize: {
        "small-text-font-size": "16px",
        "subheading-font-size": "24px",
        "body-text-font-size": "20px",
      },
      fontWeight: {
        "small-text-font-weight": "500",
        "subheading-font-weight": "400",
        "body-text-font-weight": "500",
      },
      lineHeight: {
        "small-text-line-height": "150%",
        "subheading-line-height": "150%",
        "body-text-line-height": "150%",
      },
      letterSpacing: {},
      borderRadius: {},
      colors: {
        "var-color-border": "#e6e6e6",
        "var-color-text": "rgba(0, 0, 0, 0.90)",
      },
      spacing: {
        "spacing-sm": "32px",
        "spacing-m": "48px",
        "spacing-s": "24px",
        "spacing-xs": "8px",
      },
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [],
};
