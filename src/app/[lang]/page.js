import StoryblokStory from '@storyblok/react/story';
import { getOneStory } from 'components/storyblock/getOneStory';
// import { storyblokFetchStory } from 'components/storyblock/storyblokFetch';
import { Box, Section } from 'theme/components';

const LandingPage = async ({ params }) => {
  // const { data } = await storyblokFetchStory('home');

  const dataFromNewAPi = await getOneStory('home');

  console.log('this is the one story', dataFromNewAPi.story.content.body);

  return (
    <Box>
      <StoryblokStory story={dataFromNewAPi.story} />
      {/* <h1>Story: {data.story.id}</h1>
      <StoryblokComponent blok={data.story.content} /> */}
    </Box>
  );
};

export default LandingPage;

// export async function fetchData() {
//   let sbParams = { version: 'published' }; //draft or published

//   const storyblokApi = getStoryblokApi();

//   console.log('this is the story block get', storyblokApi);

//   return storyblokApi.get(`cdn/stories/home`, sbParams);
// }
