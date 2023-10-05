import { storyblokEditable } from '@storyblok/react/rsc';

import { Paragraph } from 'theme/components';

const Feature = ({ blok }) => {
  console.log('this is the blok', blok);

  return <div {...storyblokEditable(blok)}>{blok.name}</div>;
};

export default Feature;
