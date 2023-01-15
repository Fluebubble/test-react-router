import { Box } from 'components/Box/Box';
import { getInvoices } from 'fakeApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem } from './Invoices.styled';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);
  return (
    <Box display="flex">
      <Box
        p="3"
        as="aside"
        display="flex"
        flexDirection="column"
        borderRight="1px solid black"
        minHeight="200px"
        gridGap="2px"
      >
        {invoices.map(invoice => (
          <NavItem key={invoice.id} to={`${invoice.id}`}>
            {invoice.id}
          </NavItem>
        ))}
      </Box>
      {/* <Suspense fallback={null}> */}
        <Outlet />
      {/* </Suspense> */}
    </Box>
  );
};

export default Invoices;
