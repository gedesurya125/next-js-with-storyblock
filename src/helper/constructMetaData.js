export const constructMetaData = ({
  title,
  description,
  // url,
  imageUrl
}) => {
  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      images: imageUrl && [imageUrl]
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: imageUrl && [imageUrl],
      creator: process.env?.NEXT_PUBLIC_SEO_CREATOR || 'Algomed'
      // url //? twitter use url from open graph https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
    }
  };
};
