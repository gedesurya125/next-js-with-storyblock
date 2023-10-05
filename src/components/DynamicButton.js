'use client';
import React from 'react';

// ExternalComponents
import { Button, Link } from 'theme/components';
import { PageLink } from './PageLink';

export const DynamicButton = ({ children, variant, sx, href, ...props }) => {
  if (!href)
    return (
      <Btn sx={sx} variant={variant} {...props}>
        {children}
      </Btn>
    );

  const isExternalLink =
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  if (isExternalLink)
    return (
      <ExternalLink variant={variant} sx={sx} href={href} {...props}>
        {children}
      </ExternalLink>
    );

  return (
    <InternalLink variant={variant} sx={sx} href={href} {...props}>
      {children}
    </InternalLink>
  );
};

const Btn = ({ sx, variant, children, ...props }) => {
  return (
    <Button
      variant={variant}
      sx={{
        ...sx
      }}
      {...props}>
      {children}
    </Button>
  );
};

const InternalLink = ({ children, variant, href, sx, ...props }) => {
  return (
    <PageLink
      href={href}
      sx={{
        variant,
        ...sx
      }}
      {...props}>
      {children}
    </PageLink>
  );
};

const ExternalLink = ({ children, variant, href, sx, ...props }) => {
  return (
    <Link
      href={href}
      sx={{
        variant,
        ...sx
      }}
      {...props}>
      {children}
    </Link>
  );
};
