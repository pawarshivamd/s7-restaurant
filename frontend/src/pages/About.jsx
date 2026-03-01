import { useRef, lazy } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import theme from '../theme/theme';
import { AppData } from '../data/db.json';
import { images } from '../data/imageMap';
const HeroHead = lazy(() => import('../components/HeroHead'));
const ReserveExperienceSec = lazy(() => import('../components/ReserveExperienceSec'));
const HeaderTitle = lazy(() => import('../components/HeaderTitle'));

export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <HeroHead title="Our Story: A Legacy Reimagined" bgImg="MNjoZNXzt2gq5J0haAKAH7T75s" subtitle="A journey of passion, heritage, and timeless artistry written one plate at a time." />
      <Box component="section" className='section'>
        <Container maxWidth="xl">

          <Box ref={containerRef} sx={{ py: 10, position: "relative" }}>
            <Timeline position={isMobile ? "right" : "alternate"} sx={
              isMobile && {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            }>
              {AppData.aboutSection.milestones.map((item, index) => {
                const start = index / (AppData.aboutSection.milestones.length - 1);
                const end = (index + 1) / (AppData.aboutSection.milestones.length - 1);


                const localScaleY = useTransform(smoothProgress, [start, end], [0, 1]);

                return (
                  <TimelineItem key={index}>
                    {!isMobile && (
                      <TimelineOppositeContent sx={{ m: "auto 0" }}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, margin: "-100px" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <Box component="img" src={item.img} height="375" className='img-fluid' alt="" sx={{ borderRadius: "8px" }} />

                        </motion.div>
                      </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>

                      <TimelineDot sx={{ bgcolor: theme.palette.primary.main, zIndex: 2 }} />

                      {index !== AppData.aboutSection.milestones.length - 1 && (
                        <TimelineConnector
                          sx={{
                            width: "3px",
                            bgcolor: "#333",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <motion.div
                            style={{
                              scaleY: localScaleY,
                              originY: 0,
                              backgroundColor: theme.palette.primary.main,
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </TimelineConnector>
                      )}
                    </TimelineSeparator>

                    <TimelineContent sx={{ display: "flex", flexDirection: "column", my: "auto", py: "60px", px: 2 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }} // શરૂઆતમાં નીચે અને અદ્રશ્ય
                        whileInView={{ opacity: 1, y: 0 }} // સ્ક્ર્રોલ પર ઉપર આવશે
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >

                        {isMobile && (
                          <Box
                            component="img"
                            src={item.img}
                            height="375"
                            className='img-fluid'
                            sx={{ width: '100%', borderRadius: 2, mb: 2 }}
                          />
                        )}
                        <Typography variant="h6" color="primary" className='fs-14'>{item.title}</Typography>
                        <Typography variant="h4" fontFamily="Fraunces" className='fs-36' sx={{ fontWeight: 'bold', mb: 2 }}>
                          {item.year}
                        </Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </Box>
        </Container>
      </Box>
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <Box component="img" src={images.zYwlE6bhkHZ8U177Yka8SbtgF8} alt="About Section" className='img-fluid' sx={{}} />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", mt: 4, mb: 6 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.palette.custom.borderLight}`, flexGrow: 1 }}></Box>
            <Typography variant='h2' className='fs-58' sx={{ fontFamily: "Fraunces", color: theme.palette.primary.main, mx: 4 }}>our restaurant highlights</Typography>
            <Box sx={{ borderBottom: `1px solid ${theme.palette.custom.borderLight}`, flexGrow: 1 }}></Box>
          </Box>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            {AppData.aboutSection.highlights.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <Box sx={{ textAlign: "center", border: `1px solid ${theme.palette.custom.borderLight}`, borderRadius: '4px', padding: 2 }}>
                  <Typography variant='h5' className='fs-16' sx={{ color: theme.palette.primary.light, mb: 1 }}>{item.title}</Typography>
                  <Typography className='fs-14' sx={{ color: theme.palette.paragraph, mb: 0 }}>{item.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <HeaderTitle title="The Architects of Taste" description="Devoted to perfection meet the hands and hearts behind extraordinary experience." />
          <Box sx={{ border: `1px solid ${theme.palette.custom.border} `, padding: { xs: 2, md: 4 }, borderRadius: "4px" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Box >
                  <Box component="img" src={images.h9zeqrutEMctb15sn7NnFXChU} alt="About Us" className='img-fluid' sx={{ width: "100%", height: { xs: 290, sm: 350, md: 480, }, objectFit: "cover" }} />
                  <Typography variant='h3' className='fs-26' sx={{ color: theme.palette.primary.light, mt: 1 }}>Julien Deveraux</Typography>
                  <Typography className='fs-16' sx={{ color: theme.palette.paragraph }}>Executive Chef</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Box >
                  <Box component="img" src={images.bTtBzsxXjDCf2WIaUYShIEFqRus} alt="About Us" className='img-fluid' sx={{ width: "100%", height: { xs: 290, sm: 350, md: 480, }, objectFit: "cover" }} />
                  <Typography variant='h3' className='fs-26' sx={{ color: theme.palette.primary.light, mt: 1 }}>Julien Deveraux</Typography>
                  <Typography className='fs-16' sx={{ color: theme.palette.paragraph }}>Executive Chef</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Box >
                  <Box component="img" src={images.kuUmjfmXjEyW5zT2dRMfvAYmtaw} alt="About Us" className='img-fluid' sx={{ width: "100%", height: { xs: 290, sm: 350, md: 480, }, objectFit: "cover" }} />
                  <Typography variant='h3' className='fs-26' sx={{ color: theme.palette.primary.light, mt: 1 }}>Julien Deveraux</Typography>
                  <Typography className='fs-16' sx={{ color: theme.palette.paragraph }}>Executive Chef</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <ReserveExperienceSec />
    </>
  );
}
