import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@breadlee/ui';
import { Preview } from '@storybook/react';
import '@breadlee/icons/dist/icons.css';
import '@breadlee/icons/dist/icons.woff';

const preview: Preview = {
  decorators: [
    Story => {
      return (
        <ThemeProvider theme='light'>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
