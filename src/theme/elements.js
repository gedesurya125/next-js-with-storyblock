const linkDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  variant: 'text.default',
  color: 'text'
};

const buttonDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  variant: 'text.default',
  // make this style reusable to type link element, make sure it's like button original display
  display: 'inline-block',
  '&:disabled, &[disabled]': {
    bg: 'disabled'
  },
  transition: '0.2s',
  whiteSpace: 'nowrap',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'texts.primary'
};

const hyperlinkDefault = {
  ...linkDefault
};

const links = {
  hyperlink: {
    // small
    ...hyperlinkDefault
  },
  footer: {
    ...linkDefault,
    variant: 'text.body.normal',
    display: 'block',
    lineHeight: 1.2,
    fontSize: ['1.4rem', '1.4rem', '1.4rem', '1.4rem'],
    mt: ['2.4rem', '2rem', '2rem', '2.4rem'],
    '& ~ a': {
      mt: '2rem'
    }
  },
  legal: {
    ...linkDefault
  },
  contact: {
    ...linkDefault
  },
  clear: {
    ...linkDefault,
    p: 0,
    bg: 'transparent'
  },

  // Shared Component style
  withSmallArrow: {
    ...linkDefault,
    p: 0,
    bg: 'transparent',
    display: 'flex',
    alignItems: 'center',
    variant: 'text.button.teriary',
    lineHeight: 1,
    fontSize: ['1.4rem', null, null, '1.4rem'],
    textTransform: 'uppercase',
    alignSelf: 'end'
  },
  navigationOverlay: {
    ...linkDefault,
    variant: 'text.heading.bold',
    textDecoration: 'none',
    lineHeight: 1,
    fontSize: ['2.4rem', '2.4rem', null, null],
    width: '100%',
    '& ~ *': {
      mt: ['2.4rem', '3.2rem', null, null]
    },
    bg: 'transparent',
    p: [0, 0, 0, 0] // need to do this to override button styles about padding
  },
  navigationBar: {
    ...linkDefault,
    variant: 'text.heading.bold',
    color: 'texts.primary',
    textDecoration: 'none',
    lineHeight: 1.4,
    fontSize: [null, null, '1.5rem', '1.6rem'], //checked
    '& ~ *': {
      ml: [null, null, '3.7rem', '4.8rem']
    },
    '&:hover': {
      color: 'texts.secondary'
    },
    // for button reset
    p: [0, 0, 0, 0], // need to do this to override button styles about padding
    bg: 'transparent'
  }
};

const buttons = {
  primary: {
    ...buttonDefault,
    variant: 'text.heading.bold',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    border: 'none',
    color: 'background',
    borderRadius: 'button',
    p: [
      '1.2rem 2.4rem 1.2rem 2.4rem',
      '1.2rem 2.4rem 1.2rem 2.4rem',
      '1.2rem 2.4rem 1.2rem 2.4rem',
      '1.2rem 2.4rem 1.2rem 2.4rem'
    ],
    p: [
      '1.4rem 3.2rem 1.4rem 3.2rem',
      '1.5rem 3.2rem 1.5rem 3.2rem',
      '1.5rem 3.2rem 1.5rem 3.2rem',
      '1.6rem 3.4rem 1.6rem 3.4rem'
    ],
    fontSize: ['1.6rem', '1.8rem', '1.6rem', '1.4rem'],
    bg: 'buttonPrimary',
    '&:hover': {
      bg: 'buttonPrimaryHover'
    }
  },

  primaryBig: {
    variant: 'buttons.primary',
    fontSize: ['1.6rem', '1.6rem', '1.8rem', '1.6rem']
  },
  secondary: {
    ...buttonDefault,
    variant: 'text.heading.bold',
    p: [
      `calc(1.4rem - 2px) calc(3.2rem - 2px)`,
      `calc(1.5rem - 2px) calc(3.2rem - 2px)`,
      `calc(1.5rem - 2px) calc(3.2rem - 2px)`,
      `calc(1.6rem - 2px) calc(3.4rem - 2px)`
    ],
    fontSize: ['1.6rem', '1.8rem', '1.6rem', '1.4rem'],
    lineHeight: 1,
    bg: 'transparent',
    color: 'text',
    borderRadius: 'button',
    border: '2px solid',
    borderColor: 'buttonPrimary'
  },

  navigationOverlay: {
    variant: 'buttons.secondary',
    p: [
      `calc(1.2rem - 1px) calc(2.4rem - 1px)`,
      `calc(1.2rem - 1px) calc(2.4rem - 1px)`,
      `calc(1.2rem - 2px) calc(3.2rem - 2px)`,
      `calc(1.2rem - 2px) calc(3.2rem - 2px)`
    ],
    fontSize: ['1.4rem', '1.4rem', '1.6rem', '1.6rem'],
    lineHeight: 1,
    color: 'texts.primaryInvert',
    border: ['1px solid', '1px solid', '2px solid', '2px solid'],
    borderColor: 'texts.primaryInvert'
  },

  tertiary: {
    variant: 'buttons.primary',
    p: '1.2rem 2.8rem 1.2rem 2.8rem',
    color: 'textDark',
    bg: 'secondary'
  },

  clear: {
    ...buttonDefault,
    p: 0,
    bg: 'transparent',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    // override the default button style
    '&:disabled, &[disabled]': {
      bg: 'transparent'
    }
  }
};

const cards = {};

export { links, buttons, cards };
