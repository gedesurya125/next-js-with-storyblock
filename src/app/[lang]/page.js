import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { storyblokFetchStory } from 'components/storyblock/storyblokFetch';
import { Box, Section } from 'theme/components';

const LandingPage = async ({ params }) => {
  const { data } = await storyblokFetchStory('home');

  console.log('this is the data', data);

  return (
    <Box>
      <StoryblokStory story={data.story} />
      {/* <h1>Story: {data.story.id}</h1>
      <StoryblokComponent blok={data.story.content} /> */}
    </Box>
  );
};

export default LandingPage;

export const revalidate = 10;

export async function fetchData() {
  let sbParams = { version: 'published' }; //draft or published

  const storyblokApi = getStoryblokApi();

  console.log('this is the story block get', storyblokApi);

  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
