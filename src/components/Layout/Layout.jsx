import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    // <p>KEK</p>
    <Box
      display="grid"
      gridTemplateColumns="200px 1fr"
      bg="background"
      color="text"
    >
      <AppBar />
      <Suspense fallback={<h1>AHTUNG!</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
