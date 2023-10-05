import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import { GridWrapper } from 'theme/components';

const Grid = ({ blok }) => {
  return (
    <GridWrapper {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => {
        console.log('this is the nested block', nestedBlok);

        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </GridWrapper>
  );
};

export default Grid;
