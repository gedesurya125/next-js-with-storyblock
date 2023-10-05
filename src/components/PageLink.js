'use client';
/** @jsxImportSource theme-ui */

import React from 'react';
import Link from 'next/link';

export const PageLink = ({ children, href, sx, ...props }) => {
  return (
    <Link sx={sx} href={href} {...props}>
      {children}
    </Link>
  );
};
