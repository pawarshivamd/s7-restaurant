import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion, AnimatePresence } from 'framer-motion';
import AppButton from '../ui/AnimatedButton';
import logo from '../assets/img/brand-logo.svg'
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [sticky, setSticky] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setSticky(y > 100);
      setHidden(y > lastY.current && y > 100);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <AppBar
        ref={navRef}
        elevation={0}
        className={`${sticky ? "sticky" : ""} ${hidden ? "hidden" : ""}`}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: sticky ? "blur(8px)" : "none",
          WebkitBackdropFilter: sticky ? "blur(8px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              alignItems: "center",
              minHeight: "clamp(3.75rem, 2.1875rem + 5vw, 5rem) !important",
              justifyContent: 'space-between',
              py: 1,
              px: 0
            }}
          >
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none',
              }}
            >
              <Box component="img" src={logo} sx={{ width: "50px", height: "50px", objectFit: "contain", }} title="S7Restaurant" alt="S7Restaurant" />
              <Typography variant="h5" sx={{ fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', }}>Restaurant</Typography>
            </Typography>

            {!isMobile ? (
              <Box sx={{ flexGrow: "1", display: 'flex', alignItems: 'center', justifyContent: "space-between", }}>
                <Box sx={{ flexGrow: "1", display: 'flex', justifyContent: "center" }}>
                  {navLinks.map(({ label, to }) => (
                    <Button
                      key={to}
                      component={Link}
                      to={to}
                      sx={{
                        px: 3,
                        color: 'var(--color-primary-light)',
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': { backgroundColor: 'rgba(230, 194, 161, 0.1)' },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
                <AppButton to="/book" icon={<ArrowOutwardIcon />}>
                  Book A Table
                </AppButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: 'center', gap: 3 }}>

                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: 'var(--color-primary-light)' }}
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile menu – smooth open with transparent background */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(6px)',
                zIndex: 1200,
              }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(320px, 85vw)',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                zIndex: 1201,
                padding: 24,
                paddingTop: 72,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <IconButton
                onClick={() => setMobileOpen(false)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'var(--color-primary-light)',
                }}
                aria-label="Close menu"
              >
                <CloseIcon />
              </IconButton>
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  <Button
                    fullWidth
                    component={Link}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: location.pathname === to ? 'var(--color-primary)' : 'var(--color-primary-light)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      py: 1.5,
                    }}
                  >
                    {label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                style={{ marginTop: 'auto', paddingTop: 16 }}
              >
                <AppButton to="/book" icon={<ArrowOutwardIcon />}>
                  Book A Table
                </AppButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>

  );
}
