import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import HeaderTitle from "./HeaderTitle"
import AppButton from "../ui/AnimatedButton"
import theme from "../theme/theme"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { images } from '../data/imageMap';
import { Link } from "react-router-dom";

const ReserveExperienceSec = () => {
    return (
        <Box variant="section" className="section">
            <Container maxWidth="xl">
                <HeaderTitle title="Reserve Your Experience" description="Every course ascends toward heaven, & time slows to rhythm of fine wine, & unforgettable flavor" />
                <Card sx={{ border: `1px solid ${theme.palette.custom.border}`, borderRadius: "4px", padding: { xs: 0, lg: 4 }, position: "relative", overflow: "hidden" }}>
                    <Grid container spacing={{ xs: 0, lg: 4 }} sx={{ alignItems: "center" }}>
                        <Grid size={{ xs: 12, md: 6 }} order={{ md: 2 }} sx={{ position: { lg: "absolute" }, top: 0, right: 0 }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 'clamp(22.5rem, 17.5781rem + 15.75vw, 26.4375rem)', mb: 2, mask: { xs: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06) 30%, rgb(0, 0, 0) 100%)", md: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.66) 25.5097%, rgb(0, 0, 0) 100%)" } }}>
                                <Box component="img" src={images.uJ8s5QaULeThA2JRoHUeOECmuM} alt="img" className='img-fluid' width={540} height={365} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} order={{ md: 1 }} sx={{ mt: { xs: -20, md: 0 } }}>
                            <Card sx={{ border: `1px solid ${theme.palette.custom.border}`, mx: { lg: 0, xs: 2 }, mb: { lg: 0, xs: 2 } }}>
                                <CardContent>
                                    <Typography variant='h3' className='fs-36' sx={{ fontFamily: "Fraunces", textTransform: "capitalize", fontWeight: "500", color: theme.palette.primary.main, mb: 3 }}>An evening of exquisite taste, quiet luxury</Typography>
                                    <Grid container spacing={2} sx={{ alignItems: "center", mb: 4 }}>
                                        <Grid size={{ lg: 6 }}>
                                            <Typography variant='h5' className='fs-14' sx={{ color: theme.palette.primary.main, mb: 1 }}>Monday to Friday</Typography>
                                            <Typography className='fs-16' sx={{ color: theme.palette.paragraph, mb: 0 }}>12:00 PM - 10:00 PM</Typography>
                                        </Grid>
                                        <Grid size={{ lg: 6 }}>
                                            <Typography variant='h5' className='fs-14' sx={{ color: theme.palette.primary.main, mb: 1 }}>Saturday and Sunday</Typography>
                                            <Typography className='fs-16' sx={{ color: theme.palette.paragraph, mb: 0 }}>9:00AM -12:00PM</Typography>
                                        </Grid>
                                        <Grid size={{ lg: 12 }}>
                                            <Typography variant='h5' className='fs-14' sx={{ color: theme.palette.primary.main, mb: 1 }}>Address</Typography>
                                            <Link to="https://maps.app.goo.gl/ff9dg9P2NKd7nLxN6" target="_blank" style={{ color: theme.palette.custom.paragraph }}> s7 restaurant, CTM, Ahmedabad</Link>
                                        </Grid>
                                    </Grid>
                                    <AppButton to="/book" icon={<ArrowOutwardIcon />}>Make a Reservation</AppButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    )
}

export default ReserveExperienceSec
