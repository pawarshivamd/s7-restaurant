import { lazy } from 'react'
import { Box, Container, Typography, List, ListItem } from '@mui/material'
import theme from '../theme/theme'
const HeroHead = lazy(() => import('../components/HeroHead'))

const Privacy = () => {
    return (
        <>
            <HeroHead
                title="Privacy Policy"
                bgImg="E28s7XqLaKOapltaPlGRYqEgOA"
                subtitle="We value your privacy. This policy outlines how we handle your data in a secure and transparent way."
            />
            <Box variant="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ color: theme.palette.paragraph, mb: 4 }}>
                        Last Updated: 11 May 2025
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            1. How We Collect Data
                        </Typography>
                        <List sx={{ color: theme.palette.text.secondary, pl: 2, listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Personal details like your name and email when you make a reservation.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Technical information such as your IP address and browser type for analytics.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Interactions with our site to help us improve the user experience.
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            2. Data Usage
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                            We use the collected information to provide and maintain our service, notify you about changes, and provide customer support.
                        </Typography>
                        <List sx={{ color: theme.palette.text.secondary, pl: 2, listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Processing your orders and reservations efficiently.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Communicating promotions and updates based on your preferences.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Complying with legal obligations.
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            3. Information Sharing
                        </Typography>
                        <List sx={{ color: theme.palette.text.secondary, pl: 2, listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                <strong>Trusted Partners:</strong> We may share data with secure payment gateways and hosting services.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                <strong>Legal Requirements:</strong> We may disclose information if required by law.
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontFamily: 'Fraunces', fontWeight: 600 }}>
                            4. Security Measures
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                            Your data security is paramount. We implement a variety of security measures to maintain the safety of your personal information:
                        </Typography>
                        <List sx={{ color: theme.palette.text.secondary, pl: 2, listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Employing state-of-the-art encryption across all data transmissions.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                                Ensuring strict access controls for our staff regarding user data.
                            </ListItem>
                        </List>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 2 }}>
                            However, no system is completely flawless, and we continuously update our protocols to adapt to new threats.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Privacy