import { Box, Grid, Typography } from "@mui/material"
import theme from "../theme/theme"

const HeaderTitle = ({ title = "",
    description = "",
    variant = "h2",
    titleClass = "fs-36",
}) => {
    return (
        <Grid container spacing={2} sx={{ pt:{lg:3}, pb: 3, alignItems: "center" }}>
            <Grid size={{ lg: 6 }}>
                <Box sx={{ flexGrow: "1", display: 'flex', alignItems: 'center', gap: {xs:2, lg:3}, }}>
                    <Box sx={{ minWidth: "40px", height: "2px", backgroundColor: theme.palette.primary.main }}></Box>
                    <Typography variant={variant}
                        className={titleClass} sx={{ fontFamily: "Fraunces", fontWeight: 600, color: theme.palette.secondary }}>
                        {title}
                    </Typography>
                </Box>
            </Grid>
            {description &&

                <Grid size={{ lg: 6 }}>
                    <Typography>{description}</Typography>
                </Grid>
            }
        </Grid>
    )
}

export default HeaderTitle
