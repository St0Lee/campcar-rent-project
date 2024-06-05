export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Inter", sans-serif',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 48,
    xxl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primaryText: '#f2f2f2',
    mainBlack: '#101828',
    text: '#475467',
    linkHover: '#a6a6a6',
    backdropBackground: '#101510a1',
    modalBackground: '#fff',
    button:'#E44848',
    buttonHover: '#D84343',
    input: '#F7F7F7',
    blockFeatures: '#f2f4f7',
    rating: '#ffc531'
  },
  radius: {
    none: '0',
    normal: '200px',
  },
  borders: {
    button: '1px solid rgba(71, 84, 103, 0.2)',
    buttonHover: 'border: 1px solid #E44848;',
    headerBorder: '2px solid  blue',
  },
  shadows: {
      textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
    }
});