import { revalidate } from 'helper';

//? Runtime explanation: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
export const runtime = 'edge';

//? In order to use the web hook we have to be aware of the next js configuration:
//? If "trailingSlash" is true, we have to use the webhook url with trailing slash
//? eg: https://example.com/api/?secret=123123123123123
//? Notice that we add trailing slash before the question mark

// TODO: Create readme related to this api usage
export async function GET(request) {
  return revalidate(request);
}

export async function POST(request) {
  return revalidate(request);
}
