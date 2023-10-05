import './globals.css';

// External components
import { NextThemeUiProvider } from 'theme/NextThemeUiProvider';

// Local Components
import { StoryblockWrapper } from 'components/storyblock/StoryblockWrapper';

// Helper function
import { getBaseUrl } from 'helper/getBaseUrl';

// Fonts import
import 'theme/fonts/sourceSerif4/sourceSerif-SemiBold.css';
import 'theme/fonts/sourceSerif4/sourceSerif-regular.css';

import 'theme/fonts/sourceSans3/SourceSans3-regular.css';
import 'theme/fonts/sourceSans3/SourceSans-SemiBold.css';
import 'theme/fonts/sourceSerif4/SourceSerif4-medium-18pt.css';

// reason for [lang] directory https://nextjs.org/docs/app/building-your-application/routing/internationalization#localization

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

const baseUrl = getBaseUrl();

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
      <StoryblockWrapper>
        <html lang={lang}>
          <head></head>
          <body>
            <NextThemeUiProvider>{children}</NextThemeUiProvider>
          </body>
        </html>
      </StoryblockWrapper>
    </>
  );
}
