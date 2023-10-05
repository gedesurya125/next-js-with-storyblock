import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { Box } from 'theme/components';

const LandingPage = async ({ params }) => {
  const { data } = await fetchData();

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

export async function fetchData() {
  let sbParams = { version: 'published' }; //draft or published

  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
