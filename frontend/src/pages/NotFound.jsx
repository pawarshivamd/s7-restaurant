import { Box, Container, Typography } from '@mui/material';
import theme from '../theme/theme';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import AppButton from '../ui/AnimatedButton';
import { images } from '../data/imageMap';

const NotFound = () => {
    return (
        <Box
            sx={{
                minHeight: '100dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundImage: `url(${images.P82WDlEppAJDZp1n0o6MZMTyiq69kwp})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',

                py: 8
            }}
        >
            <Container>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Fraunces',
                        fontSize: { xs: '6rem', md: '10rem' },
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 2
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        color: theme.palette.text.primary,
                        mb: 3
                    }}
                >
                    Page Not Found
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.paragraph,
                        maxWidth: '500px',
                        mx: 'auto',
                        mb: { xs: 2, md: 4 }
                    }}
                >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>
                <AppButton to="/" icon={<ArrowOutwardIcon />}>
                    Back to Home
                </AppButton>

            </Container>
        </Box>
    );
};

export default NotFound;
