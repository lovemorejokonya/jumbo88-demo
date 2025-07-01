import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
];

// Basic Topnav Component
const TopNav: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleCloseNavMenu();
  };
  return (
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: '#0a0f1b', minHeight: 100 }}>
          <RouterLink
           to="/"
           style={{
            textDecoration: 'none',
            color: 'inherit',
            marginRight: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <HomeIcon/>
          </RouterLink>

          {/* Switch + Cash + Add + Search */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: 2, minWidth: 0 }}>
            {/* Neon glass switch group */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(34,255,147,0.08)',
              borderRadius: 999,
              boxShadow: '0 4px 24px 0 #22ff93aa',
              border: '2px solid #22c55e',
              px: 1,
              py: 0.5,
              minWidth: 240,
              maxWidth: 320,
              height: 48,
              position: 'relative',
              mr: 2,
              // gap: 1,
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'linear-gradient(90deg, #a3e635 0%, #22c55e 100%)',
                boxShadow: '0 0 18px 0 #22ff93aa',
                borderRadius: 99,
                px: 2,
                py: 0.5,
                color: '#14532d',
                fontWeight: 700,
                fontSize: 20,
                height: 30,
                minWidth: 60,
                mr: 1,
                position: 'relative',
                zIndex: 2,
              }}>
                Cash
                <RefreshIcon sx={{ ml: 1, fontSize: 16, color: '#22c55e' }} />
              </Box>
              <Typography sx={{ color: '#22c55e', fontWeight: 700, fontSize: 16, mx: 2, minWidth: 40, textAlign: 'center' }}>
                0.20
              </Typography>
              <IconButton size="small" sx={{ border: '1.5px solid #22c55e', ml: 1, color: '#22c55e', bgcolor: 'rgba(34,255,147,0.08)', transition: '0.2s', '&:hover': { bgcolor: '#22c55e22', borderColor: '#a3e635' } }}>
                <AddIcon />
              </IconButton>
            </Box>
            {/* Search box */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(255,255,255,0.10)',
              borderRadius: 99,
              px: 2,
              py: 0.5,
              minWidth: 20,
              maxWidth: 120,
              height: 40,
              boxShadow: '0 2px 8px 0 #0003',
              border: '1.5px solid #22c55e',
              mr: 2,
            }}>
              <SearchIcon sx={{ color: '#22c55e', fontSize: 16, mr: 1 }} />
              <InputBase
                placeholder="Search..."
                sx={{ color: '#fff', width: '100%', fontSize: 16, fontWeight: 500, '& input': { p: 0, bgcolor: 'transparent' } }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          </Box>

          {isMobile ? (
            <Box sx={{ flexGrow: 0, display: 'flex' }}> {/* Adjusted flexGrow for mobile icon positioning */}
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
                {navItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => handleNavigate(item.path)}>
                    <Typography textAlign="center">{item.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavigate(item.path)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default TopNav;


