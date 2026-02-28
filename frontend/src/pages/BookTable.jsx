import { useState, useEffect, lazy } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  CircularProgress,
  Modal,
  Button,
  Collapse,
  IconButton,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../data/imageMap';
const HeroHead = lazy(() => import('../components/HeroHead'));
import theme from '../theme/theme';
import { saveReservation, getReservations } from '../utils/reservationStorage';
import { generateReservationPDF } from '../utils/pdfGenerator';
import {
  reservationSchema,
  getOperatingHours,
  minutesToTimeStr,
} from '../validation';
import { Link } from 'react-router-dom';

const defaultValues = {
  name: '',
  email: '',
  contactNumber: '',
  numberOfSeats: '',
  date: '',
  time: '',
};

const BookTable = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [myBookings, setMyBookings] = useState([]);
  const [bookingsExpanded, setBookingsExpanded] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(reservationSchema),
  });

  useEffect(() => {
    setMyBookings(getReservations());
  }, []);

  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const saved = saveReservation(values);
    setReservationData(saved);
    setShowSuccessModal(true);
    reset(defaultValues);
    setMyBookings(getReservations());
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setReservationData(null);
  };

  const watchedDate = watch('date');
  const { timeConstraints, hoursHint, minTime, maxTime } = (() => {
    if (!watchedDate) return { timeConstraints: {}, hoursHint: '', minTime: undefined, maxTime: undefined };
    const d = new Date(watchedDate + 'T12:00:00');
    const day = d.getDay();
    const { start, end, label } = getOperatingHours(day);
    const min = minutesToTimeStr(start);
    const max = minutesToTimeStr(end);
    const [minH, minM] = min.split(':').map(Number);
    const [maxH, maxM] = max.split(':').map(Number);
    return {
      timeConstraints: { min, max },
      hoursHint: `Open ${label} on this day`,
      minTime: dayjs().hour(minH).minute(minM || 0),
      maxTime: dayjs().hour(maxH).minute(maxM || 0),
    };
  })();

  const handleDownloadPDF = async (reservation) => {
    setPdfLoading(reservation.id);
    try {
      await generateReservationPDF(reservation);
    } finally {
      setPdfLoading(null);
    }
  };

  return (
    <>
      <HeroHead
        title="Reserve Your Experience"
        bgImg="ZXQ5h7usoi1tgjxL5ad1Sim6lH8"
        subtitle="Every course ascends toward heaven, &  time slows to rhythm of fine wine, & unforgettable flavor"
      />
      <Box variant="section" className="section">
        <Container maxWidth="xl">
          <Card
            sx={{
              border: `1px solid ${theme.palette.custom.border}`,
              borderRadius: '4px',
              padding: { xs: 0, lg: 4 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Grid container spacing={{ xs: 0, lg: 4 }} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 6 }} order={{ md: 2 }} sx={{ position: { lg: 'absolute' }, top: 0, right: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'clamp(26.25rem, 19.7885rem + 17.9487vw, 33.25rem)',
                    mb: 2,
                    mask: {
                      xs: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06) 30%, rgb(0, 0, 0) 100%)',
                      md: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.66) 25.5097%, rgb(0, 0, 0) 100%)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={images._3veQ5mDnGLiIZo2h7y7d49tIaw}
                    alt="img"
                    className="img-fluid"
                    width={540}
                    height={365}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} order={{ md: 1 }} sx={{ mt: { xs: -20, md: 0 } }}>
                <Card sx={{ border: `1px solid ${theme.palette.custom.border}`, mx: { lg: 0, xs: 2 }, mb: { lg: 0, xs: 2 } }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h3"
                      className="fs-36"
                      sx={{
                        fontFamily: 'Fraunces',
                        textTransform: 'capitalize',
                        fontWeight: '500',
                        color: theme.palette.primary.main,
                        mb: 3,
                      }}
                    >
                      Dine With Us
                    </Typography>
                    <Grid container spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
                      <Grid size={{ lg: 6 }}>
                        <Typography variant="h5" className="fs-14" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                          Monday to Friday
                        </Typography>
                        <Typography className="fs-16" sx={{ color: theme.palette.paragraph, mb: 0 }}>
                          12:00 PM - 10:00 PM
                        </Typography>
                      </Grid>
                      <Grid size={{ lg: 6 }}>
                        <Typography variant="h5" className="fs-14" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                          Saturday and Sunday
                        </Typography>
                        <Typography className="fs-16" sx={{ color: theme.palette.paragraph, mb: 0 }}>
                          9:00AM - 12:00PM
                        </Typography>
                      </Grid>
                      <Grid size={{ lg: 12 }}>
                        <Typography variant="h5" className="fs-14" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                          Address
                        </Typography>
                        <Typography className="fs-16" sx={{ color: theme.palette.paragraph, mb: 0 }}>
                          <Link to="https://maps.app.goo.gl/ff9dg9P2NKd7nLxN6" target="_blank" style={{ color: theme.palette.custom.paragraph }}> s7 restaurant, CTM, Ahmedabad</Link>

                        </Typography>
                      </Grid>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12 }}>
                            <TextField
                              {...register('name')}
                              fullWidth
                              label="Name"
                              placeholder="Jane Smith"
                              error={!!errors.name}
                              helperText={errors.name?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 1,
                                  bgcolor: 'rgba(44, 44, 44, 0.5)',
                                  '& fieldset': { borderColor: theme.palette.custom.border },
                                  '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                },
                                '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              {...register('email')}
                              fullWidth
                              type="email"
                              label="Email"
                              placeholder="jane@framer.com"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 1,
                                  bgcolor: 'rgba(44, 44, 44, 0.5)',
                                  '& fieldset': { borderColor: theme.palette.custom.border },
                                  '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                },
                                '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              {...register('contactNumber')}
                              fullWidth
                              label="Contact Number"
                              placeholder="+91 8772 62627"
                              error={!!errors.contactNumber}
                              helperText={errors.contactNumber?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 1,
                                  bgcolor: 'rgba(44, 44, 44, 0.5)',
                                  '& fieldset': { borderColor: theme.palette.custom.border },
                                  '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                },
                                '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <TextField
                              {...register('numberOfSeats')}
                              fullWidth
                              type="number"
                              label="Number of Seats (1–20)"
                              placeholder="1–20"
                              inputProps={{ min: 1, max: 20, step: 1 }}
                              error={!!errors.numberOfSeats}
                              helperText={errors.numberOfSeats?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 1,
                                  bgcolor: 'rgba(44, 44, 44, 0.5)',
                                  '& fieldset': { borderColor: theme.palette.custom.border },
                                  '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                },
                                '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                              name="date"
                              control={control}
                              render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <DatePicker
                                  label="Date"
                                  value={value ? dayjs(value) : null}
                                  onChange={(newVal) => onChange(newVal ? newVal.format('YYYY-MM-DD') : '')}
                                  minDate={dayjs()}
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                      error: !!error,
                                      helperText: error?.message,
                                      sx: {
                                        '& .MuiOutlinedInput-root': {
                                          borderRadius: 1,
                                          bgcolor: 'rgba(44, 44, 44, 0.5)',
                                          '& fieldset': { borderColor: theme.palette.custom.border },
                                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                        },
                                        '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                                        '& .MuiButtonBase-root': { color: theme.palette.primary.main },
                                      },
                                    },
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                              name="time"
                              control={control}
                              render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TimePicker
                                  label="Time"
                                  value={value ? dayjs('2000-01-01 ' + value) : null}
                                  onChange={(newVal) => onChange(newVal ? newVal.format('HH:mm') : '')}
                                  minTime={minTime}
                                  maxTime={maxTime}
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                      error: !!error,
                                      helperText: error?.message || (hoursHint && watchedDate ? hoursHint : undefined),
                                      sx: {
                                        '& .MuiOutlinedInput-root': {
                                          borderRadius: 1,
                                          bgcolor: 'rgba(44, 44, 44, 0.5)',
                                          '& fieldset': { borderColor: theme.palette.custom.border },
                                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                        },
                                        '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                                        '& .MuiButtonBase-root': { color: theme.palette.primary.main },

                                      },
                                    },
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <Button
                              type="submit"
                              variant="contained"
                              fullWidth
                              disabled={isSubmitting}
                              sx={{
                                py: 1.5,
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.text.black,
                                textTransform: 'capitalize',
                                fontWeight: 600,
                                '&:hover': {
                                  bgcolor: theme.palette.primary.dark,
                                },
                                '&:disabled': {
                                  bgcolor: theme.palette.custom.border,
                                  color: theme.palette.paragraph,
                                },
                              }}
                            >
                              {isSubmitting ? (
                                <>
                                  <CircularProgress size={22} sx={{ color: 'inherit', mr: 1 }} />
                                  Reserving...
                                </>
                              ) : (
                                'Confirm My Reservation'
                              )}
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </LocalizationProvider>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>

          {/* My Bookings Section - View & re-download if user missed it */}
          {myBookings.length > 0 && (
            <Card
              sx={{
                mt: 4,
                border: `1px solid ${theme.palette.custom.border}`,
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Button
                fullWidth
                onClick={() => setBookingsExpanded(!bookingsExpanded)}
                sx={{
                  py: 2,
                  justifyContent: 'space-between',
                  color: theme.palette.primary.main,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                <Typography sx={{ fontFamily: 'Fraunces', fontWeight: 500 }}>
                  My Bookings ({myBookings.length})
                </Typography>
                <IconButton size="small" sx={{ color: 'inherit' }}>
                  {bookingsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Button>
              <Collapse in={bookingsExpanded}>
                <Box sx={{ px: 2, pb: 2 }}>
                  {myBookings.map((booking) => (
                    <Box
                      key={booking.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 1.5,
                        borderBottom: `1px solid ${theme.palette.custom.border}`,
                        '&:last-child': { borderBottom: 'none' },
                      }}
                    >
                      <Box>
                        <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                          {booking.id} • {booking.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.paragraph }}>
                          {new Date(booking.date + 'T12:00:00').toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}{' '}
                          at {booking.time} • {booking.numberOfSeats} guests
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={
                          pdfLoading === booking.id ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : (
                            <DownloadIcon fontSize="small" />
                          )
                        }
                        disabled={pdfLoading === booking.id}
                        onClick={() => handleDownloadPDF(booking)}
                        sx={{
                          color: theme.palette.primary.main,
                          borderColor: theme.palette.custom.border,
                          textTransform: 'capitalize',
                          '&:hover': { borderColor: theme.palette.primary.main },
                        }}
                      >
                        Download PDF
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Card>
          )}
        </Container>
      </Box>
      <Box variant="section" className="">
        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ lg: { py: 3 }, alignItems: "center" }}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card sx={{ borderRadius: 1, border: '1px solid #bcbcbc29', textAlign: 'center' }}>
                <CardContent sx={{ px: { xs: 2, lg: 2 }, py: { xs: 2, lg: 3 } }}>
                  <Typography variant="h4" className='fs-16' sx={{ fontWeight: 500, color: theme.palette.primary.light, mb: 1 }}>
                    Address
                  </Typography>
                  <Typography variant="h5" className='fs-14' sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                    <Link to="https://maps.app.goo.gl/ff9dg9P2NKd7nLxN6" target="_blank" style={{ color: theme.palette.text.secondary }}> s7 restaurant, CTM, Ahmedabad</Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card sx={{ borderRadius: 1, border: '1px solid #bcbcbc29', textAlign: 'center' }}>
                <CardContent sx={{ px: { xs: 2, lg: 2 }, py: { xs: 2, lg: 3 } }}>
                  <Typography variant="h4" className='fs-16' sx={{ fontWeight: 500, color: theme.palette.primary.light, mb: 1 }}>
                    Weekdays
                  </Typography>
                  <Typography variant="h5" className='fs-14' sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                    10:00 AM - 11:00 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card sx={{ borderRadius: 1, border: '1px solid #bcbcbc29', textAlign: 'center' }}>
                <CardContent sx={{ px: { xs: 2, lg: 2 }, py: { xs: 2, lg: 3 } }}>
                  <Typography variant="h4" className='fs-16' sx={{ fontWeight: 500, color: theme.palette.primary.light, mb: 1 }}>
                    Weekends
                  </Typography>
                  <Typography variant="h5" className='fs-14' sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                    10:00 AM - 11:00 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card sx={{ borderRadius: 1, border: '1px solid #bcbcbc29', textAlign: 'center' }}>
                <CardContent sx={{ px: { xs: 2, lg: 2 }, py: { xs: 2, lg: 3 } }}>
                  <Typography variant="h4" className='fs-16' sx={{ fontWeight: 500, color: theme.palette.primary.light, mb: 1 }}>
                    Contact
                  </Typography>
                  <Typography variant="h5" className='fs-14' sx={{ fontWeight: 500 }}>
                    <Link to="tel:+919345632448" style={{ color: theme.palette.text.secondary }}>+91 9345632448</Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ outline: 'none' }}
          >
            <Card
              sx={{
                p: 4,
                maxWidth: 480,
                width: '90%',
                mx: 2,
                textAlign: 'center',
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.custom.border}`,
                borderRadius: 2,
              }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Fraunces',
                    color: theme.palette.primary.main,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Your table has been reserved successfully!
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.paragraph,
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  📧 A confirmation email has been sent to your email address.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  startIcon={pdfLoading === reservationData?.id ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
                  disabled={pdfLoading === reservationData?.id}
                  onClick={() => reservationData && handleDownloadPDF(reservationData)}
                  sx={{
                    py: 1.5,
                    px: 3,
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.black,
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    mb: 2,
                    '&:hover': {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                >
                  Download Reservation PDF
                </Button>
                <br />
                <Button
                  variant="outlined"
                  onClick={handleCloseModal}
                  sx={{
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.custom.border,
                    textTransform: 'capitalize',
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Close
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default BookTable;
