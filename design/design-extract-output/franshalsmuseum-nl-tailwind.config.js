/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(34, 98%, 97%)',
            '100': 'hsl(34, 98%, 94%)',
            '200': 'hsl(34, 98%, 86%)',
            '300': 'hsl(34, 98%, 76%)',
            '400': 'hsl(34, 98%, 64%)',
            '500': 'hsl(34, 98%, 50%)',
            '600': 'hsl(34, 98%, 40%)',
            '700': 'hsl(34, 98%, 32%)',
            '800': 'hsl(34, 98%, 24%)',
            '900': 'hsl(34, 98%, 16%)',
            '950': 'hsl(34, 98%, 10%)',
            DEFAULT: '#fecd8c'
        },
        secondary: {
            '50': 'hsl(190, 100%, 97%)',
            '100': 'hsl(190, 100%, 94%)',
            '200': 'hsl(190, 100%, 86%)',
            '300': 'hsl(190, 100%, 76%)',
            '400': 'hsl(190, 100%, 64%)',
            '500': 'hsl(190, 100%, 50%)',
            '600': 'hsl(190, 100%, 40%)',
            '700': 'hsl(190, 100%, 32%)',
            '800': 'hsl(190, 100%, 24%)',
            '900': 'hsl(190, 100%, 16%)',
            '950': 'hsl(190, 100%, 10%)',
            DEFAULT: '#001317'
        },
        'neutral-50': '#fafafa',
        'neutral-100': '#000000',
        background: '#001317',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Rubik',
            'sans-serif'
        ]
    },
    fontSize: {
        '14': [
            '14px',
            {
                lineHeight: '14px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '28px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '24px'
            }
        ],
        '60': [
            '60px',
            {
                lineHeight: '60px'
            }
        ]
    },
    spacing: {
        '1': '4px',
        '14': '56px',
        '20': '80px',
        '60': '240px'
    },
    borderRadius: {
        lg: '12px',
        xl: '24px',
        full: '36px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        '1180px': '1180px',
        xl: '1280px',
        '1920px': '1920px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '400': '0.4s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 1, 1)'
    },
    container: {
        center: true,
        padding: '40px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
