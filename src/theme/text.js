export const text = {
  default: {
    //? fix the font looks different with figma https://forum.figma.com/t/font-in-browser-seem-bolder-than-in-the-figma/24656/4
    // for safari and chrome
    '-webkit-font-smoothing': 'antialiased',
    //for firefox
    '-moz-osx-font-smoothing': 'grayscale',
    //other
    fontSmooth: 'never',
    fontWeight: 'normal'
  },
  heading: {
    normal: {
      variant: 'text.default',
      fontFamily: 'primary.normal'
    },
    medium: {
      variant: 'text.default',
      fontFamily: 'primary.medium'
    },
    bold: {
      variant: 'text.default',
      fontFamily: 'primary.bold'
    }
  },
  body: {
    normal: {
      variant: 'text.default',
      fontFamily: 'body.normal',
      lineHeight: 1.5
    },
    bold: {
      variant: 'text.default',
      fontFamily: 'body.bold',
      lineHeight: 1.5
    }
  }
};
