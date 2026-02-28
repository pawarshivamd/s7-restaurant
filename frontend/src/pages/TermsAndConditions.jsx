import { lazy } from 'react'
import { Box, Container, Typography, List, ListItem } from '@mui/material'
import theme from '../theme/theme'
const HeroHead = lazy(() => import('../components/HeroHead'))

const TermsAndConditions = () => {
    return (
        <>
            <HeroHead
                title="Terms & Conditions"
                bgImg="E28s7XqLaKOapltaPlGRYqEgOA"
                subtitle="Please read these terms carefully before using our services."
            />
            <Box variant="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ color: theme.palette.paragraph, mb: 4 }}>
                        Last Updated: 11 May 2025
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            1. General Use
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                            By accessing our platform, you agree to comply with these terms. We reserve the right to modify or replace these terms at any time. It is your responsibility to check this page periodically for changes.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            2. Reservations & Bookings
                        </Typography>
                        <List sx={{ color: theme.palette.text.secondary, pl: 2, listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                All reservations are subject to availability and will only be confirmed upon receiving a notification from us.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                It is essential to provide accurate information when booking to ensure a seamless experience.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Cancellations must be made at least 24 hours in advance to avoid any applicable fees.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                We reserve the right to refuse service to anyone at our discretion.
                            </ListItem>
                        </List>
                    </Box>

                </Container>
            </Box>
        </>
    );
};

export default TermsAndConditions;
