import { Box, Container, Typography } from "@mui/material"
import { images } from '../data/imageMap';
import theme from "../theme/theme";

const HeroHead = ({ title, subtitle, bgImg }) => {


    return (
        <Container maxWidth="100%" sx={{ paddingInline: "0 !important" }}>
            <Box component="section"
                sx={{
                    position: "relative",
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    minHeight: '34dvh',
                    overflow: "hidden",
                    pt: { xs: 20, md: 22 },
                    zIndex: 0,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundImage: `url(${images[bgImg]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        height: "100%",
                        mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 44.1441%, rgb(0, 0, 0) 100%)",
                        zIndex: 1,
                    }
                }}
            >
                <Box textAlign={"center"} sx={{ zIndex: 2, px: 2 }}>
                    <Typography variant="h1" color="primary" className="fs-58" sx={{
                        position: "relative",
                        width: "fit-content",
                        margin: "auto",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            right: "-120px",
                            width: "100px",
                            height: "1px",
                            backgroundColor: theme.palette.primary.main,
                            transform: "translateY(-50%)",
                        }, "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            left: "-120px",
                            width: "100px",
                            height: "1px",
                            backgroundColor: theme.palette.primary.main,
                            transform: "translateY(-50%)",
                        }
                    }}>{title}</Typography>
                    {subtitle && (
                        <Typography className="fs-18" sx={{ mt: 2 }}>
                            {subtitle}
                        </Typography>
                    )}

                </Box>

            </Box>
        </Container>
    )
}

export default HeroHead
