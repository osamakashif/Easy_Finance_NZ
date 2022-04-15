import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Budget', 'Tax', 'Plan'];

/**
 * Navbar React component.
 * @returns Navbar for the application.
 */
export const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "green" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: isActive ? 'underline' : 'none' })}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}
            >
              EASY FINANCE NZ
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={'/' + page} style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: isActive ? 'underline' : 'none' })} key={page}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: isActive ? 'underline' : 'none' })}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: 'white', display: { xs: 'flex', md: 'none' } }}
            >
              EASY FINANCE NZ
            </Typography>
          </NavLink>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={'/' + page} style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: isActive ? 'underline' : 'none' })}>
                    <Typography color={'#0971F1'} textAlign="center">{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}