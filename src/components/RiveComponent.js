'use client';
import React from 'react';
import { useRive } from '@rive-app/react-canvas';

// Local Components

const RiveComponent = ({ src }) => {
  const { RiveComponent } = useRive({
    src,
    autoplay: true
  });
  return <RiveComponent />;
};

export default RiveComponent;
