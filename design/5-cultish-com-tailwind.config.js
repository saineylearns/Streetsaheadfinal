/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(38, 36%, 97%)',
            '100': 'hsl(38, 36%, 94%)',
            '200': 'hsl(38, 36%, 86%)',
            '300': 'hsl(38, 36%, 76%)',
            '400': 'hsl(38, 36%, 64%)',
            '500': 'hsl(38, 36%, 50%)',
            '600': 'hsl(38, 36%, 40%)',
            '700': 'hsl(38, 36%, 32%)',
            '800': 'hsl(38, 36%, 24%)',
            '900': 'hsl(38, 36%, 16%)',
            '950': 'hsl(38, 36%, 10%)',
            DEFAULT: '#e9e0d0'
        },
        'neutral-50': '#ffffff',
        'neutral-100': '#000000',
        background: '#000000',
        foreground: '#ffffff'
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '18px'
            }
        ]
    },
    spacing: {
        '0': '2px',
        '1': '202px'
    },
    borderRadius: {
        sm: '3px'
    },
    transitionDuration: {
        '500': '0.5s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '600px'
    }
},
  },
};
