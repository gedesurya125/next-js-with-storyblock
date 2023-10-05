'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Link } from 'theme/components';

export const DevToggleDraftButton = ({ isDraftModeEnabled }) => {
  const pathname = usePathname();

  if (process.env.NODE_ENV !== 'development') return null;

  const text = isDraftModeEnabled
    ? 'back to published version'
    : 'go to preview version';

  const getDraftVersionUrl = (pathname) => {
    return `/api/draft?redirect=${pathname}&secret=${
      process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
    }`;
  };

  const getPublishedVersionUrl = (pathname) => {
    return `/api/exit-draft?redirect=${pathname}&secret=${
      process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
    }`;
  };

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_HOST_URL}${
        isDraftModeEnabled
          ? getPublishedVersionUrl(pathname)
          : getDraftVersionUrl(pathname)
      }`}
      sx={{
        position: 'fixed',
        bottom: '4rem',
        right: '4rem',
        textDecoration: 'none',
        border: '1px solid',
        borderColor: 'primary',
        borderRadius: '2px',
        color: 'primary',
        p: '0.5rem 1rem',
        ':hover': {
          bg: 'primary',
          color: 'background'
        }
      }}>
      {text}
    </Link>
  );
};
