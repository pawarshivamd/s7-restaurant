import { motion } from "framer-motion";
import { AppData } from "../data/db.json";
import { Box, Card, Typography } from "@mui/material";
import theme from "../theme/theme";

const SignatureSlider = () => {
    const items = AppData.menuItems.filter(i => i.isSignature === true);
    const loopItems = [...items, ...items];
    return (
        <Box

            sx={{
                overflow: "hidden",
                width: "100%",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%)",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    gap: "30px",
                }}
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                }}
            >
                {loopItems.map((item, index) => (
                    <Card
                        sx={{
                            position: 'relative',
                            height: 'clamp(22.5rem, 14.0625rem + 27vw, 29.25rem)',
                            width: '352px',
                            flexShrink: 0,
                            border: '1px solid #bcbcbc29'
                        }}
                    >
                        <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <Typography
                            variant='h3'
                            className='fs-20'
                            sx={{
                                fontWeight: 500,
                                color: theme.palette.primary.main,
                                position: 'absolute',
                                bottom: '20px',
                                textAlign: 'center',
                                width: '100%'
                            }}
                        >
                            {item.name}
                        </Typography>
                    </Card>
                ))}
            </motion.div>
        </Box>
    );
}

export default SignatureSlider
