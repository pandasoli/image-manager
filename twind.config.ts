import { Options } from '$fresh/plugins/twind.ts'
import { css } from 'twind/css'
import { apply } from 'twind'


export default {
  selfURL: import.meta.url,
  preflight(preflight) {
    delete preflight['img,video'];

    return css(preflight, {
      html: { scrollBehavior: 'smooth' },
      body: apply`flex flex-col items-center min-h-screen bg-white font-default text-polar-night-IIII text-1.265 font-normal `
    })
  },
  theme: {
    fontFamily: {
      default: [ 'Rubik', 'IMB', 'sans-serif' ]
    },
    fontSize: {
      0.8: '0.8em',
      0.875: '0.875em',
      0.9: '0.9em',
      1: '1rem',
      1.125: '1.125em',
      1.265: '1.26562em',
      1.5: '1.5em',
      1.802: '1.80203em',
      2.027: '32.4366px' // '2.02729em'
    },
    extend: {
      colors: {
        'polar-night-I': '#2E3440',
        'polar-night-II': '#3B4252',
        'polar-night-III': '#434C5E',
        'polar-night-IIII': '#4C566A',

        'snow-storm-I': '#D8DEE9',
        'snow-storm-II': '#E5E9F0',
        'snow-storm-III': '#ECEFF4',

        'frost-I': '#8FBCBB',
        'frost-II': '#88C0D0',
        'frost-III': '#81A1C1',
        'frost-IIII': '#5E81AC',

        'aurora-I': '#BF616A',
        'aurora-II': '#D08770',
        'aurora-III': '#EBCB8B',
        'aurora-IIII': '#A3BE8C',
        'aurora-IIIII': '#B48EAD'
      },
      boxShadow: {
        mini: 'rgb(216 222 233 / 15%) 0px 5px 10px 0px',
        medium: 'rgb(184 194 215 / 35%) 0px 3px 6px 0px'
      },
      spacing: {
        1.5: '1.5em',
        1.802: '1.80203em'
      }
    }
  }
} as Options
