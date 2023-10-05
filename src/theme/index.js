// client imports
import { fontFamilies } from './fonts/fontFamilies';
import { colors } from './colors';
import { buttons, links, cards } from './elements';
import { shadows, radii } from './styles';
import { forms } from './forms';
import { text } from './text';
import {
  theme as piecesTheme,
  fullWidthMinusMargins
} from '@thepuzzlers/pieces';
import { getOverlapBackgroundWidth } from './getOverlapBackgroundWidth';

export const theme = {
  // pieces styles
  breakpoints: piecesTheme.breakpoints,
  measure: piecesTheme.measure,
  grids: piecesTheme.grids,
  // local styles
  fonts: fontFamilies,
  colors,
  buttons,
  links,
  cards,
  shadows,
  radii,
  text,
  forms,
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
      bg: 'background',
      hr: {
        borderWidth: 0
      },
      a: {
        color: 'illustration.chlorella'
      }
    },
    h1: {
      fontSize: ['4rem', '4.4rem', '4.8rem', '4.4rem', '4.8rem', '5.2rem'],
      // fontFamily: 'primary.normal',
      variant: 'text.heading.normal',
      mb: ['3rem', '3.8rem', '4rem', '3.8rem', '4rem', '4.2rem'],
      lineHeight: 1.15,
      hyphens: 'auto'
    }
  },
  sizes: {
    phoneSectionBackground: getOverlapBackgroundWidth('max', 0),
    tabletPortraitSectionBackground: getOverlapBackgroundWidth(3.3, 1),
    tabletLandscapeSectionBackground: getOverlapBackgroundWidth(5.7, 2),
    desktopSectionBackground: getOverlapBackgroundWidth(4.2, 3),
    tabletPortraitFullScreen: `calc(100% - 2 * ${fullWidthMinusMargins[1]})`,
    tabletLandscapeFullScreen: `calc(100% - 2 * ${fullWidthMinusMargins[2]})`
  },
  space: {
    fullPaddingPhonePortrait: `calc(-1 * ${fullWidthMinusMargins[0]})`,
    fullPaddingTabletPortrait: `calc(-1 * ${fullWidthMinusMargins[1]})`,
    fullPaddingTabletLandscape: `calc(-1 * ${fullWidthMinusMargins[2]})`,
    fullPaddingDesktop: `calc(-1 * ${fullWidthMinusMargins[3]})`
  }
};
