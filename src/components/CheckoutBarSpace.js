'use client';

import React from 'react';

// External Components
import { useParams } from 'next/navigation';
import { Spacer } from './Spacer';

export const CheckoutBarSpace = () => {
  const params = useParams();

  if (!params?.product_slug) return null;

  return (
    <Spacer
      className="__checkout-bar-spacer"
      height={['15rem', '18rem', null, null]}
      display={['block', 'block', 'none', 'none']}
    />
  );
};
