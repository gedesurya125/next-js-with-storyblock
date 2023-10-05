import { cache } from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';

export const storyblokFetchStory = cache(async (storyEndPoint) => {
  let sbParams = { version: 'draft' }; //draft or published

  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/${storyEndPoint}`, sbParams);
});
