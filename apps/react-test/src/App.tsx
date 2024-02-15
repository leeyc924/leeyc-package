import { ThemeProvider, Typography, palette } from '@breadlee/ui';
import { useState } from 'react';

function App() {
  return (
    <ThemeProvider>
      <div style={{ color: palette.Background }}>
        <Typography>test</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
