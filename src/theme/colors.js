// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

// neutrals
const neutral = {
  200: '#FFFBEE', //Floral White
  300: '#F0F3FA', // Ghost-white
  400: '#F0FAF0', // Mint-Cream
  500: '#666666', // Dim-Gray
  800: '#202020' //Earie-Black
};

const green = {
  100: '#F0FAF0', //Light green
  500: '#D6FF29', //Chartreuse
  600: '#C1E03B', //Pear
  650: '#A1C20F',
  700: '#338149', //Sea-Green
  800: '#105E3D', //Castleton-Green
  900: '#2C483B', //Brunswick-Green, usage: button color,
  950: '#1F3329',
  1000: '#23382E'
};

const blue = {
  100: '#F0F3FA', // light blue
  200: '#3E83A3',
  500: '#244C5E', //Charcoal
  550: '#162F3B',
  600: '#253B6A' //Delft-Blue
};

const red = {
  800: '#E8452B'
};

const base = {
  // Text
  primary: neutral[800],
  secondary: neutral[500],
  primaryInvert: neutral[200],
  lime: green[600],
  spirulina: blue[500],

  background: neutral[200], // -> surfaces.page
  backgroundDarker: blue[100],
  dark: neutral[800],
  disabled: neutral[200],
  hover: '#23392F',

  // decorations:
  chlorellaDecorations: '#00603A',

  // elementColors,
  buttonPrimary: green[900],
  moleculesPrimary: green[600],
  moleculesLightGreen: '#BED55D', // update later as no new design for it yet
  moleculesGreenishWhite: '#D3EA74', // update later as no new design for it yet
  disabled: neutral[500]
};

const texts = {
  primary: neutral[800],
  secondary: neutral[500],
  primaryInvert: neutral[200],
  lime: green[600],
  spirulina: blue[500],
  green: green[900]
};

const surfaces = {
  page: neutral[200],
  reviewStarsLight: green[500],
  uspBanner: green[600],
  cardDark: green[900],
  checkMarksLime: green[600],
  buttonLime: green[600],
  buttonLimeHover: green[650],
  buttonBlueHover: blue[550],
  buttonDarkGreenHover: green[950],
  spirulina: blue[500],
  chlorella: green[900],
  items: {
    label: green[600],
    chart: green[600],
    reviewStarts: green[600],
    chlorella: green[900],
    spirulina: blue[500]
  }
};

const illustration = {
  chlorella: green[800],
  chlorellaInvert: green[700],
  spirulina: blue[500],
  spirulinaInvert: blue[200]
};

const border = {
  icons: neutral[800]
};

const icons = {
  primary: neutral[800],
  invert: surfaces.page
};

// used by theme ui
const textColors = {
  text: base.primary,
  textLight: base.primaryInvert,
  heading: base.primary,
  navLink: base.primary
};

export const colors = {
  ...base,
  ...textColors,
  texts,
  surfaces,
  illustration,
  border,
  icons,

  // todo: cleanup, we should not use those anymore
  neutral,
  green,
  red,
  blue
};
