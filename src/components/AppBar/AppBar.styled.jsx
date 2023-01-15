import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme/theme';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  /* background-color: ${p => p.theme.colors.primary}; */
  border-radius: ${p => p.theme.radii.small};
  :hover:not(.active) {
    background-color: ${p => p.theme.colors.highlight};
  }
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
