import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { Box } from 'components/Box/Box';
import { NavLink } from 'react-router-dom';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="column" gridGap='3'>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href} color="text">
            <Icon size={16} /> 
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
