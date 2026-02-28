import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import Privacy from './pages/Privacy';
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const FooterSec = lazy(() => import('./components/FooterSec'));
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const BookTable = lazy(() => import('./pages/BookTable'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <FooterSec />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SmoothScroll />
        <ScrollToTop />
        <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}><CircularProgress color="primary" /></Box>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<BookTable />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
