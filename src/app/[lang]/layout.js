import './globals.css';

// External components
import { NextThemeUiProvider } from 'theme/NextThemeUiProvider';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
// import StoryblokBridgeLoader from '@storyblok/react/bridge-loader'; //? full server configuration

// Storyblock Components //? full server configuration
// import Feature from 'components/storyblock/components/Feature';
// import Page from 'components/storyblock/components/Page';
// import Grid from 'components/storyblock/components/Grid';
// import Teaser from 'components/storyblock/components/Teaser';

// Local Components

// Helper function
import { getBaseUrl } from 'helper/getBaseUrl';

// Fonts import
import 'theme/fonts/sourceSerif4/sourceSerif-SemiBold.css';
import 'theme/fonts/sourceSerif4/sourceSerif-regular.css';

import 'theme/fonts/sourceSans3/SourceSans3-regular.css';
import 'theme/fonts/sourceSans3/SourceSans-SemiBold.css';
import 'theme/fonts/sourceSerif4/SourceSerif4-medium-18pt.css';
import { StoryblockProvider } from 'components/storyblock/StoryblockProvider';

// reason for [lang] directory https://nextjs.org/docs/app/building-your-application/routing/internationalization#localization

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

const baseUrl = getBaseUrl();

storyblokInit({
  accessToken: process.env.NEXT_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin]
  // components: { //? full server configuration
  //   feature: Feature,
  //   grid: Grid,
  //   page: Page,
  //   teaser: Teaser
  // }
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  }
};

export default async function RootLayout({ children, params: { lang } }) {
  return (
    <>
      <NextThemeUiProvider>
        <StoryblockProvider>
          <html lang={lang}>
            <head></head>
            <body>{children}</body>
            {/* <StoryblokBridgeLoader options={{}} /> //? full server configuration */}
          </html>
        </StoryblockProvider>
      </NextThemeUiProvider>
    </>
  );
}
