/** @type {import('tailwindcss').Config} */
import * as daisyui from 'daisyui'
import * as autoprefixer from 'autoprefixer'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // #982f1a
    // #cb251e
    // #db7115
    // #de9700 #DE9800
    // #e8b400
    // #efc100
    // #e1ead6 #F1EAD6
    // #7ea626
    // #f8f4ea
    // #7fa526
    // #de9700 #6F4D2B
    // #E8B400 #513420
    extend: {
      colors: {
        'burnt-copper': '#982f1a',
        'fire-red': '#cb261e',
        'intense-orange': '#db7216',
        'golden-yellow': '#de9700',
        'bright-yellow': '#DE9800',
        'light-gold': '#e8b300',
        'vibrant-yellow': '#efc100',
        'soft-white': '#e1ead6',
        'light-ivory': '#f8f4ea',
        'moss-green': '#7fa526',
        'dark-brown': '#6F4D2B',
        'light-gold-2': '#E8B400',
        'chocolate-brown': '#513420'
      },
      fontFamily: {
        tahoma: ["Tahoma", "sans-serif"],
        'ifc-insane-rodeo': ["IFC INSANE RODEO", 'sans-serif'],
        'ifc-insane-rodeo-bold': ["IFC INSANE RODEO BOLD", "sans-serif"]
      },
    }
  },
  plugins: [daisyui, autoprefixer],
}

