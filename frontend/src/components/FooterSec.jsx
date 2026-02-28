import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from "@mui/material"
import AppButton from "../ui/AnimatedButton"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import theme from "../theme/theme"
import { Link } from "react-router-dom";
const socialsIcon = [
    {
        id: 'facebook',
        link: "https://www.facebook.com/",
        icon: <FacebookIcon color='primary' />
    },
    {
        id: 'linkedin',
        link: "https://www.linkedin.com/",
        icon: <LinkedInIcon color='primary' />
    },
    {
        id: 'pinterest',
        link: "https://www.pinterest.com/",
        icon: <PinterestIcon color='primary' />
    },
    {
        id: 'x',
        link: "https://x.com/",
        icon: <XIcon color='primary' />
    },
    {
        id: 'instagram',
        link: "https://www.instagram.com/",
        icon: <InstagramIcon color='primary' />
    }
]
const FooterSec = () => {
    return (
        <Box variant="footer" className="section" sx={{ pb: 2 }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, lg: 5 }} >
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                        <Typography variant='h4' className='fs-16' sx={{ color: theme.palette.primary.main, mb: 1 }}>Quick Links</Typography>
                        <List>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>Home</AppButton>
                            </ListItem>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/menu" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>Menu</AppButton>
                            </ListItem>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/about" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>About</AppButton>
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} >
                        <Typography variant='h4' className='fs-16' sx={{ color: theme.palette.primary.main, mb: 1 }}>Utility pages</Typography>
                        <List>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/book" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>Reservation</AppButton>
                            </ListItem>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/terms-conditions" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>terms & conditions</AppButton>
                            </ListItem>
                            <ListItem sx={{ py: "5px", px: 0 }}>
                                <AppButton to="/privacy-policy" variant='outlined' sx={{ width: "100%", justifyContent: "space-between", borderColor: theme.palette.primary.soft, "&:hover": { borderColor: theme.palette.custom.MarleyLight }, "& .button-icon::after": { backgroundColor: "transparent" } }} icon={<ArrowOutwardIcon />}>Privacy Policy</AppButton>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ md: 12, lg: 4 }} >
                        <Typography variant='h4' className='fs-16' sx={{ color: theme.palette.primary.main, mb: 1 }}>Newsletter</Typography>
                        <Typography className='fs-14' sx={{ color: theme.palette.paragraph, mb: 2 }}>Sign up today and let us serve you unforgettable flavors and moments, right to your inbox!</Typography>
                        <Box sx={{ display: "flex", gap: 1, }}>
                            <TextField id="outlined-basic" variant="outlined" placeholder='abc@gmail.com' size='sm' sx={{ flexGrow: 1 }} />
                            <Button variant="contained" color='primary' sx={{ background: "transparent" }} size='md'><ArrowOutwardIcon color='primary' /></Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
                            {socialsIcon.map((item) => (
                                <Box component={Link} to={item.link} key={item.id} sx={{ fontSize: "22px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", color: theme.palette.primary.main, cursor: "pointer", transition: "all 0.3s ease" }}>
                                    {item.icon}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ borderTop: `1px solid ${theme.palette.custom.borderLight}`, mt: 5, pt: 3 }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                        <Typography variant='h4' className='fs-14' sx={{ color: theme.palette.paragraph }}>&copy; 2026 S7Restaurant. All rights reserved.</Typography>
                        <Typography variant='h4' className='fs-14' sx={{ color: theme.palette.paragraph }}>Designed by <Link to="https://shivam-pawar-7.vercel.app/" target="_blank" component="span" style={{ color: theme.palette.primary.main }}>Shivam Pawar</Link></Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default FooterSec
