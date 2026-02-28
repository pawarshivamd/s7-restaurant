import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';
import HeroHead from '../components/HeroHead';
import theme from '../theme/theme';
import { AppData } from '../data/db.json';
import { useEffect, useState } from 'react';
import ReserveExperienceSec from '../components/ReserveExperienceSec';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("starters");

  const groupMenu = AppData.menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc;
  }, {})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    );

    AppData.menuCategories.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroHead title="Our Delicious Food Menu" bgImg="Fym37I8uBJzozphnUxe1fqDYq4" subtitle="Exclusive Affair of Exceptional Flavors Where Every Bite Tells a Story," />
      <Box component="section" className='section'>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="start">
            <Grid size={{ xs: 12, md: 4 }} sx={{
              position: { xs: "static", md: "sticky" },
              top: { md: 80 }
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
                {AppData.menuCategories.map((curEle) => {
                  const isActive = activeCategory === curEle.id;
                  return (
                    <Box component={Link} key={curEle.id} href={`#${curEle.id.toLowerCase()}`}
                      sx={{
                        width: "100%", display: 'flex', gap: "10px", alignItems: "center", border: `1px solid ${theme.palette.custom.MarleyLight}`, padding: "10px", borderRadius: "4px",
                        backgroundColor: isActive ? theme.palette.primary.main : 'transparent',

                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main
                        }
                      }}>
                      <Box component="img" src={curEle.icon} width={32} height={32} className='img-fulid' alt="" loading="lazy" />
                      <Typography className='fs-18' sx={{ flexGrow: 1, color: isActive ? "#000" : "#d6d1ce", }}>{curEle.name}</Typography>
                    </Box>
                  )
                })}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {Object.keys(groupMenu).map((category) => (
                  <Box key={category} id={category.toLowerCase()} sx={{ scrollMarginTop: '100px' }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: 2, }}>
                      <Typography
                        variant="h3"
                        className='fs-24'
                        color="primary"
                        sx={{ fontFamily: "Fraunces", textTransform: 'capitalize' }}
                      >
                        {category}
                      </Typography>
                      <Box sx={{ maxWidth: "100% ", borderTop: "3px solid #bcbcbc29", flexGrow: 1 }}></Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {groupMenu[category].map((item) => (
                        <Card
                          key={item.id}
                          sx={{
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Grid container>

                            <Grid item size={{ xs: 12, md: 7 }} sx={{ ml: { md: -3 } }} order={{ lg: 2 }}>
                              <Box sx={{ p: { xs: 2, md: 3 } }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                  <Box>
                                    {/* Tags (Signature Dish / Calories) */}
                                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                                      {item.isSignature && (
                                        <Typography sx={{ fontSize: '12px', bgcolor: theme.palette.primary.soft, color: theme.palette.primary.main, px: 1, py: 0.5 }}>
                                          Signature Dish
                                        </Typography>
                                      )}
                                      <Typography sx={{ fontSize: '12px', bgcolor: theme.palette.primary.soft, color: '#ccc', px: 1, py: 0.5 }}>
                                        {item.calories} kcal
                                      </Typography>
                                    </Box>

                                  </Box>
                                  <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                                    ${item.price}
                                  </Typography>
                                </Box>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontFamily: "Fraunces", mb: 1 }}>
                                  {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.6, }}>
                                  {item.description}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 5 }} sx={{ mt: { xs: -7, md: 0 } }} order={{ lg: 1 }}>
                              <Box
                                sx={{
                                  position: "",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "200px",
                                  filter: "brightness(1.08)",
                                  mask: { xs: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.62) 59.2793%, rgb(0, 0, 0) 100%)", md: "linear-gradient(269deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 48.8919%)" },
                                  zIndex: 1,
                                }}
                              >
                                <Box component="img" src={item.image} alt={item.name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></Box>
                            </Grid>
                          </Grid>
                        </Card>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <ReserveExperienceSec />
    </>
  );
}
