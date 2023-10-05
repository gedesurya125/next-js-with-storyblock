'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

// This is the default component that created by Stroyblock
import Feature from './components/Feature';
import Page from './components/Page';
import Grid from './components/Grid';
import Teaser from './components/Teaser';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page
};

// ? this initialization cannot called in server component, so the api also will be from client component
// ? this function does two thing: initialize the connection and provide api client
storyblokInit({
  accessToken: process.env.NEXT_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components
});

export const StoryblockProvider = ({ children }) => {
  return children;
};
