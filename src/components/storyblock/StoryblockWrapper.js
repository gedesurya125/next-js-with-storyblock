'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react';

// ? this initialization cannot called in server component, so the api also will be from client component
// ? this function does two thing: initialize the connection and provide api client
storyblokInit({
  accessToken: process.env.NEXT_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu' // default
  }
});

export const StoryblockWrapper = ({ children }) => {
  return children;
};
