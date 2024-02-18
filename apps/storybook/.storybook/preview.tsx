import React, { useEffect, useState } from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '@breadlee/ui';
import '@breadlee/icons/dist/icons.css';
import '@breadlee/icons/dist/icons.woff';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    }
  ],
};

export default preview;
