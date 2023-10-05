import { getBaseUrl } from 'helper/getBaseUrl';

const sitemap = async () => {
  const baseUrl = getBaseUrl();

  const staticRoute = [
    '/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...staticRoute];
};

export default sitemap;
