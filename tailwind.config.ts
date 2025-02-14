import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        '18':'4.5rem',
        '22':'5.5rem',
        '26':'6.5rem',
        '36':'9.5rem',
        '46':'11.5rem',
        '58':'14.5rem',
        '62':'15.5rem',
        '68':'17rem',
        '74':'18.5rem',
        '76':'19rem',
        '78':'19.5rem',
        '82':'20.5rem',
        '84':'21rem',
        '88':'23rem',
        '100':'25rem',
        '104':'26rem',
        '108':'27rem',
        '112':'28rem',
        '116':'29rem',
        '120':'30rem',
        '124':'31rem',
        '128':'32rem',
        '132':'33rem',
      },
      screens:{
        'tablet': '640px',
        'pc':'1600px',
        'macPro':'1400px',
        'macAir':'1200px',
        'ipadAir':'820px',
        'l-pc':'1800px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'var(--binv-theme-primary)',// Primary
        'primary-dark':'var(--binv-theme-primary-dark)',// Primary Dark
        secondary:'var(--binv-theme-secondary)',
        'secondary-dark':'var(--binv-theme-secondary-dark)',
        'secondary-darker':'var(--binv-theme-secondary-darker)',
        success:'var(--binv-theme-success)',
        error:'var(--binv-theme-error)',
        'error-light':'var(--binv-theme-error-light)',
        warning:'var(--binv-theme-warning)',
        'warning-dark':'var(--binv-theme-warning-dark)',
        'warning-darker':'var(--binv-theme-warning-darker)',
        'divider':'var(--binv-border)',
      },
      textColor:{
        typography: {
          primary: "var(--binv-text-primary)", // white
          'primary-light': 'var(--binv-text-primary-light)', //white light, 
          accent: 'var(--binv-text-p)', // grey
          'accent-light': 'var(--binv-text-p-light)', // grey light
          'accent-lighter': 'var(--binv-text-p-lighter)', // grey lighter
          'accent-dark': 'var(--binv-text-p-dark)', // grey dark
          'accent-darker': 'var(--binv-text-p-darker)', // grey darker
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      variants: {
        backdropBlur: ['responsive', 'hover', 'focus'],
      },
      animation:{
        show: 'show 0.5s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out',
        exband:'exband 0.3s ease-in-out',
        fadeIn:'fadeIn 1.5s ease-out'
      },
      keyframes:{
        wiggle: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        show :{
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        exband: {
          '0%': { transform: 'translateX(50px) scale(0)'  },
          '100%':{ transform: 'translateX(0px) scale(1)' },
        },
        fadeIn:{
          '0%':{opacity:0, display:'none'},
          '50%':{opacity:0.5, display:'block'},
          '100%':{opacity:1}
        },
      },
      backgroundImage: {
        // "profile_progress":"linear-gradient(90deg, #190F2E -8.02%, #2C1853 18.48%, #5F419B 88.35%, #5F419B 89.7%)"
      }
    },
  },
  plugins: [],
};
export default config;
