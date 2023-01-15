import { Box } from 'components/Box/Box';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposites', text: 'Deposites' },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  border-radius: ${p => p.theme.radii.small};

  :visited {
    /* color: red */
  }
  &.active {
    color: #1b160d;
    background-color: ${p => p.theme.colors.secondary};
  }
  :hover(:not(&.active)) {
    color: ${p => p.theme.colors.primary};
  }
`;

const Sales = () => {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" borderBottom="1px solid black" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={<h1>INNER AHTUNG!</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Sales;
