import { useState, lazy } from 'react';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import theme from '../theme/theme';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AboutImg from '../assets/img/0Cau2YA5I8X0DW1HAMu1EbJ6mOg.png';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarIcon from '@mui/icons-material/Star';
import { AppData, menuItems } from '../data/db.json';
import AppButton from '../ui/AnimatedButton';
const Hero = lazy(() => import('../components/Hero'));
const SignatureSlider = lazy(() => import('../components/SignatureSlider'));
const HeaderTitle = lazy(() => import('../components/HeaderTitle'));
const ReserveExperienceSec = lazy(() => import('../components/ReserveExperienceSec'));

const Home = () => {
  const [activeItem, setActiveItem] = useState('regal');
  return (
    <>
      <Hero />
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <HeaderTitle title="Our Menu" description="Where every bite tells a story crafted with intention, steeped in heritage, and designed to leave a lasting impression" />
          <Divider sx={{ backgroundColor: "#bcbcbc29", mb: 3 }} />
          <Grid container spacing={{ xs: 2, lg: 8 }} sx={{ lg: { py: 3 }, alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }} order={{ lg: 2 }}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  border: '1px solid #bcbcbc29',
                  height: 'clamp(16.25rem, -8.8281rem + 80.25vw, 36.3125rem)',
                  width: '100%',
                }}
              >
                {menuItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: activeItem === item.id ? 1 : 0,
                      visibility: activeItem === item.id ? 'visible' : 'hidden',
                      transition: 'opacity 0.5s ease, visibility 0.5s ease',
                      zIndex: activeItem === item.id ? 1 : 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </Box>
                ))}
              </Box>

            </Grid>
            <Grid size={{ lg: 6 }} order={{ lg: 1 }}>
              {menuItems.map((item, index) => (
                <Box
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item.id)}
                  sx={{
                    display: 'flex',
                    gap: 3,
                    py: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderBottom: index === menuItems.length - 1
                      ? 'none'
                      : `1px solid ${theme.palette.custom.border}`,

                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    },
                    '&:hover .menu-title': {
                      color: theme.palette.primary.main,
                    },
                    '&:hover .arrow-icon': {
                      color: theme.palette.primary.main,
                      transform: 'rotate(45deg)',
                    }
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h3"
                      className="fs-22 menu-title"
                      sx={{
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        color: activeItem === item.id ? theme.palette.primary.main : 'inherit'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography className="fs-16" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box>
                    <ArrowOutwardIcon
                      className="arrow-icon"
                      sx={{
                        fontSize: 26,
                        transition: 'all 0.3s ease',
                        transform: activeItem === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                        color: activeItem === item.id ? theme.palette.primary.main : 'inherit'
                      }}
                    />
                  </Box>
                </Box>
              ))}

              <Box sx={{ mt: 4 }}>
                <AppButton to="/menu" variant='outlined' icon={<ArrowOutwardIcon />}>
                  Explore Menu
                </AppButton>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <HeaderTitle title="Signature Dishes" description="Where every bite tells a story crafted with intention, steeped in heritage, and designed to leave a lasting impression" />
          <Divider sx={{ backgroundColor: "#bcbcbc29", mb: 3 }} />
          <Box sx={{ border: '1px solid #bcbcbc29', borderRadius: '4px', overflow: 'hidden' }}>
            <SignatureSlider />
          </Box>
        </Container>
      </Box>
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <HeaderTitle title="About us" description="Discover the story behind our passion for refined cuisine & exquisite ambiance" />
          <Box sx={{ border: '1px solid #bcbcbc29', borderRadius: '4px', padding: { xs: 2, lg: 3 } }}>
            <Grid container spacing={2} sx={{ alignItems: "center", mb: 4 }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
                <Box component="img" src={AboutImg} alt="AboutImg" width={562} height={462} className='img-fluid' sx={{ height: { xs: "200px", md: "462px" } }} loading='lazy' />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ backgroundColor: theme.palette.primary.soft, display: "inline-flex", alignItems: "center", gap: 1, px: 2, py: 1, borderRadius: "4px", color: theme.palette.primary.main, mb: 3 }}>
                  <WorkspacePremiumOutlinedIcon />
                  <Typography variant='h4' className='fs-12' sx={{ color: theme.palette.primary.main, mb: 0 }}>Michelin Star, 2025</Typography>
                </Box>
                <Typography variant='h2' className='fs-36' sx={{ fontFamily: "Fraunces", fontWeight: 600, color: theme.palette.primary.main, mb: 2 }}>
                  Explore our story for refined cuisine and timeless ambiance
                </Typography>
                <Typography className='fs-16' sx={{ color: theme.palette.paragraph, mb: 3 }}>
                  “Our story is one of growth, exploration, and unforgettable culinary memories — where every chapter is served with elegance.
                </Typography>
                <AppButton to="/menu" variant='outlined' icon={<ArrowOutwardIcon />}>
                  Explore Menu
                </AppButton>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              {AppData.aboutSection.highlights.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                  <Box sx={{ textAlign: "center", border: '1px solid #bcbcbc29', borderRadius: '4px', padding: 2 }}>
                    <Typography variant='h5' className='fs-16' sx={{ color: theme.palette.primary.light, mb: 1 }}>{item.title}</Typography>
                    <Typography className='fs-14' sx={{ color: theme.palette.paragraph, mb: 0 }}>{item.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <HeaderTitle title="Dining Testimonials" description="Where Every Review is a Testament to Excellence, and Every Visit Becomes a Legend" />

          <Grid container spacing={4} sx={{ alignItems: "center", mt: 3 }}>

            {AppData.testimonials.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                <Card sx={{ border: `1px solid ${theme.palette.custom.border}` }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Box sx={{ height: 64, width: 64, borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                        <Box component="img" src={item.avatar} alt={item.avatar} width={64} height={64} className='img-fluid' loading="lazy" sx={{ borderRadius: "6px", height: "100%", objectFit: "cover" }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5' className='fs-14' sx={{ color: theme.palette.primary.light, mb: 1 }}>{item.name}</Typography>
                        <Typography className='fs-12' sx={{ color: theme.palette.paragraph, mb: 0 }}>{item.designation}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", height: 'clamp(12.5rem, -0.3906rem + 41.25vw, 22.8125rem)', mb: 2 }}>
                      <Box component="img" src={item.image} alt="Quote" className='img-fluid' width={540} height={365} loading="lazy" sx={{ borderRadius: "4px", width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                    <Box>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                      <Typography variant='h4' className='fs-32' sx={{ color: theme.palette.primary.light, mb: 1 }}>{item.title}</Typography>
                      <Typography className='fs-14' sx={{ color: theme.palette.paragraph, mb: 0 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <ReserveExperienceSec />

    </>
  )
}

export default Home