import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  border-radius: ${p => p.theme.radii.small};
  /* background-color: aliceblue; */
  :hover:not(.active) {
    background-color: ${p => p.theme.colors.highlight};
  }
  &.active {
    background-color: ${p => p.theme.colors.primary};
  }
`;
