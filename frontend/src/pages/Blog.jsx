import { Box, Typography } from '@mui/material';

export default function Blog() {
  return (
    <Box sx={{ minHeight: '100vh', py: 8, px: 2 }}>
      <Typography variant="h1" sx={{ color: 'var(--color-primary-light)' }}>
        Blog
      </Typography>
      <Typography sx={{ color: 'var(--color-paragraph)', mt: 2 }}>
        Stories and updates from our kitchen.
      </Typography>
    </Box>
  );
}
