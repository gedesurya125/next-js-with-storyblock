'use client';
import React from 'react';

// This is helper component to log the content to the browser instead of server cli
export const ClientLogger = ({ message = 'Client Logger', data }) => {
  console.log(message, data);
  return <></>;
};
