import React from 'react';
import Container from '@mui/material/Container';

// Import page components
import TopNav from './TopNav';

// Basic Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <TopNav/>
      <Container component="main" sx={{ ml: 0, mr: 0, minHeight: 'calc(100vh - 280px)' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
