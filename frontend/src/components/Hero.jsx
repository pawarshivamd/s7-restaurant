import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion, px } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroInterior from "../assets/img/hero-main.webp"
import AppButton from '../ui/AnimatedButton';
import theme from '../theme/theme';
gsap.registerPlugin(ScrollTrigger);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const foodImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
];

export default function Hero() {
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current.querySelectorAll('.hero-animate'), {
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
      if (rightRef.current) {
        gsap.from(rightRef.current, {
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <Container maxWidth className='hero-section' sx={{ paddingInline: "0 !important" }}>
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          minHeight: { xs: "60dvh", md: "100dvh" },
          backgroundColor: 'var(--color-background)',
        }}
      >
        {/* Left: content */}
        <Box
          ref={leftRef}
          sx={{
            flex: { md: '1 1 55%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 2, md: 4, lg: 6 },
            py: { xs: 4, md: 6 },
            paddingLeft: { xs: 2, md: 4, lg: 19 },
          }}
        >
          <motion.div variants={container} initial="hidden" animate="show">
            <Box className="hero-animate animate-img-container" sx={{ display: 'flex', gap: { xs: 1, md: 3 }, mb: 3, flexWrap: 'wrap' }}>

              {foodImages.map((src, i) => (
                <motion.img
                  key={i}
                  variants={item}
                  src={src}
                  className='animate-img img-fluid'
                  alt=""

                />
              ))}
            </Box>
            <motion.div variants={item}>
              <Typography
                className="fs-68 hero-animate"
                variant="h1"
                color={theme.palette.primary.main}
                sx={{
                  fontFamily: 'Fraunces',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  maxWidth: 520,
                }}
              >
                The Epitome Of Luxury Dining A Harmony
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Typography
                className="fs-16 hero-animate"
                sx={{
                  color: 'var(--color-paragraph)',
                  mt: 2,
                  maxWidth: 480,
                }}
              >
                Experience the Art of Fine Dining Meticulously Prepared with the
                Finest Seasonal Ingredients.
              </Typography>
            </motion.div>
            <Box className="hero-animate" sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
              <AppButton to="/book" icon={<ArrowOutwardIcon />} sx={{ width: { xs: "100%", sm: "auto" } }} >
                Book A Table
              </AppButton>
              <AppButton to="/menu" variant="outlined" icon={<ArrowOutwardIcon />} sx={{ width: { xs: "100%", sm: "auto" } }}>
                Explore Menu
              </AppButton>
            </Box>
          </motion.div>
        </Box>

        {/* Right: dimmed interior image */}
        <Box
          ref={rightRef}
          sx={{
            flex: { md: '1 1 45%' },
            minHeight: { xs: 320, md: '100dvh' },
            position: 'relative',
            overflow: 'hidden',
            mask: 'radial-gradient(135% 57.99999999999999% at 17.8% 41.9%, #000000 0%, rgba(0, 0, 0, 0) 100%) add',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${heroInterior})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'var(--color-overlay)',
              opacity: 0.6,
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}
