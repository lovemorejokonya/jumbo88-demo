import React from 'react';
import Box from '@mui/material/Box';

// Import page components
import TopNav from './TopNav';

// Basic Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <TopNav />
      <Box
        component="main"
        sx={{
          width: '100vw',
          minHeight: 'calc(100vh - 64px)',
          bgcolor: 'transparent',
          px: 0,
          py: 0,
          background: 'linear-gradient(90deg, #0a0f1b 0%, #1e293b 100%)',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
