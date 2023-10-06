// ? story can be (:full_slug|:id|:uuid)

import { CACHE_TAGS } from 'constants/cacheTags';
import { STORYBLOK_BASE_URL } from './baseUrls';
import { CONTENT_VERSION } from 'constants/contentVersion';

export const getOneStory = async (
  story,
  version = CONTENT_VERSION.published
) => {
  try {
    const result = await fetch(
      `${STORYBLOK_BASE_URL.default}/cdn/stories/${story}?token=${process.env.NEXT_STORYBLOCK_PREVIEW_ACCESS_TOKEN}&version=${version}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        next: { tags: [CACHE_TAGS.all] }
      }
    );
    return await result.json();
  } catch (error) {
    console.log('error while fetching one story', error);
  }
};
