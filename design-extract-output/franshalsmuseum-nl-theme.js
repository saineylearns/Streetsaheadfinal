// React Theme — extracted from https://franshalsmuseum.nl/en/collection?onView=false
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '60': string;
 *   };
 *   space: {
    '4': string;
    '56': string;
    '80': string;
    '240': string;
 *   };
 *   radii: {
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#fecd8c",
    "secondary": "#001317",
    "background": "#001317",
    "foreground": "#000000",
    "neutral50": "#fafafa",
    "neutral100": "#000000"
  },
  "fonts": {
    "body": "'Rubik', sans-serif"
  },
  "fontSizes": {
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "60": "60px"
  },
  "space": {
    "4": "4px",
    "56": "56px",
    "80": "80px",
    "240": "240px"
  },
  "radii": {
    "lg": "12px",
    "xl": "24px",
    "full": "36px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#fecd8c",
      "light": "hsl(34, 98%, 92%)",
      "dark": "hsl(34, 98%, 62%)"
    },
    "secondary": {
      "main": "#001317",
      "light": "hsl(190, 100%, 20%)",
      "dark": "hsl(190, 100%, 10%)"
    },
    "background": {
      "default": "#001317",
      "paper": "#fecd8c"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#fafafa"
    }
  },
  "typography": {
    "h1": {
      "fontSize": "60px",
      "fontWeight": "700",
      "lineHeight": "60px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "700",
      "lineHeight": "24px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "14px",
      "fontWeight": "700",
      "lineHeight": "14px"
    }
  },
  "shape": {
    "borderRadius": 12
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
  ]
};

export default theme;
