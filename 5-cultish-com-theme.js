// React Theme — extracted from https://5.cultish.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
 *   };
 *   fonts: {

 *   };
 *   fontSizes: {
    '12': string;
 *   };
 *   space: {
    '2': string;
    '202': string;
 *   };
 *   radii: {
    sm: string;
 *   };
 *   shadows: {

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
    "primary": "#e9e0d0",
    "background": "#000000",
    "foreground": "#ffffff",
    "neutral50": "#ffffff",
    "neutral100": "#000000"
  },
  "fonts": {},
  "fontSizes": {
    "12": "12px"
  },
  "space": {
    "2": "2px",
    "202": "202px"
  },
  "radii": {
    "sm": "3px"
  },
  "shadows": {},
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
      "main": "#e9e0d0",
      "light": "hsl(38, 36%, 95%)",
      "dark": "hsl(38, 36%, 71%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#000000"
    },
    "text": {
      "primary": "#ffffff"
    }
  },
  "typography": {
    "body2": {
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "18px"
    }
  },
  "shape": {
    "borderRadius": 3
  },
  "shadows": []
};

export default theme;
