import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

//? Runtime explanation: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
export const runtime = 'edge';

//? In order to use the web hook we have to be aware of the next js configuration:
//? If "trailingSlash" is true, we have to use the webhook url with trailing slash
//? eg: https://example.com/api/?secret=123123123123123
//? Notice that we add trailing slash before the question mark

// TODO: Create readme related to this api usage
export async function revalidate(request) {
  const secret = process.env.NEXT_REVALIDATION_SECRET;
  const { searchParams } = new URL(request.url);

  const tag = searchParams.get('tag');
  const path = searchParams.get('path');

  if (
    secret &&
    searchParams.get('secret') !== secret // SECRET MUST BE SETUP
  ) {
    console.log('invalid secret');
    return NextResponse.json({ status: 200 });
  }

  if (!tag && !path)
    return NextResponse.json({
      status: 200
    });

  if (tag) {
    revalidateTag(tag);
  }
  if (path) {
    revalidatePath(path);
  }
  return NextResponse.json({
    status: 200,
    revalidated: true,
    now: Date.now()
  });
}
